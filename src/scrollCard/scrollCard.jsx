import React from "react";
import "./scrollCard.css";

export default function ScrollCard() {
  return (
    <>
      <article className="homepage container">
        <section className="caseStudies sectionPadding" id="caseStudies">
          <div className="main_wrapper">

            {/* Section heading */}
            <div className="sectionDetail positionSticky" id="sectionDetail">
              <h2 className="sectionHeading text-center">
                Case <span>Studies</span>
              </h2>
              <p className="sectionIntro text-center">
                We do Amazing Things with Amazing People
              </p>
            </div>

            {/* Case Studies List */}
            <div className="caseStudyList white_text sectionContentPadding">

              {/* SilkWater Case Study */}
              <div className="caseStudy silkwater positionSticky"
                style={{
                  backgroundImage: "url('./assets/images/banner2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="heading4 mb-4">
                        Website <span>Development</span>
                      </h4>
                      <ul className="techUsed mt-3">
                        <li>Android App</li>
                        <li>iOS App</li>
                        <li>Web App</li>
                      </ul>
                      <p className="mb-4">
                        SilkWater is a farming solution that takes care of the
                        prime needs of a farmer. It enables the farmers to manage
                        their budget, calculations, profit and loss in a more
                        efficient way.
                      </p>
                      <a href="#">
                        View More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                      
                    </div>
                    <div className="col-md-6 pt-4">
                      <figure>
                        <img
                          src="./assets/scrollCard/group1.png"
                          alt="Silk Water"
                          className="img-fluid"
                          width="739"
                          height="474"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aeternal Lovers Case Study */}
              <div className="caseStudy lovers positionSticky">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="heading4 mb-4">
                        App <span>Development</span>
                      </h4>
                      <ul className="techUsed">
                        <li>UI/UX Design</li>
                        <li>React Native</li>
                        <li>Node.js</li>
                      </ul>
                      <p>
                        Aeternal Lovers is a platform dedicated to the culture of
                        indie music and art. It creates a digital community for
                        people to exchange, connect and bond over their shared
                        love for indie culture.
                      </p>
                      <a href="#">
                        View More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="col-md-6 pt-4">
                      <figure>
                        <img
                          src="./assets/scrollCard/img2.webp"
                          alt="Lovers"
                          className="img-fluid"
                          width="739"
                          height="474"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              {/* Muscle Feast Case Study */}
              <div className="caseStudy muscleFeast positionSticky">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="heading4 mb-4">
                      Virtual <span>Assistant</span>
                      </h4>
                      <ul className="techUsed">
                        <li>Shopify</li>
                      </ul>
                      <p>
                      webpristine successfully revamped Muscle Feast's online
                        presence, significantly boosting sales for this prominent
                        health and fitness brand.
                      </p>
                      <a href="#">
                        View More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="col-md-6 pt-4">
                      <figure>
                        <img
                          src="./assets/scrollCard/img3.webp"
                          alt="Muscle Feast"
                          className="img-fluid"
                          width="739"
                          height="474"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spektra Case Study */}
              <div className="caseStudy spektra positionSticky">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="heading4 mb-4">
                      Digital <span>Marketing</span>
                      </h4>
                      <ul className="techUsed">
                        <li>UI/UX Design</li>
                        <li>Unity</li>
                      </ul>
                      <p>
                        Spektra partnered with us to build a Gaming App with a
                        live betting table layout, enhancing user experience for thousands of users.
                      </p>
                      <a href="#">
                        View More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="col-md-6 pt-4">
                      <figure>
                        <img
                          src="./assets/scrollCard/img4.webp"
                          alt="Spektra"
                          className="img-fluid"
                          width="739"
                          height="474"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proximity Learning Case Study */}
              <div className="caseStudy proximity lastCaseStudy positionSticky">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="heading4 mb-4">
                      Cloud <span>Services</span>
                      </h4>
                      <ul className="techUsed">
                        <li>Cake PHP</li>
                      </ul>
                      <p>
                        Proximity Learning connected with webpristine to develop a
                        web app to provide equal access to quality education to students from certified teachers.
                      </p>
                      <a href="#">
                        View More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="col-md-6 pt-4">
                      <figure>
                        <img
                          src="./assets/scrollCard/img5.webp"
                          alt="Proximity Learning"
                          className="img-fluid"
                          width="739"
                          height="474"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
