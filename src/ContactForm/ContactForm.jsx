import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="footer-tittle mt-4">
              <h2 className="mb-4">
                Share your idea or requirement with our experts.
              </h2>
              <p>
                <i className="fa-solid fa-phone me-3 mb-3"></i>
                <a href="tel:+13474740408">+1 347-474-0408</a>
              </p>
              <p>
                <i className="fa-solid fa-envelope me-3"></i>
                <a href="mailto:info@webpristine.com">info@webpristine.com</a>
              </p>
              <p>
                <i className="fa-solid fa-location-dot me-3"></i>A-150, Sector
                63, Noida, Uttar Pradesh, 201301
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="main-form p-4 ">
              <h4 className="mb-4">
                Wish to move forward? Please introduce yourself.
              </h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                 
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
               
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                 
                    <select className="form-select" id="serviceSelect" required>
                      <option value="">Choose a service...</option>
                      <option value="web-development">Web Development</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <div className="form-btn">
                  <a href="#">Submit <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
