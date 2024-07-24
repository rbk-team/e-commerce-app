
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';

import Navbar from "./components/Navbar.jsx";
import CardPage from './pages/Card/Card.jsx';
import Hero from './pages/Home/Hero.jsx';
import Footer from './components/Footer.jsx';
import Error from './pages/Error/Error.jsx'
import { UserProvider } from './UserContext.jsx'; // Adjust the path as necessary

import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx'
import SignUp from "./pages/Sign Up/SignUp.jsx";
import Login from "./pages/Login/Login.jsx";
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
    <Router>
      <AppContent />
    </Router>
  </CartProvider>
  );
}

export default App;
