import React from "react";
import "./appservise.css";

export default function AppServise() {
  return (
    <>
      <div className="appservise-section position-relative mt-5">
        <div className="appservice-img">
          <img src="./assets/AppDevelopment/app-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-4 col-md-6 mx-auto text-md-end">
              <div className="appservise-info">
                <h3>Mobile App Development Services We Offer</h3>
              </div>

              <div className="appservise-card mt-5">
                <img src="./assets/AppDevelopment/icon1.png" alt="" />
                <h6 className="mt-4">App Prototyping & Design</h6>
                <p className="mt-3">
                  Creating a prototype and design is crucial for giving users a
                  great experience. Our experienced mobile app developers mix
                  creativity with designs that focus on users, making prototypes
                  that match your ideas.
                </p>
              </div>

              <div className="appservise-card mt-5">
                <img src="./assets/AppDevelopment/icon5.png" alt="" />
                <h6 className="mt-4">App Development</h6>
                <p className="mt-3">
                  Creating a prototype and design is crucial for giving users a
                  great experience. Our experienced mobile app developers mix
                  creativity with designs that focus on users, making prototypes
                  that match your ideas.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-lg-4 d-none d-lg-block">
              <div className="app-img">
                <img src="./assets/AppDevelopment/app-img.png" alt="" />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4 col-md-6 mx-auto text-md-start">
              <div className="appservise-card ">
                <img src="./assets/AppDevelopment/icon6.png" alt="" />
                <h6 className="mt-4">App Deployment</h6>
                <p className="mt-3">
                  Creating a prototype and design is crucial for giving users a
                  great experience. Our experienced mobile app developers mix
                  creativity with designs that focus on users, making prototypes
                  that match your ideas.
                </p>
              </div>

              <div className="appservise-card">
                <img src="./assets/AppDevelopment/icon7.png" alt="" />
                <h6 className="mt-4">App Testing</h6>
                <p className="mt-3">
                  Creating a prototype and design is crucial for giving users a
                  great experience. Our experienced mobile app developers mix
                  creativity with designs that focus on users, making prototypes
                  that match your ideas.
                </p>
              </div>

              <div className="appservise-card  mb-5">
                <img src="./assets/AppDevelopment/icon8.png" alt="" />
                <h6 className="mt-4">App Maintenance</h6>
                <p className="mt-3">
                  Creating a prototype and design is crucial for giving users a
                  great experience. Our experienced mobile app developers mix
                  creativity with designs that focus on users, making prototypes
                  that match your ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
