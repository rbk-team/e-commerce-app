import React from 'react';
import image from '../assets/image.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginPage = () => {
  return (
  
    
      <div className="container-fluid vh-100 d-flex">
        <div className="row flex-grow-1">
          <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
            <img src={image} alt="Shopping" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <h1 className="mb-3">Log in to Exclusive</h1>
              <p className="text-muted mb-4">Enter your details below</p>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Email or Phone Number" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" className="btn btn-danger">Log In</button>
                  <a href="#" className="text-danger">Forget Password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default LoginPage;
