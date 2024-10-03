import React from "react";
import "./cloudineerservice.css";
import { Link } from "react-router-dom";

export default function CloudIneerService() {
  return (
    <>
      <div className="cloudinnerservice-section mt-5">
        <div className="container">
          <h1 className="text-center mb-5">
            Cloud <span>Services</span>
          </h1>
          <div className="row">
            {/* First Card */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="cloudinner-card">
                <div className="icon-img">
                  <img src="/assets/CloudServices/icon10.png" alt="" />
                </div>
                <h5 className="mt-3">Infrastructure as a Service (IaaS)</h5>
                <h6 className="mt-3">
                Offers virtualized computing resources (servers, storage) over the internet, allowing businesses to manage their own IT infrastructure without physical hardware.
                </h6>

                {/* <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">On-demand resources</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">High-performance computing</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">Pay-per-use model</p>
                </div> */}


              </div>
            </div>

            {/* Second Card */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="cloudinner-card2">
                <div className="icon-img">
                  <img src="/assets/CloudServices/icon10.png" alt="" />
                </div>
                <h5 className="mt-3">Platform as a Service (PaaS)</h5>
                <h6 className="mt-3">
                Provides a platform for developers to build, test, and deploy applications without managing underlying infrastructure, streamlining the development process.
                </h6>

                {/* <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">On-demand resources</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">High-performance computing</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">Pay-per-use model</p>
                </div> */}
              </div>
            </div>

            {/* Third Card */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="cloudinner-card3">
                <div className="icon-img">
                  <img src="/assets/CloudServices/icon10.png" alt="" />
                </div>
                <h5 className="mt-3">Software as a Service (SaaS)</h5>
                <h6 className="mt-3">
                Delivers software applications via the internet on a subscription basis, enabling users to access and use software without installation or maintenance.
                </h6>
                {/* <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">On-demand resources</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">High-performance computing</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">Pay-per-use model</p>
                </div> */}
              </div>
            </div>

            {/* Fourth Card */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="cloudinner-card">
                <div className="icon-img">
                  <img src="/assets/CloudServices/icon10.png" alt="" />
                </div>
                <h5 className="mt-3">Function as a Service (FaaS)</h5>
                <h6 className="mt-3">
                A serverless model where users deploy individual functions, allowing automatic scaling and management of infrastructure by the cloud provider.
                </h6>

                {/* <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">On-demand resources</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">High-performance computing</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">Pay-per-use model</p>
                </div> */}
              </div>
            </div>

            {/* Fifth Card */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="cloudinner-card">
                <div className="icon-img">
                  <img src="/assets/CloudServices/icon10.png" alt="" />
                </div>
                <h5 className="mt-3">Backup as a Service (BaaS)</h5>
                <h6 className="mt-3">
                Offers cloud-based backup solutions for automatic data backup and off-site storage, ensuring easy recovery in case of data loss.
                </h6>
                {/* <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">On-demand resources</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">High-performance computing</p>
                </div>
                <div className="para d-flex align-items-center mb-2">
                  <img src="/assets/CloudServices/arrow.png" alt="" />
                  <p className="ms-2">Pay-per-use model</p>
                </div> */}
              </div>
            </div>

            {/* View More Button */}
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
              <div className="cloudinnerservice-btn">
                <div className="appdev-btn">
                  <Link to="/contactpage">
                    Contact us <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
