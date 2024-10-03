import React from "react";
import "./contactrating.css";

export default function ContactRating() {
  return (
    <>
      <div className="contact-rating-section mt-5">
        <div className="container">
          <div className="contact-rating-tittle">
            <h6 className="text-center mb-5">
              They have consulted for 250+ concepts, resulting them into live
              Mobile Applications operational in 95+ countries, simplifying
              processes.
            </h6>

            <div className="row mt-4 justify-content-center align-items-center">
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                <div className="contact-rating-img text-center">
                  <img src="./assets/contactrarating/img1.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                <div className="contact-rating-img text-center">
                  <img src="./assets/contactrarating/img2.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                <div className="contact-rating-img text-center">
                  <img src="./assets/contactrarating/img3.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                <div className="contact-rating-img text-center">
                  <img src="./assets/contactrarating/img4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* location card */}

      <div className="location-section mt-5">
        <div className="container">
          <h1 className="text-center mb-4">Our Locations</h1>
          <p className="text-center mb-4">
            With more than 14 years of experience and a focus on innovation,
            webpristine is a top choice for mobile app development services.
          </p>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="location-card p-4">
                <div className="flag-icon d-flex align-items-center justify-content-start">
                  <img src="./assets/contactrarating/usa.webp" alt="USA Flag" />
                  <h6 className="ms-3">USA</h6>
                </div>
                <div className="contact-location mt-4 d-flex align-items-center">
                  <span className="d-flex align-items-center justify-content-center me-4">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <a href="tel:+18884650190">+1 (888) 465-0190</a>
                </div>
                <div className="contact-location mt-4 d-flex align-items-center">
                  <span className="d-flex align-items-center justify-content-center me-4">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <a href="#">
                    2810 North  Street, Wilmington, USA
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="location-card p-4">
                <div className="flag-icon d-flex align-items-center justify-content-start">
                  <img src="./assets/contactrarating/uk.png" alt="UK Flag" />
                  <h6 className="ms-3">UK</h6>
                </div>
                <div className="contact-location mt-4 d-flex align-items-center">
                  <span className="d-flex align-items-center justify-content-center me-4">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <a href="tel:+441234567890">+44 1234 567 890</a>
                </div>
                <div className="contact-location mt-4 d-flex align-items-center">
                  <span className="d-flex align-items-center justify-content-center me-4">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <a href="#">10 Downing Street, London, UK</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
              <div className="location-card p-4">
                <div className="flag-icon d-flex align-items-center justify-content-start">
                  <img
                    src="./assets/contactrarating/ind.png"
                    alt="India Flag"
                  />
                  <h6 className="ms-3">India</h6>
                </div>
                <div className="contact-location mt-4 d-flex align-items-center">
                  <span className="d-flex align-items-center justify-content-center me-4">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <a href="tel:+911234567890">+91 12345 67890</a>
                </div>
                <div className="contact-location mt-4 d-flex align-items-center">
                  <span className="d-flex align-items-center justify-content-center me-4">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <a href="#">123 MG Road, Bangalore, India</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
