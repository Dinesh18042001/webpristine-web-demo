import React from "react";
import "./engagement.css";

export default function Engagement() {
  return (
    <>
      <div className="engagement-section mt-5">
        <div className="container">
          <div className="engagemen-tittle">
            <h1 className="text-center">
              Engagement <span>Models</span>
            </h1>
            <h6 className="text-center">
              We offer flexible engagement models tailored to your unique
              requirements
            </h6>
          </div>

          <div className="row mt-5 justify-content-center">

            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto mb-4">
              <div className="engagement-card">
                <div className="engagement-icon mb-4">
                  <img src="./assets/icons/icon1.png" alt="Icon" />
                </div>
                <h3>Time & material</h3>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon1.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work based on the volume of work.</p>
                </div>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon1.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work based on the volume of work.</p>
                </div>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon1.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work based on the volume of work.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto mb-4">
              <div className="engagement-card2">
                <div className="engagement-icon mb-4">
                  <img src="./assets/icons/icon2.png" alt="Icon" />
                </div>
                <h3>Fixed Price</h3>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon2.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work based on a fixed scope of work.</p>
                </div>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon2.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work based on a fixed scope of work.</p>
                </div>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon2.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work based on a fixed scope of work.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto mb-4">
              <div className="engagement-card3">
                <div className="engagement-icon mb-4">
                  <img src="./assets/icons/icon3.png" alt="Icon" />
                </div>
                <h3>Dedicated Team</h3>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon3.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work as part of your team.</p>
                </div>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon3.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work as part of your team.</p>
                </div>
                <div className="para-info d-flex gap-3">
                  <div className="send-icon">
                    <img src="./assets/icons/send-icon3.png" alt="Send Icon" />
                  </div>
                  <p>Developers will work as part of your team.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
