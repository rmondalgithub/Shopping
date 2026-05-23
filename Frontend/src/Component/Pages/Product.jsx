import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShpoContext } from '../Context/ShpoContext';
import { assets } from '../../assets/frontend_assets/assets';
import RelatedProducts from './RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addtoCart,buyNow } = useContext(ShpoContext);
  const [productData, setproductData] = useState(false);
  const [Image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchproductsdata = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }
  useEffect(() => {
    fetchproductsdata();
  }, [productId])

  
  return productData ? (
    <div className='px-10 sm:px-35'>
      <div className=' pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* Products Data*/}
        <div className=' flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* Products Image */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index) => (
                  <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3  cursor-pointer' alt="" />
                ))
              }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img src={Image} alt="" className='w-full h-auto rounded-md' />
            </div>
          </div>
          {/* Products Info */}

          <div className='flex-1'>
            <div className='border border-gray-300 rounded-md px-4'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2 '>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
              <p className='pb-2 mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>
            </div>
            <div className='flex flex-col gap-4 py-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)}
                    className={`cursor-pointer border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500 bg-orange-100 text-orange-600' :
                      'bg-gray-100'}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={() => addtoCart(productData._id, size)} className=' rounded-md cursor-pointer bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
            <button onClick={()=>buyNow(productData._id,size)}  className='cursor-pointer bg-yellow-400  px-8 py-3 text-sm mx-4 rounded-md'>By at {currency} {productData.price}</button>
            <hr className='mt-8 md:w-3/4' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Orginal Products.</p>
              <p>Case on delivary is available on this products.</p>
              <p>Easy return and exchange policy within 7 days.</p>

            </div>
          </div>
        </div>
        {/*Description and Reviews Section */}
        <div className='mt-20 border rounded-md border-gray-300'>
          <div className='flex '>
            <b className=' px-5 py-3 text-sm'>Description</b>
            <p className=' px-5 py-3 text-sm'>Reviews(122)</p>
          </div>
          <div className='flex flex-col gap-4 px-5 py-3 text-sm text-gray-500'>
            <p>All reviews shared on our platform come from real and verified customers who have experienced our products firsthand. We believe that honest customer feedback is the foundation of trust and continuous improvement.</p>
            <p>Your satisfaction is our highest priority, which is why we focus on delivering quality products, accurate information, and reliable service every time. Shop with confidence and become part of a community that values transparency, authenticity, and a seamless online shopping experience.</p>
          </div>
        </div>
        {/*Display related product */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  ) : <div>

  </div>
}

export default Product
