import React from "react";
import "./Options.css";

export default function Options() {
  return (
    <>
      <div className="pricing-scetion position-relative mt-5 mb-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center">Pricing Options</h1>
            <h5 className="text-center">
              Experience our per-package pricing model, offering ultimate
              flexibility.
            </h5>
            <h6 className="text-center">
              Say goodbye to minimums, monthly commitments and recurring
              subscriptions - with us, you're never locked into a per month
              contract.
            </h6>
          </div>

          <div className="card-box-main">
            <div className="container">
              <div className="row">
                {/* First Card: Starter */}
                <div className="col-lg-3 col-md-6 mb-5">
                  <div className="card-box position-relative">
                    <div className="option-card mb-4">
                      <h5 className="text-center mb-3">Starter</h5>
                      <div className="icon-container">
                        <i className="fa-solid fa-rocket"></i>
                      </div>
                      <h2 className="text-center">$156</h2>
                      <h6 className="text-center">20hr at $40.75</h6>
                      <hr />
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Unlimited
                        Users
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>No Monthly
                        Contract
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Access to
                        a Team of VAs
                      </p>
                    </div>
                    <div className="card-btn">
                      <a href="">
                        Get Started{" "}
                        <i className="fa-solid fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Second Card: Premium */}
                <div className="col-lg-3 col-md-6 mb-5">
                  <div className="card-box position-relative">
                    <div className="option-card mb-4">
                      <h5 className="text-center mb-3">Premium</h5>
                      <div className="icon-container">
                        <i className="fa-solid fa-briefcase"></i>
                      </div>
                      <h2 className="text-center">$2,196</h2>
                      <h6 className="text-center">60hr at $36.60</h6>
                      <hr />
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Priority
                        Support
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Unlimited
                        Users
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>No Monthly
                        Contract
                      </p>
                    </div>
                    <div className="card-btn">
                      <a href="">
                        Get Started{" "}
                        <i className="fa-solid fa-arrow-right ms-1"></i>
                      </a>
                    </div>

                    <div className="offer">
                      <h6>Save 20%</h6>
                    </div>
                  </div>
                </div>

                {/* Third Card: Core */}
                <div className="col-lg-3 col-md-6 mb-5">
                  <div className="card-box position-relative">
                    <div className="option-card mb-4">
                      <h5 className="text-center mb-3">Core</h5>
                      <div className="icon-container">
                        <i className="fa-solid fa-building"></i>
                      </div>
                      <h2 className="text-center">$1,550</h2>
                      <h6 className="text-center">40hr at $38.75</h6>
                      <hr />
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Dedicated
                        VA
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Unlimited
                        Users
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Priority
                        Support
                      </p>
                    </div>
                    <div className="card-btn">
                      <a href="">
                        Get Started{" "}
                        <i className="fa-solid fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fourth Card: Pay As You Go */}
                <div className="col-lg-3 col-md-6 mb-5">
                  <div className="card-box position-relative">
                    <div className="option-card mb-4">
                      <h5 className="text-center mb-3">Pay As You Go</h5>
                      <div className="icon-container">
                        <i className="fa-solid fa-cogs"></i>
                      </div>
                      <h2 className="text-center">$45.75/hr</h2>
                      <h6 className="text-center">40hr at $38.75</h6>
                      <hr />
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Custom
                        Solutions
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Unlimited
                        Users
                      </p>
                      <p>
                        <i className="fa-solid fa-thumbs-up me-2"></i>Dedicated
                        Support
                      </p>
                    </div>
                    <div className="card-btn">
                      <a href="">
                        Get Started{" "}
                        <i className="fa-solid fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-arrow-icon">
              <img src="./assets/icons/arrow-icon.png" alt="Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
