import React from "react";
import "./yourapp.css";

export default function YourApp() {
  return (
    <>
      <div className="yourapp-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="yourapp-info">
                <h1 className="mb-4">
                  <span>Your App,</span>Your Way
                </h1>
                <p className="mb-4">Explore Our Development Options</p>
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

            <div className="col-lg-8">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                  <div className="appcard1">
                    <h4 className="text-center mt-4 mb-5">
                      Hybrid <b>App Development</b>
                    </h4>
                    <img
                      src="./assets/AppDevelopment/phone.png"
                      alt="Phone Image"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                  <div className="appcard2">
                    <h4 className="text-center mt-4 mb-5">
                      Hybrid <b>App Development</b>
                    </h4>
                    <img
                      src="./assets/AppDevelopment/phone.png"
                      alt="Phone Image"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                  <div className="appcard3">
                    <h4 className="text-center mt-4 mb-5">
                      Hybrid <b>App Development</b>
                    </h4>
                    <img
                      src="./assets/AppDevelopment/phone.png"
                      alt="Phone Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
