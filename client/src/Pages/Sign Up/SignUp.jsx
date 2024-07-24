import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/image.png';

const CreateAccountPage = () => {
  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row flex-grow-1">
        <div className="col-md-6 d-flex align-items-center ">
          <img src={image} alt="Shopping" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h1 className="mb-3">Create an account</h1>
            <p className="text-muted mb-4">Enter your details below</p>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Email or Phone Number" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-danger w-100 mb-3">Create Account</button>
              <button type="button" className="btn btn-light w-100 mb-3">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
                Sign up with Google
              </button>
              <p className="text-center">
                Already have account? <a href="#" className="text-danger">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
