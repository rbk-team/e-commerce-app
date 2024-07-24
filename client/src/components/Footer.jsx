import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import qrCodeImage from '../assets/Qrcode.png'; // Placeholder for QR code image
import googlePlayBadge from '../assets/google-play-badge.png'; // Placeholder for Google Play badge
import appStoreBadge from '../assets/app-store-badge.png'; // Placeholder for App Store badge

const Footer = () => {
  return (
    <footer className="bg-dark text-white ">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h6>Exclusive</h6>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email Address" />
              <div className="input-group-append">
                <button className="btn btn-outline-light" type="button">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <h6>Support</h6>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="col-md-2">
            <h6>Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">My Account</a></li>
              <li><a href="#" className="text-white">Login / Register</a></li>
              <li><a href="#" className="text-white">Cart</a></li>
              <li><a href="#" className="text-white">Wishlist</a></li>
              <li><a href="#" className="text-white">Shop</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Quick Link</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms Of Use</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Download App</h6>
            <p>Save $3 with App New User Only</p>
            <div className="d-flex align-items-center mb-3">
              <img src={qrCodeImage} alt="QR Code" className="img-fluid" style={{ width: '50px', marginRight: '10px' }} />
              <div>
                <ul className="list-unstyled">
                  <li><img src={appStoreBadge} alt="App Store Badge" className="img-fluid mb-2" style={{ width: '80px' }} /></li>
                  <li><img src={googlePlayBadge} alt="Google Play Badge" className="img-fluid" style={{ width: '80px' }} /></li>
                </ul>
              </div>
            </div>
            <div>
              <a href="#" className="text-white me-2"><FaFacebookF /></a>
              <a href="#" className="text-white me-2"><FaTwitter /></a>
              <a href="#" className="text-white me-2"><FaInstagram /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
