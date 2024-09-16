import React from "react";
import "./idea.css";

export const Idea = () => {
  return (
    <>
      <div className="idea-section">
        {/* <div className="bg-img">
          <img src="./assets/idea/bg-img.png" alt="Background" />
        </div> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0 d-flex justify-content-center">
              <div className="project-img">
                <img
                  src="./assets/idea/project-img.png"
                  alt="Project"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="tittle mb-4">
                <h3>
                  We Create Great Things Out of <span>Good Ideas.</span>
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="counter1">
                    <h2 className="text-center">20+</h2>
                    <h6 className="text-center">Years of Experience</h6>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-3">
                  <div className="counter1">
                    <h2 className="text-center">400+</h2>
                    <h6 className="text-center">In-House Experts</h6>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="counter1">
                    <h2 className="text-center">1000+</h2>
                    <h6 className="text-center">Projects Delivered</h6>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-3">
                  <div className="counter1">
                    <h2 className="text-center">600+</h2>
                    <h6 className="text-center">Happy Clients</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="idea-section-container">
            <div class="idea-section-btn">
              <a href="#">
                Get In Touch <i class="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
