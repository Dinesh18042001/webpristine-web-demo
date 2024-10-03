import React from "react";
import "./whycloud.css";

export default function WhyCloud() {
  return (
    <>
      <div className="whycloud-section position-relative">

        <div className="container">
          <h1 className="text-center mb-5">
            Why Cloud <span>Computing?</span>
          </h1>

          <div className="row">
            <div className="col-lg-4">

              <div className="computing-card text-end mb-4">
                <img src="/assets/CloudServices/icon9.png" alt="" />
                <h6 className="mt-3">Cost Efficiency</h6>
                <p className="mt-3">
                Reduces the need for physical hardware and maintenance, lowering overall IT costs.
                </p>
              </div>

              <div className="computing-card text-end mb-4">
                <img src="/assets/CloudServices/icon9.png" alt="" />
                <h6 className="mt-3">Scalability</h6>
                <p className="mt-3">
                Easily scale resources up or down to meet changing business demands without significant investment.
                </p>
              </div>

              <div className="computing-card text-end mb-4">
                <img src="/assets/CloudServices/icon9.png" alt="" />
                <h6 className="mt-3">Flexibility</h6>
                <p className="mt-3">
                Access data and applications from anywhere with an internet connection, promoting remote work and collaboration.
                </p>
              </div>

            </div>

            <div className="col-lg-4">
              <div className="cloud-img">
                <img src="./assets/CloudServices/cloud.png" alt="" />
              </div>
            </div>

            <div className="col-lg-4">

            <div className="computing-card1  mb-4">
                <img src="/assets/CloudServices/icon9.png" alt="" />
                <h6 className="mt-3">Enhanced Security</h6>
                <p className="mt-3">
                Leading providers implement robust security measures to protect data, reducing the risk of breaches.
                </p>
              </div>

              <div className="computing-card1  mb-4">
                <img src="/assets/CloudServices/icon9.png" alt="" />
                <h6 className="mt-3">Disaster Recovery</h6>
                <p className="mt-3">
                Cloud solutions offer reliable backup and recovery options, ensuring business continuity in case of data loss.
                </p>
              </div>

              <div className="computing-card1  mb-4">
                <img src="/assets/CloudServices/icon9.png" alt="" />
                <h6 className="mt-3">Automatic Updates</h6>
                <p className="mt-3">
                Providers manage software updates and maintenance, allowing businesses to focus on core operations rather than IT management.
                </p>
              </div>

            </div>
          </div>

        </div>

        <div className="wave-one">
            <img src="/assets/CloudServices/wave.png" alt="" />
        </div>
        <div className="wave-two">
            <img src="/assets/CloudServices/wave-two.png" alt="" />
        </div>

      </div>
    </>
  );
}
