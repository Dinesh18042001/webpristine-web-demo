import React from "react";
import "./futurecloud.css";

export default function FutureCloud() {
  return (
    <div className="futurecloud-section mt-5 mb-5">

      <div className="container ">

        <div className="futurecloud-img position-relative">
          <img src="/assets/CloudServices/FutureCloud.png" alt="" />

          <div className="futurecloud-main-info">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="futurecloud-info">
                  <h3>
                    <span>Future</span> cloud computing starts right here
                  </h3>
                  <p>
                    Powerful and production-ready, our cloud platform has the
                    solutions you need to succeed.
                  </p>
                </div>

                <div className="futurecloud-btn">
                  <div className="appdev-btn">
                    <a href="#">
                      Get started{" "}
                      <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="future-img">
                  <img src="/assets/CloudServices/future.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
