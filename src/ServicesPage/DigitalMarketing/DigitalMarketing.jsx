import React from "react";
import "./digitalmarketing.css";
import FeaturedIn from "./FeaturedIn/FeaturedIn";
import DigitalServices from "./DigitalServices/DigitalServices";
import DigitalProcess from "./DigitalProcess/DigitalProcess";
import StandStrong from "./StandStrong/StandStrong";
import { Link } from "react-router-dom";

export default function DigitalMarketing() {
  return (
    <>
      <div className="digitaldev-section mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="webdev-info">
                <h1 className="mb-4">
                  <span> Digital Marketing</span> Agency and Design
                </h1>
                <p className="mb-4">
                  Webpristine Technology provides cutting-edge digital marketing
                  services and effective business growth and promotion
                  solutions.
                </p>
                <p>
                  Leading the way in the sector, we provide tailored solutions
                  with higher ROI and conversion rates.
                </p>
                <div className="webdev-btn mb-5">
                  <Link to="/contactpage">
                    Contact Us <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <div className="webdev-img position-relative">
                <img
                  src="./assets/DigitalMarketing/digital.png"
                  alt="Web Development"
                  className="img-fluid mx-auto d-block"
                />

                <div className="digital-left-icon d-flex position-absolute align-items-center">
                  <img
                    src="./assets/DigitalMarketing/icon1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="webdev-left-icon-info ms-4">
                    <h6>200+</h6>
                    <p>Project Done</p>
                  </div>
                </div>


                <div className="digital-icon1">
                    <a href="#"><img src="./assets/DigitalMarketing/instagram.png" alt="" /></a>
                </div>
                <div className="digital-icon2">
                   <a href="#"> <img src="./assets/DigitalMarketing/telegram.png" alt="" /></a>
                </div>
                <div className="digital-icon3">
                   <a href="#"> <img src="./assets/DigitalMarketing/twitter.png" alt="" /></a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedIn/>
      <DigitalServices/>
      <DigitalProcess/>
      <StandStrong/>
    </>
  );
}
