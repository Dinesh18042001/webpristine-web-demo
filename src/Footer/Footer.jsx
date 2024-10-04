// import React from "react";
// import "./footer.css";

// export const Footer = () => {
//   return (
//     <>
//       <div className="footer-section position-relative">

//         <div className="footer-bg-img ">
//           <img src="./assets/footer/footer-bg.png" alt="" />
//         </div>

//         <div className="form-section">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 mb-4">
//                 <div className="footer-tittle mt-4">
//                   <h2 className="mb-4">
//                     Share your <span>idea</span> or <span>requirement</span> with our experts.
//                   </h2>
//                   <p>
//                     <i className="fa-solid fa-phone me-3 mb-3"></i>
//                     <a href="tel:+13474740408">+1 347-474-0408</a>
//                   </p>
//                   <p>
//                     <i className="fa-solid fa-envelope me-3"></i>
//                     <a href="mailto:info@webpristine.com">
//                       info@webpristine.com
//                     </a>
//                   </p>
//                   <p>
//                     <i className="fa-solid fa-location-dot me-3"></i>A-150,
//                     Sector 63, Noida, Uttar Pradesh, 201301
//                   </p>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="main-form p-4 ">
//                   <h4 className="mb-4">
//                   Wish to move forward? Please introduce <span>yourself </span>and <span>shake hands</span>
//                   </h4>
//                   <form>
//                     <div className="row">
//                       <div className="col-md-6 mb-3">
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="firstName"
//                           placeholder="First Name"
//                           required
//                         />
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="lastName"
//                           placeholder="Last Name"
//                           required
//                         />
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <input
//                           type="tel"
//                           className="form-control"
//                           id="phoneNumber"
//                           placeholder="Phone Number"
//                           required
//                         />
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <select
//                           className="form-select"
//                           id="serviceSelect"
//                           required
//                         >
//                           <option value="">Choose a service...</option>
//                           <option value="web-development">
//                             Web Development
//                           </option>
//                           <option value="seo">SEO Optimization</option>
//                           <option value="digital-marketing">
//                             Digital Marketing
//                           </option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <textarea
//                         className="form-control"
//                         id="message"
//                         rows="5"
//                         placeholder="Your message..."
//                         required
//                       ></textarea>
//                     </div>
//                     <div className="form-btn">
//                       <a href="#">
//                         Submit <i class="fa-solid fa-arrow-right ms-2"></i>
//                       </a>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="footer-link-section">
//           <div className="container">

//             <div className="row">
//               <div className="col-lg-3">
//                 <div className="footer-logo">
//                   <img src="/assets/images/logo1.png" alt="" />
//                   <p className="mt-5">
//                     Now, you can easily give a pace to your business utilizing
//                     exceptional promotional strategies.
//                   </p>

//                   <div className="socal-link mt-5 mb-5 g-5">
//                     <span>
//                       <i class="fa-brands fa-facebook-f"></i>
//                     </span>
//                     <span>
//                       <i class="fa-brands fa-youtube "></i>
//                     </span>
//                     <span>
//                       <i class="fa-brands fa-instagram "></i>
//                     </span>
//                     <span>
//                       <i class="fa-brands fa-linkedin-in "></i>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="footer-link">
//                   <h4 className="mb-5">Company</h4>
//                   <p>
//                     <i class="fa-solid fa-chevron-right"></i>
//                     <i class="fa-solid fa-chevron-right me-2"></i>
//                     <a href="">About Us</a>
//                   </p>
//                   <p>
//                     <i class="fa-solid fa-chevron-right"></i>
//                     <i class="fa-solid fa-chevron-right me-2"></i>
//                     <a href="">Careers</a>
//                   </p>
//                   <p>
//                     <i class="fa-solid fa-chevron-right"></i>
//                     <i class="fa-solid fa-chevron-right me-2"></i>
//                     <a href="">FAQ</a>
//                   </p>
//                   <p>
//                     <i class="fa-solid fa-chevron-right"></i>
//                     <i class="fa-solid fa-chevron-right me-2"></i>
//                     <a href="">Blogs</a>
//                   </p>
//                   <p>
//                     <i class="fa-solid fa-chevron-right"></i>
//                     <i class="fa-solid fa-chevron-right me-2"></i>
//                     <a href="">Services</a>
//                   </p>
//                   <p className="mb-5">
//                     <i class="fa-solid fa-chevron-right"></i>
//                     <i class="fa-solid fa-chevron-right me-2"></i>
//                     <a href="">Testimonials</a>
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-3">

//                 <div className="footer-link">
//                   <h4 className="mb-5">Services</h4>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Mobile Apps</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Web Development</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">UI/UX Design</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Digital Marketing</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Frontend Backend</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">E-commerce cms</a>
//                   </p>
//                   <p className="mb-5">
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Custom Database</a>
//                   </p>
//                 </div>
//               </div>

//               <div className="col-lg-3">
//                 <div className="footer-link">
//                   <h4 className="mb-5">Domain Expertise</h4>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Taxi Booking Apps</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Food & Restaurant Apps</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">E-Commerce Apps</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">On Demand Apps</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Dating Apps</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Education Apps</a>
//                   </p>
//                   <p>
//                   <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right me-2"></i><a href="">Beauty & Salon Apps</a>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="company-link text-center mt-5">
//             <a href="">2024 © Webpristine Technologies Pvt. Ltd.</a>
//         </div>

//           </div>
//         </div>

//         <div className="footer-icon1">
//             <img src="./assets/footer/icon1.png" alt="" />
//         </div>
//         <div className="footer-icon2">
//             <img src="./assets/footer/icon2.png" alt="" />
//         </div>

//       </div>
//     </>
//   );
// };

import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "jquery-validation";
import "./footer.css";
import emailjs from "@emailjs/browser";

const Snackbar = ({ message, show, onClose }) => {
  return (
    <div className={`snackbar ${show ? "show" : ""}`}>
      {message}
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
    </div>
  );
};

export const Footer = () => {
  const form = useRef();
  const [snackbar, setSnackbar] = useState({ show: false, message: "" });

  useEffect(() => {
    $(form.current).validate({
      rules: {
        firstName: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phoneNumber: {
          required: true,
          digits: true,
          minlength: 10,
        },
        service: {
          required: true,
        },
        message: {
          required: true,
        },
      },
      messages: {
        firstName: {
          required: "Please enter your first name.",
          minlength: "Your name must be at least 2 characters long.",
        },
        email: {
          required: "Please enter your email.",
          email: "Please enter a valid email address.",
        },
        phoneNumber: {
          required: "Please enter your phone number.",
          digits: "Please enter a valid phone number.",
          minlength: "Your phone number must be at least 10 digits long.",
        },
        service: {
          required: "Please select a service.",
        },
        message: {
          required: "Please enter your message.",
        },
      },
      submitHandler: function () {
        sendEmail();
      },
    });

    $(".submit-link").on("click", function (e) {
      e.preventDefault();
      if ($(form.current).valid()) {
        sendEmail();
      }
    });
  }, []);

  const sendEmail = () => {
    emailjs
      .sendForm("service_gnb036n", "template_eymc728", form.current, {
        publicKey: "KNsLv0bXGuvjHgNvn",
      })
      .then(
        () => {
          setSnackbar({ show: true, message: "Form submitted successfully!" });
          form.current.reset();
        },
        (error) => {
          setSnackbar({
            show: true,
            message: `Failed to submit form: ${error.text}`,
          });
        }
      );
    setTimeout(() => {
      setSnackbar({ show: false, message: "" });
    }, 3000);
  };

  return (
    <>
      <div className="footer-section position-relative">
        <div className="footer-bg-img ">
          <img src="./assets/footer/footer-bg.png" alt="" />
        </div>

        <div className="form-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <div className="footer-tittle mt-4">
                  <h2 className="mb-4">
                    Share your <span>idea</span> or <span>requirement</span>{" "}
                    with our experts.
                  </h2>
                  <p>
                    <i className="fa-solid fa-phone me-3 mb-3"></i>
                    <a href="tel:+13474740408">+1 347-474-0408</a>
                  </p>
                  <p>
                    <i className="fa-solid fa-envelope me-3"></i>
                    <a href="mailto:info@webpristine.com">
                      info@webpristine.com
                    </a>
                  </p>
                  <p>
                    <i className="fa-solid fa-location-dot me-3"></i>A-150,
                    Sector 63, Noida, Uttar Pradesh, 201301
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="main-form p-4">
                  <h4 className="mb-4">
                    Wish to move forward? Please introduce <span>yourself</span>{" "}
                    and <span>shake hands</span>
                  </h4>
                  <form ref={form} id="contactForm">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <select
                          className="form-select"
                          id="serviceSelect"
                          name="service"
                          required
                        >
                          <option value="">Choose a service...</option>
                          <option value="web-development">
                            Web Development
                          </option>
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
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <div className="form-btn">
                      <a href="#" className="submit-link">
                        Submit <i className="fa-solid fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-link-section">
          <div className="container">
            <div className="footer-img text-center">
              <img src="/assets/images/logo1.png" alt="" />
            </div>

            <div className="footer-logo text-center">
              <div className="socal-link mt-3 mb-3 g-5">
                <span>
                  <a
                    href="https://www.facebook.com/WebpristineTechnologies/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </span>

                <span>
                  <a href="https://www.instagram.com/webpristinetechnologies/"
                  target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </span>
                <span>
                <a href="https://www.linkedin.com/company/webpristinetechnologies/posts/?feedView=all"
                  target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </span>
              </div>
            </div>

            <div className="company-link text-center">
              <Link to="https://webpristine.com">
                2024 © Webpristine Technologies Pvt. Ltd.
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-icon1">
          <img src="./assets/footer/icon1.png" alt="" />
        </div>
        <div className="footer-icon2">
          <img src="./assets/footer/icon2.png" alt="" />
        </div>

        <Snackbar
          message={snackbar.message}
          show={snackbar.show}
          onClose={() => setSnackbar({ show: false, message: "" })}
        />
      </div>
    </>
  );
};
