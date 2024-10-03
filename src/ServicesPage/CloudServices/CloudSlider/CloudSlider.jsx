import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./cloudslider.css";

export default function CloudSlider() {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
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
      <div className="cloudslider-section mt-5">
        <div className="container">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <img src="./assets/CloudServices/icon1.png" alt="" />
            </div>
            <div className="item">
              <img src="./assets/CloudServices/icon2.png" alt="" />
            </div>
            <div className="item">
              <img src="./assets/CloudServices/icon3.png" alt="" />
            </div>
            <div className="item">
              <img src="./assets/CloudServices/icon4.png" alt="" />
            </div>
            <div className="item">
              <img src="./assets/CloudServices/icon5.png" alt="" />
            </div>
            <div className="item">
              <img src="./assets/CloudServices/icon6.png" alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="cloud-about-section mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb-5">
                <img src="./assets/CloudServices/cloud-about.png" alt="" />
              </div>
            </div>

            <div className="col-lg-6">

              <div className="cloud-about-info">
                <h2>
                  About <span>Us</span>
                </h2>
                <p>
                  Webpristine Technology is a trusted leader in providing
                  innovative cloud computing solutions. With a team of certified
                  experts and a focus on customer success, we enable
                </p>
              </div>

              <div className="cloud-card">
                <img
                  src="./assets/CloudServices/img7.png"
                  alt="Cloud Service Icon"
                />
                <div className="cloud-card-info ms-0 ms-md-4">
                  <h6 className="mt-2">Mission</h6>
                  <p>
                    To empower businesses of all sizes to harness the potential
                    of cloud computing, enabling them to achieve more with less.
                  </p>
                </div>
              </div>

              <div className="cloud-card ">
                <img
                  src="./assets/CloudServices/icon8.png"
                  alt="Cloud Service Icon"
                />
                <div className="cloud-card-info ms-0 ms-md-4">
                  <h6 className="mt-2">Vision</h6>
                  <p>
                    To become the preferred cloud partner for enterprises
                    worldwide by delivering scalable, secure, and future-ready
                    cloud solutions.
                  </p>
                </div>
              </div>

              {/* <div className="appdev-btn mt-3">
                <a href="#">
                  View More <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
