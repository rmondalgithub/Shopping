import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmithandel = async (e) => {
    try {
      e.preventDefault();
      
      const response = await axios.post(backendUrl+'/api/user/admin',
        { email, password }
      )
      if(response.data.success){
        setToken(response.data.token)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.response?.data || error.message)
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <div className='px-10 py-8 bg-white shadow-md max-w-md rounded-lg'>
        <h1 className='text-2xl font-bold mt-4 mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmithandel}>
          <div className='mb-2 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-6 py-2 outline-none border border-gray-300 rounded-md' type='email' placeholder='your@email.com' required />
          </div>
          <div className='mb-2 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-6 py-2 outline-none border border-gray-300 rounded-md' type='password' placeholder='Enter your password' required />
          </div>
          <button className=' w-full px-4 py-2 text-white bg-black cursor-pointer border-none rounded-md'>Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login
