import React from "react";
import "./howitworks.css";

export default function HowItWorks() {
  return (
    <div className="work-section mt-5">
      <div className="container">
        <h1 className="text-center mb-5">
          {" "}
          How It <span>Works</span>
        </h1>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="work-card">
              <div className="work-card-tittle d-flex align-items-center">
                <img src="/assets/CloudServices/icon10.png" alt="" />
                <h6 className="ms-3">Consultation</h6>
              </div>
              <p className="mt-3">
                Discuss your current business needs and cloud goals with our
                experts.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="work-card">
              <div className="work-card-tittle d-flex align-items-center">
                <img src="/assets/CloudServices/icon10.png" alt="" />
                <h6 className="ms-3">Strategy</h6>
              </div>
              <p className="mt-3">
                We develop a comprehensive cloud strategy tailored to your
                specific needs.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="work-card">
              <div className="work-card-tittle d-flex align-items-center">
                <img src="/assets/CloudServices/icon10.png" alt="" />
                <h6 className="ms-3">Migration</h6>
              </div>
              <p className="mt-3">
                Seamlessly migrate your data, applications, and infrastructure
                to the cloud with zero downtime.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="work-card">
              <div className="work-card-tittle d-flex align-items-center">
                <img src="/assets/CloudServices/icon10.png" alt="" />
                <h6 className="ms-3">Optimization</h6>
              </div>
              <p className="mt-3">
                Once in the cloud, we continuously monitor and optimize your
                cloud environment for peak performance.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="work-card">
              <div className="work-card-tittle d-flex align-items-center">
                <img src="/assets/CloudServices/icon10.png" alt="" />
                <h6 className="ms-3">Support</h6>
              </div>
              <p className="mt-3">
                Receive 24/7 support and maintenance to ensure your cloud
                services run smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
