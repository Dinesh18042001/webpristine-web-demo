import React from "react";
import "./signup.css";

export default function SignUp() {
  return (
    <>
      <div className="signup-section position-relative">

        <div className="container">
          <div className="signup-info">
            <h1 className="text-center">
              Newsletter <span>Sign Up</span>
            </h1>
            <p className="text-center">
              Our thought leaders curate articles and podcasts, all focused on
              automation, efficiency, outsourcing, and best practices. 
            </p>
            <p className="text-center">
              We handle your personal information with the utmost care and will
              never share it with third parties.
            </p>

            <div className="signup-icon text-center">
              <img src="./assets/icons/sign-up.png" alt="" />
            </div>

            <div className="signup-form mt-3 ">
              <form>
                <div className="row mb-3 justify-content-center">
                  <div className="col-md-4 mb-4">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="signup-btn text-center mt-4">
                  <a href="#" className="btn-custom">
                    Sign Up <i class="fa-solid fa-arrow-right me-1"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>


        <div className="left-sign-icon">
            <img src="./assets/icons/left-sign.png" alt="" />
        </div>
        <div className="right-sign-icon ">
            <img src="./assets/icons/right-sign.png" alt="" />
        </div>

      </div>
    </>
  );
}
