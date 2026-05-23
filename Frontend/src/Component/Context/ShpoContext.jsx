import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export const ShpoContext = createContext();

const ShpoContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_API_URL
    const [Search, setSearch] = useState("");
    const [ShowSeach, setShowSearch] = useState(false);
    const [products, setProduct] = useState([])
    const [cartItem, setCartItem] = useState({});
    const navigate = useNavigate();
    const [orderData, setOderData] = useState(null);
    const [token, setToken] = useState("")

    const placeorder = (customer_data) => {
        setOderData(customer_data);
    };
    const buyNow = async (itemId, size) => {
        if (!size) {
            toast.error("Select product size");
            return;
        }

        await addtoCart(itemId, size);
        navigate("/placeorder");
    };
    const addtoCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select product size");
            return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItem(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + "/api/cart/add", { itemId, size }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    };

    const getcartamount = () => {
        let totalamount = 0;

        for (const items in cartItem) {
            let iteminfo = products.find(
                (product) => product._id === items
            );

            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalamount += iteminfo.price * cartItem[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        return totalamount;
    };

    const getCartcount = () => {
        let totalcount = 0;

        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalcount += cartItem[items][item];
                    }
                } catch (error) { }
            }
        }

        return totalcount;
    };

    const getProductData = async () => {
        try {

            const response = await axios.get(backendUrl + "/api/product/list")
            if (response.data.success) {
                setProduct(response.data.products)
            }

        } catch (error) {

        }
    }
    useEffect(() => {
        getProductData()
    }, [])
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);

        try {

            if(token){
                await axios.post(backendUrl +"/api/cart/update",{itemId,size,quantity},{headers:{token}})
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };
    const getUsercart = async (token)=>{
            try {

            const response= await axios.post(backendUrl +"/api/cart/get",{},{headers:{token}})
            if(response.data.success){
                setCartItem(response.data.cartData)
            }
                
            } catch (error) {
                console.log(error)
            toast.error(error.message)
            }
    }

    useEffect(() => { }, [cartItem]);
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUsercart(localStorage.getItem('token'))
        }
    }, [])

    const logOut = () => {
        setToken('')
        localStorage.removeItem('token')
        navigate('/login')
    }


    const value = {
        products,
        currency,
        delivery_fee,
        Search,
        setSearch,
        ShowSeach,
        setShowSearch,
        cartItem,
        setCartItem,
        addtoCart,
        getCartcount,
        updateQuantity,
        getcartamount,
        navigate,
        placeorder,
        orderData,
        setOderData,
        buyNow,
        backendUrl, token, setToken, logOut,
    };

    return (
        <ShpoContext.Provider value={value}>
            {props.children}
        </ShpoContext.Provider>
    );
};

export default ShpoContextProvider;
