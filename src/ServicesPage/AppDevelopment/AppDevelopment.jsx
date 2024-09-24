import React from "react";
import "./appdevelopment.css";
import AppServise from "./AppService/AppServise";
import TrustedBy from "./TrustedBy/TrustedBy";
import DreamApp from "./DreamApp/DreamApp";
import YourApp from "./YourApp/YourApp";

export default function AppDevelopment() {
  return (
    <>
      <div className="appdev-section mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appdev-info">
                <h1 className="mb-4">
                  Custom Mobile <span>App Development</span> Services
                </h1>
                <p className="mb-4">
                  Building highly scalable apps may not be easy, but using them
                  should be
                </p>
                <h6 className="mb-5">That’s exactly what we do!</h6>
                <div className="appdev-btn mb-5">
                  <a href="#">
                    Contact Us <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-end">
              <div className="appdev-img position-relative">
                <img
                  src="./assets/ServicesPage/appdev.png"
                  alt="Web Development"
                  className="img-fluid mx-auto d-block"
                />

                <div className="appdev-left-icon d-flex position-absolute align-items-center">
                  <img
                    src="./assets/ServicesPage/appicon1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="appdev-left-icon-info ms-4">
                    <h6>200+</h6>
                    <p>Mobile Projects Delivered</p>
                  </div>
                </div>
                
                <div className="appdev-left-icon2 d-flex position-absolute align-items-center">
                  <img
                    src="./assets/ServicesPage/appicon2.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="appdev-left-icon-info ms-4">
                    <h6>20+</h6>
                    <p>Industries Served</p>
                  </div>
                </div>

                <div className="appdev-left-icon3 d-flex position-absolute align-items-center">
                  <img
                    src="./assets/ServicesPage/appicon3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="appdev-left-icon-info ms-4">
                    <h6>140+</h6>
                    <p>Mobile Apps Developed</p>
                  </div>
                </div>

              

              

                <div className="webdev-dots-icon1">
                  <img src="./assets/ServicesPage/dot-icon.png" alt="" />
                </div>
                <div className="appdev-dots-icon2">
                  <img src="./assets/ServicesPage/dot-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppServise/>
      <TrustedBy/>
      <DreamApp/>
      <YourApp/>
    </>
  );
}
