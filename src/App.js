// import logo from './logo.svg';
import './App.css';
import Footer from './customer/component/footer/Footer';
import Navigation from './customer/component/Navigation/navigation';
import HomePage from './customer/component/pages/HomePage';


function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
      <div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
