import React from "react";
import "./developmentservices.css";
import { Link } from "react-router-dom";
export default function DevelopmentService() {
  return (
    <>
      <div className="development-service-section mt-5">
        <div className="container">
          <div className="developmentservices-tittle ">
            <h1 className="text-center">
              Our <span>Web Development </span>Services
            </h1>
            <p className="text-center mb-4">
              Whether you need a new web app, custom or CMS website, eCommerce
              store, or an ERP solution, we can handle it all. Improve your
              business processes and increase profits through our strategic web
              development services.
            </p>
          </div>

          <div className="developmentservices-card mb-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <img src="./assets/ServicesPage/servise1.png" alt="" />
              </div>
              <div className="col-lg-6">
                <div className="developmentservices-info">
                  <h1>
                    Web <span>Apps</span>
                  </h1>
                  <p>
                    We offer full-cycle web app development services from UI/UX
                    design and development to QA and upgrade & maintenance. We
                    build web apps that are secure, scalable, fast, and work
                    seamlessly across all devices and platforms.
                  </p>
                </div>

                <div className="developmentservices-btn mb-5">
                  <Link to="/contactpage">
                    Contact Us <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <img src="./assets/ServicesPage/servise1.png" alt="" />
              </div>
              <div className="col-lg-6">
                <div className="developmentservices-info">
                  <h1>eCommerce</h1>
                  <p>
                    We offer full-cycle web app development services from UI/UX
                    design and development to QA and upgrade & maintenance. We
                    build web apps that are secure, scalable, fast, and work
                    seamlessly across all devices and platforms.
                  </p>
                </div>
                <div className="developmentservices-btn mb-5">
                  <Link to="/contactpage">
                    Contact Us <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* capabilities-card */}

      <div className="capabilities-card-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="capabilities-card  position-relative">
                <div class="capabilities-img-wrapper">
                  <img
                    src="./assets/ServicesPage/web-tech.jpg"
                    alt="Capabilities Image"
                  />
                </div>
                <div className="capabilities-card-tittlt">
                  <h5 className="text-center">Web Development Capabilities</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="capabilities-card2 h-100">
                <span className="circle-background">
                  <img
                    src="./assets/ServicesPage/web-icon1.png"
                    alt="Web Icon"
                  />
                </span>
                <h5>Custom Web Development</h5>
                <p>
                  Give the features & performance your users expect from native
                  apps on their browsers. Our web development experts help you
                  deliver the experience you want through your web apps,
                  website, or online store without any loss of speed or
                  interruptions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="capabilities-card2 h-100">
                <span className="circle-background">
                  <img
                    src="./assets/ServicesPage/web-icon2.png"
                    alt="Web Icon"
                  />
                </span>
                <h5>Responsive Web Design</h5>
                <p>
                  Our HTML5 experienced web developers deliver and deploy
                  complete solutions to perfectly fit your business environment,
                  and help optimize website performance by focusing on
                  scalability, loading time, and responsiveness.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="capabilities-card2 h-100">
                <span className="circle-background">
                  <img
                    src="./assets/ServicesPage/web-icon3.png"
                    alt="Web Icon"
                  />
                </span>
                <h5>Web Testing</h5>
                <p>
                  We make sure your website is tested to the point of
                  perfection. We deliver high-grade QA services for impeccable
                  performance, usability, and security of your web platform.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="capabilities-card2 h-100">
                <span className="circle-background">
                  <img
                    src="./assets/ServicesPage/web-icon4.png"
                    alt="Web Icon"
                  />
                </span>
                <h5>Performance Enhancement</h5>
                <p>
                  If you have an existing web app, website, or an online store
                  that you would like to improve, update, further develop or
                  upgrade its legacy backend, you got our back. Our web design &
                  development team adjusts to the coding standards of the
                  current application to make it better without breaking it.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="capabilities-card2 h-100">
                <span className="circle-background">
                  <img
                    src="./assets/ServicesPage/web-icon5.png"
                    alt="Web Icon"
                  />
                </span>
                <h5>Support & Maintenance</h5>
                <p>
                  Our team maintains 100% uptime, rock-solid security, and
                  performs regular backups, & software updates to make sure that
                  your website, web app, or online store is well-optimized and
                  above par the optimal parameters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process */}

      <div className="development-process-section">
        <div className="container">
          <h1 className="text-center mt-4">
            Our <span>Web Development</span> Process
          </h1>

          <div className="process-card d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="process-num me-md-3 mb-3">
              <h6>01</h6>
            </div>
            <div className="process-info">
              <h6>Requirements Gathering & Analysis</h6>
              <p>
                Our web design and development team researches &amp; works on
                creating the best structure for your web development project
                based on your requirements.
              </p>
            </div>
          </div>

          <div className="process-card d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="process-num me-md-3 mb-3 ">
              <h6>02</h6>
            </div>
            <div className="process-info">
              <h6>Proposal</h6>
              <p>
                Based on your requirements and our research, we create a
                thorough proposal for your web design and development project
                covering all the details.
              </p>
            </div>
          </div>

          <div className="process-card d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="process-num me-md-3 mb-3 ">
              <h6>03</h6>
            </div>
            <div className="process-info">
              <h6>Wireframes</h6>
              <p>
                Our web design and development team researches &amp; works on
                creating the best structure for your web development project
                based on your requirements.
              </p>
            </div>
          </div>

          <div className="process-card d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="process-num me-md-3 mb-3 ">
              <h6>04</h6>
            </div>
            <div className="process-info">
              <h6>Development & Testing</h6>
              <p>
                Our web design and development team researches &amp; works on
                creating the best structure for your web development project
                based on your requirements.
              </p>
            </div>
          </div>

          <div className="process-card d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="process-num me-md-3 mb-3 ">
              <h6>05</h6>
            </div>
            <div className="process-info">
              <h6>Support & Maintenance</h6>
              <p>
                Our web design and development team researches &amp; works on
                creating the best structure for your web development project
                based on your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
