import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Contact from './Component/Pages/Contact';
import Cart from './Component/Pages/Cart'
import Collaction from './Component/Pages/Collaction'
import PlaceOrder from './Component/Pages/PlaceOrder'
import Product from './Component/Pages/Product'
import Login from './Component/Pages/Login'
import Order from './Component/Pages/Order';
import Naveber from './Component/Naveber/Naveber'
import axios from "axios";
import Footer from './Component/Footer/Footer';
import SearchBar from './Component/SearchBar/SearchBar';


import { ToastContainer, toast } from 'react-toastify';
import ProtectedRoute from './Component/Context/ProtectedRoute';


const App = () => {
  const location = useLocation()

  return (
    <div >
      <ToastContainer />

      {location.pathname !== "/login" && <Naveber />}
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/cart' element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>} />
        <Route path='/collection' element={
          
            <Collaction />
          } />
        <Route path='placeorder' element={
          <ProtectedRoute>
            <PlaceOrder />
          </ProtectedRoute>} />
        <Route path='/product/:productId' element={
          
            <Product />
          } />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
