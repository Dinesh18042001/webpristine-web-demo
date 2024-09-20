import React from "react";
import "./contactpage.css";
import ContactRating from "./ContactRating/ContactRating";

export const ContactPage = () => {
  return (
    <>
      <div className="contact-page-section">
        <div className="container">
          <h1>
            Have a Project in <span>Mind?</span>
          </h1>
          <p className="text-center">
            We guarantee to get back to you within 1 business day
          </p>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact-info-card">
                <div className="contact-info-card-icon text-center">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                </div>
                <h6 className="text-center mt-3">Call Us Now</h6>
                <h6 className="text-center mt-3">
                  <a href="tel:+13474740408">+1 347-474-0408</a>
                </h6>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact-info-card card-contact">
                <div className="contact-info-card-icon text-center">
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                </div>
                <h6 className="text-center mt-3">Location</h6>
                <h6 className="text-center mt-3">
                  <a
                    href="https://maps.google.com/?q=A-150, Sector 63, Noida, Uttar Pradesh, 201301"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A-150, Sector 63, Noida, Uttar Pradesh, 201301
                  </a>
                </h6>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-12 mb-4">
              <div className="contact-info-card">
                <div className="contact-info-card-icon text-center">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </div>
                <h6 className="text-center mt-3">Send Message</h6>
                <h6 className="text-center mt-3">
                  <a href="mailto:info@webpristine.com">info@webpristine.com</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactRating />
    </>
  );
};
