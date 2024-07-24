
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';
import { UserProvider } from '../src/components/UserContext.jsx'; 
import { WishlistProvider } from '../src/components/WishListContex.jsx'
import Navbar from "./components/Navbar";
import CardPage from './Pages/Card/Card.jsx';
import Hero from './Pages/Home/Hero.jsx';
import Footer from './components/Footer.jsx';
import Error from "./Pages/Error/Error.jsx";
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx'
import SignUp from "./Pages/Sign Up/SignUp.jsx";
import Login from "./Pages/Login/Login.jsx";
import WishlistPage from "./Pages/WishList/WishList.jsx";
import ProductDetail from './Pages/Product Details/ProductDetails.jsx';
function AppContent() {
  const location = useLocation();
  return (
    <>
    <UserProvider>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero/>} /> 
          <Route path="/Error" element={<Error />} />
          <Route path="/Card" element={<CardPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/WishList" element={<WishlistPage/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />

        </Routes>
      </div>
      {location.pathname !== '/Card' && <Footer />}
      </UserProvider>
    </>
  );
}


function App() {
  
  return (
    <CartProvider>
    <WishlistProvider>
      <Router>
        <AppContent />
      </Router>
    </WishlistProvider>
  </CartProvider>
  );
}

export default App;
