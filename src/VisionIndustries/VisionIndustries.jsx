import React from "react";
import "./VisionIndustries.css";

export default function VisionIndustries() {
  return (
    <>
      <div className="visionIndustries-section position-relative ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="visionIndustries-tittlt ">
                <h3>
                  An Adaptable vision to the distinct needs of multiple
                  industries.
                </h3>
              </div>
            </div>

            <div className="col-lg-8 mt-5">

              <div className="row justify-content-end ">
                <div className="col-lg-11">
                  <div className="row visionIndustries-main-box mb-4 ">
                    <div className="col-lg-6 visionIndustries-col-1">
                      <div className="visionIndustries-info-box">
                        <img src="./assets/visionIndustries/icon1.png" alt="" />
                        <h6 className="mt-3">Health & Fitness</h6>
                        <p>
                          Innovative app solutions to enhance health and fitness
                          experiences.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 px-lg-5">
                      <div className="visionIndustries-info-box">
                        <img src="./assets/visionIndustries/icon2.png" alt="" />
                        <h6 className="mt-3">Pet Training</h6>
                        <p>
                        Advanced dating app development for meaningful connections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-start">
                <div className="col-lg-11">
                  <div className="row visionIndustries-main-box visionIndustries-side-box mb-4 ">
                    <div className="col-lg-6 visionIndustries-col-1">
                      <div className="visionIndustries-info-box">
                        <img src="./assets/visionIndustries/icon3.png" alt="" />
                        <h6 className="mt-3">eLearning & edTech</h6>
                        <p>
                        nnovative educational technology solutions to improve student learning.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 px-lg-5">
                      <div className="visionIndustries-info-box">
                        <img src="./assets/visionIndustries/icon4.png" alt="" />
                        <h6 className="mt-3">SaaS</h6>
                        <p>
                        Comprehensive SaaS applications to streamline business operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="row visionIndustries-main-box mb-4 ">
                    <div className="col-lg-6 visionIndustries-col-1">
                      <div className="visionIndustries-info-box ">
                        <img src="./assets/visionIndustries/icon5.png" alt="" />
                        <h6 className="mt-3">Social Networking</h6>
                        <p>
                        Engaging social networking platforms to connect users worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 px-lg-5">
                      <div className="visionIndustries-info-box">
                        <img src="./assets/visionIndustries/icon6.png" alt="" />
                        <h6 className="mt-3">Agritech</h6>
                        <p>
                        Smart agricultural technology solutions to boost productivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              
            </div>
          </div>
        </div>

        <div className="visionIndustries-bg">
          <img src="./assets/visionIndustries/bg-img.png" alt="" />
        </div>
      </div>
    </>
  );
}
