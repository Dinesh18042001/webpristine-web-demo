import React from "react";
import "./WebDevelopment.css";
import OurWork from "./OurWork/OurWork";
import DevelopmentService from "./DevelopmentService/DevelopmentService";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  return (
    <>
      <div className="webdev-section mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="webdev-info">
                <h1 className="mb-4">
                  <span>Web</span> Development Services
                </h1>
                <p className="mb-4">
                  We deliver customer-centric web solutions that deliver
                  tangible business results, but don’t take our word for it. Try
                  us out for your next project!
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
                  src="./assets/ServicesPage/webdev.png"
                  alt="Web Development"
                  className="img-fluid mx-auto d-block"
                />

                <div className="webdev-left-icon d-flex position-absolute align-items-center">
                  <img
                    src="./assets/ServicesPage/icon1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="webdev-left-icon-info ms-4">
                    <h6>400+</h6>
                    <p>Web Projects delivered</p>
                  </div>
                </div>

                <div className="webdev-right-icon d-flex position-absolute align-items-center">
                  <img
                    src="./assets/ServicesPage/icon2.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="webdev-left-icon-info ms-4">
                    <h6>200+</h6>
                    <p>Web Developed</p>
                  </div>
                </div>

                <div className="web-img d-none d-md-block">
                  <img
                    src="./assets/ServicesPage/web.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div className="webdev-dots-icon1">
                  <img src="./assets/ServicesPage/dot-icon.png" alt="" />
                </div>
                <div className="webdev-dots-icon2">
                  <img src="./assets/ServicesPage/dot-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="webdev-info-section mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dev-main-info">
                <h1 className="mt-3">
                  <span>Web</span> Development
                </h1>
                <p>
                  Visually appealing, but slow? Super fast, but dysfunctional?
                  Functional, but not scalable? Scalable, but huge maintenance
                  costs?
                </p>
                <p>
                  As a leading Web Development Company, webpristine makes sure
                  you get the best of all worlds. We have over 10 years of
                  experience in delivering top-notch web development services to
                  our clients. Our web design & development team is obsessed
                  with building transformative web apps, websites, and online
                  stores that your users are going to love. With our experts in
                  your corner, achieving the perfect mix of visually appealing,
                  functional, fast, & scalable for your website or web app is a
                  cakewalk!
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-4 mt-lg-0">
              <div className="info-img mt-4">
                <img
                  src="./assets/ServicesPage/info.png"
                  alt="Web Development"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurWork/>
      <DevelopmentService/>
    </>
  );
}
