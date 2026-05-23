import React, { useContext, useEffect, useState } from 'react'
import { ShpoContext } from '../Context/ShpoContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Eye, EyeOff } from "lucide-react";

function Login() {

    const [isLogin, setLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const { token, setToken, backendUrl, navigate } = useContext(ShpoContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {

            if (isLogin) {
                //  Login API
                const response = await axios.post(backendUrl + "/api/user/login", {
                    email,
                    password
                })

                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem("token", response.data.token)
                    toast.success("Login Successful")

                } else {
                    toast.error(response.data.message)
                }

            } else {
                //  Signup API
                const response = await axios.post(backendUrl + "/api/user/register", {
                    name,
                    email,
                    password
                })


                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem("token", response.data.token)
                    toast.success("Signup Successful")
                    navigate("/")
                }
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">

            <div className="bg-white p-6 rounded-xl shadow-lg w-[320px]">

                {/* Toggle Buttons */}
                <div className="flex mb-5 ">
                    <button
                        type="button"
                        className={`w-1/2 py-2 text-base rounded-tl-xl cursor-pointer ${isLogin ? "bg-[#033452] text-white" : "bg-gray-200"}`}
                        onClick={() => setLogin(true)}
                    >
                        Login
                    </button>

                    <button
                        type="button"
                        className={`w-1/2 py-2 text-base rounded-tr-xl cursor-pointer ${!isLogin ? "bg-[#033452] text-white" : "bg-gray-200"}`}
                        onClick={() => setLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {/*  FORM START */}
                <form onSubmit={onSubmitHandler} className="flex flex-col">

                    <h2 className="text-xl font-semibold mb-5">
                        {isLogin ? "Login Form" : "Signup Form"}
                    </h2>

                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 mb-3 border border-gray-300 rounded-md cursor-text"
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 mb-3 border border-gray-300 rounded-md cursor-text"
                        required
                    />
                    <div className="relative mb-3">

                        <input
                            className="w-full p-2 pr-10 border border-gray-300 rounded-md cursor-text"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        

                    </div>
                    <p className='text-blue-500 mb-2 cursor-pointer'>Forgot Password?</p>
                    <button
                        type="submit"
                        className="p-2 bg-[#033452] text-white rounded-md hover:bg-[#02263d] transition cursor-pointer"
                    >
                        {isLogin ? "Login" : "Signup"}
                    </button>

                </form>
                {/* FORM END */}

            </div>
        </div>
    )
}

export default Login