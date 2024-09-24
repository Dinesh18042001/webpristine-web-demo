import React from "react";
import "./dreamapp.css";

export default function DreamApp() {
  return (
    <>
      <div className="dreamapp-section position-relative mt-5">

        <h1 className="text-center">Build Your Dream App</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="dreamapp-icon">
                <img src="./assets/AppDevelopment/app-icon.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="dreamapp-icon2">
                <img src="./assets/AppDevelopment/app-icon.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="dreamapp-icon3">
                <img src="./assets/AppDevelopment/app-icon.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="dreamapp-icon4">
                <img src="./assets/AppDevelopment/app-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="left-one-icon">
            <img src="./assets/AppDevelopment/left-one.png" alt="" />
        </div>

        <div className="right-one-icon">
            <img src="./assets/AppDevelopment/right-one.png" alt="" />
        </div>
      </div>
    </>
  );
}
