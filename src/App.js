// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/component/Cart/Cart.jsx';
import CheckOut from './customer/component/CheckOut/CheckOut.jsx';
import Footer from './customer/component/footer/Footer';
import Navigation from './customer/component/Navigation/navigation';
import Order from './customer/component/Order/Order.jsx';
import OrderDetails from './customer/component/Order/OrderDetails.jsx';
import Product from './customer/component/Product/Product.jsx';
import ProductDetails from './customer/component/ProductDetails/ProductDetails.jsx';
import CustomerRouter from './customer/component/Router/CustomerRouter.jsx';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouter/>}>

        </Route>
      </Routes>
     
      <div>
       
      </div>
      <div>
        
      </div>
      
    </div>
  );
}

export default App;
