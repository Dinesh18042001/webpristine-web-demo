import React from "react";
import "./questions.css";
import { Link } from "react-router-dom";

export default function Questions() {
  return (
    <>
      <div className="question-section position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="question-info">
                <h1 className="mb-3">Questions?</h1>
                <h4 className="mb-3">Schedule a call or send an e-mail</h4>
                <p className="mb-4">
                  Schedule a meeting with us to explore your options for hiring
                  a Virtual Assistant, and discover if this is the right fit for
                  your business needs.
                </p>

                <div class="question-info-btn mb-4">
                  <Link to="/contactpage">
                    Email Us <i class="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="question-cilent">
                    <img src="./assets/Questions/img1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="question-cilent">
                    <img src="./assets/Questions/img2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="question-cilent">
                    <img src="./assets/Questions/img3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="question-cilent">
                    <img src="./assets/Questions/img2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="question-cilent">
                    <img src="./assets/Questions/img3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="question-cilent">
                    <img src="./assets/Questions/img1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="question-bg ">
          <img src="./assets/Questions/qus-bg.png" alt="" />
        </div>
      </div>
    </>
  );
}
