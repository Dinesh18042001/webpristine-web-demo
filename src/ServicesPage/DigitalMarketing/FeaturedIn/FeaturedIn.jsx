import React from "react";
import "./featured.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

export default function FeaturedIn() {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  };

  return (
    <>
      <div className="featured-in-section mt-5 mb-5">
        <div className="container">
          <h1 className="text-center">
            Featured <span>In</span>
          </h1>

          <OwlCarousel className="owl-theme mt-5" {...options}>
            <div className="item d-flex justify-content-center align-items-center">
              <img
                src="./assets/DigitalMarketing/icon2.png"
                alt="icon2"
                className="img-fluid"
              />
            </div>
            <div className="item d-flex justify-content-center align-items-center">
              <img
                src="./assets/DigitalMarketing/icon3.png"
                alt="icon3"
                className="img-fluid"
              />
            </div>
            <div className="item d-flex justify-content-center align-items-center">
              <img
                src="./assets/DigitalMarketing/icon4.png"
                alt="icon4"
                className="img-fluid"
              />
            </div>
            <div className="item d-flex justify-content-center align-items-center">
              <img
                src="./assets/DigitalMarketing/icon5.png"
                alt="icon5"
                className="img-fluid"
              />
            </div>
            <div className="item d-flex justify-content-center align-items-center">
              <img
                src="./assets/DigitalMarketing/icon6.png"
                alt="icon6"
                className="img-fluid"
              />
            </div>
            <div className="item d-flex justify-content-center align-items-center">
              <img
                src="./assets/DigitalMarketing/icon7.png"
                alt="icon7"
                className="img-fluid"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="marketing-solutions-section position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="marketing-demo-img">
                <img
                  src="./assets/DigitalMarketing/demo.png"
                  alt="demo"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="marketing-solutions-info">
                <h6 className="mb-4 mt-4">
                  Take your business to new heights with our creative digital
                  marketing solutions
                </h6>

                <div className="row align-items-center">
                  <div className="col-lg-6 d-flex justify-content-start justify-content-lg-center">
                    <div className="appdev-btn mb-4">
                      <Link to="/contactpage">
                        Contact Us{" "}
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <p>
                      <img
                        src="./assets/DigitalMarketing/send.png"
                        alt=""
                        className="me-2"
                      />
                      Aids in building brand awareness
                    </p>

                    <p>
                      <img
                        src="./assets/DigitalMarketing/send.png"
                        alt=""
                        className="me-2"
                      />
                      Possessing a ten years of business experience and being a
                      proficient digital marketing specialist
                    </p>
                    <p>
                      <img
                        src="./assets/DigitalMarketing/send.png"
                        alt=""
                        className="me-2"
                      />
                      Entrusted with delivering full assistance through project
                      completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marketing-arrow-icon">
          <img src="./assets/DigitalMarketing/arrow.png" alt="" />
        </div>

        <div className="marketing-dot-icon1">
          <img src="./assets/ServicesPage/dot-icon.png" alt="" />
        </div>
        <div className="marketing-dot-icon2">
          <img src="./assets/ServicesPage/dot-icon.png" alt="" />
        </div>
      </div>
    </>
  );
}
