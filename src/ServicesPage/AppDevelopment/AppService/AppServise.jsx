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
                <h6 className="mt-4">Planning and Research</h6>
                <p className="mt-3">
                Identify the app's purpose, target audience, and key features. Conduct market research to analyze competitors and gather user feedback, which will inform the app’s functionality and design.
                </p>
              </div>

              <div className="appservise-card mt-5">
                <img src="./assets/AppDevelopment/icon5.png" alt="" />
                <h6 className="mt-4">Design</h6>
                <p className="mt-3">
                Create wireframes and prototypes to visualize the app’s layout and user interface. Focus on user experience (UX) and user interface (UI) design principles to ensure an intuitive and appealing design.
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
                <h6 className="mt-4">Development</h6>
                <p className="mt-3">
                Begin the actual coding of the app, using suitable technologies and frameworks. This phase involves both frontend (user interface) and backend (server-side logic) development, ensuring seamless functionality.

                </p>
              </div>

              <div className="appservise-card">
                <img src="./assets/AppDevelopment/icon7.png" alt="" />
                <h6 className="mt-4">Testing</h6>
                <p className="mt-3">
                Conduct rigorous testing to identify and fix bugs or issues. Use various testing methods, such as functional, usability, and performance testing, to ensure the app is stable, secure, and user-friendly.
                </p>
              </div>

              <div className="appservise-card  mb-5">
                <img src="./assets/AppDevelopment/icon8.png" alt="" />
                <h6 className="mt-4">Launch and Maintenance</h6>
                <p className="mt-3">
                Deploy the app on relevant platforms (e.g., App Store, Google Play) and monitor its performance. After launch, continue to provide maintenance and updates based on user feedback and technological advancements to ensure ongoing success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
