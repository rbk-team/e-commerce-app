
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';

import Navbar from "./components/Navbar";
import CardPage from './Pages/Card/Card.jsx';
import Hero from './Pages/Home/Hero.jsx';
import Footer from './components/Footer.jsx';
import Error from "./Pages/Error/Error.jsx";
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx'
import SignUp from "./Pages/Sign Up/SignUp.jsx";
import ProductDetails from "./Pages/Product Details/ProductDetails.jsx";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero/>} /> 
          <Route path="/Error" element={<Error />} />
          <Route path="/Card" element={<CardPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/details" component={<ProductDetails/>} />
        </Routes>
      </div>
      {location.pathname !== '/Card' && <Footer />}
    </>
  );
}


function App() {
  
  return (
    <CartProvider>
    <Router>
      <AppContent />
    </Router>
  </CartProvider>
  );
}

export default App;
