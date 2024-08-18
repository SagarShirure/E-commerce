import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/navigation'
import Footer from '../footer/Footer'
import Cart from '../Cart/Cart'
import ProductDetails from '../ProductDetails/ProductDetails'
import CheckOut from '../CheckOut/CheckOut.jsx';
import Order from '../Order/Order.jsx';
import OrderDetails from '../Order/OrderDetails.jsx';
import Product from '../Product/Product.jsx';
import HomePage from '../pages/HomePage'



const CustomerRouter = () => {
  return (
    <div>
      <div>
      <Navigation/>
      
      
      </div>
      <div>
      <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkOut' element={<CheckOut/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
             
       
      
        
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
        
    </div>
  )
}

export default CustomerRouter