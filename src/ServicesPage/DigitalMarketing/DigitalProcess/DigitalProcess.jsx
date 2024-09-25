import React from "react";
import "./digitalprocess.css";

export default function DigitalProcess() {
  return (
    <>
      <div className="digitalprocess-section position-relative mt-5">
        <div className="container">
          <div className="row">

            <div className="col-lg-5">
              <h1 className="mb-4">
                <span>Webpristine</span> Digital Marketing Services Process Flow
              </h1>
              <p className="mb-4">
                Digital marketing requires a lot of promotion, thus hiring an
                expert is necessary to execute it properly. As the top and most
                reputable digital marketing business, we guarantee that, once
                you use our services, your website will appear on the front page
                as soon as possible. For the work to be done correctly, the
                specialists follow a few key stages.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="digitalprocess-card">
                <div className="row justify-content-center">

                  {/* Card 1 */}
                  <div className="col-md-6 col-sm-12 mb-4">
                    <div className="digitalprocess-card1">
                      <div className="digitalprocess-card1-main d-flex justify-content-between">
                        <div className="digitalprocess-card1-tittle d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/DigitalMarketing/process-icon1.png"
                            alt="Consultation Icon"
                            className="me-2"
                          />
                          <h6>Consultation</h6>
                        </div>
                        <div className="digitalprocess-card1-num">
                          <h3>01</h3>
                        </div>
                      </div>
                      <p className="mt-3">
                        Understanding the mission, vision, and objectives of the
                        client
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col-md-6 col-sm-12 mb-4">
                    <div className="digitalprocess-card2">
                      <div className="digitalprocess-card2-main d-flex justify-content-between">
                        <div className="digitalprocess-card2-tittle d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/DigitalMarketing/process-icon2.png"
                            alt="Consultation Icon"
                            className="me-2"
                          />
                          <h6>Planning</h6>
                        </div>
                        <div className="digitalprocess-card2-num">
                          <h3>02</h3>
                        </div>
                      </div>
                      <p className="mt-3">
                      Checking the feasibility of the project and planning the strategy
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col-md-6 col-sm-12 mb-4">
                    <div className="digitalprocess-card2">
                      <div className="digitalprocess-card2-main d-flex justify-content-between">
                        <div className="digitalprocess-card2-tittle d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/DigitalMarketing/process-icon3.png"
                            alt="Consultation Icon"
                            className="me-2"
                          />
                          <h6>Strategy creation</h6>
                        </div>
                        <div className="digitalprocess-card2-num">
                          <h3>03</h3>
                        </div>
                      </div>
                      <p className="mt-3">
                      Creating a strategy and providing a scalable solution
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="col-md-6 col-sm-12 mb-4">
                    <div className="digitalprocess-card1">
                      <div className="digitalprocess-card1-main d-flex justify-content-between">
                        <div className="digitalprocess-card1-tittle d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/DigitalMarketing/process-icon4.png"
                            alt="Consultation Icon"
                            className="me-2"
                          />
                          <h6>Testing</h6>
                        </div>
                        <div className="digitalprocess-card1-num">
                          <h3>04</h3>
                        </div>
                      </div>
                      <p className="mt-3">
                      Checking if all the required parameters and expectations 
                      </p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="col-md-6 col-sm-12 mb-4">
                    <div className="digitalprocess-card2">
                      <div className="digitalprocess-card2-main d-flex justify-content-between">
                        <div className="digitalprocess-card2-tittle d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/DigitalMarketing/process-icon5.png"
                            alt="Consultation Icon"
                            className="me-2"
                          />
                          <h6>Implementation</h6>
                        </div>
                        <div className="digitalprocess-card2-num">
                          <h3>05</h3>
                        </div>
                      </div>
                      <p className="mt-3">
                      Implementation of the customized digital marketing strategy.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
