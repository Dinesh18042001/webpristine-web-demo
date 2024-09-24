import React from "react";
import "./yourapp.css";

export default function YourApp() {
  return (
    <>
      <div className="yourapp-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="yourapp-info">
                <h1 className="mb-5">
                  <span>Your App,</span>Your Way
                </h1>
                <p className="mb-5">Explore Our Development Options</p>
              </div>

              <div className="yourapp-icon d-flex gap-4">
                <div className="yourapp-icon1">
                  <img src="./assets/AppDevelopment/icon2.png" alt="" />
                </div>
                <div className="yourapp-icon2">
                  <img src="./assets/AppDevelopment/icon3.png" alt="" />
                </div>
                <div className="yourapp-icon3">
                  <img src="./assets/AppDevelopment/icon4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">

            

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
