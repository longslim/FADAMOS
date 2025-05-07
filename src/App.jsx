import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/navbar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Product from './pages/product/Product'
import Cart from './component/cart/Cart'
import CheckOut from './component/checkout/CheckOut'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <NavBar/>
        <Routes>
            <Route index path='/' element= {<Home/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/services' element= {<Services/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
            
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
