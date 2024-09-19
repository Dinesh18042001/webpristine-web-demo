import React from "react";
import "./AssistantAbout.css";

export const AssistantAbout = () => {
  return (
    <div className="assistant-about-section position-relative">

      <div className="container">
        <div className="row  align-items-center">
          <div className="col-lg-6">
            <div className="about-info">
              <h1>
                Your <span>Intelligent Virtual Helper</span> for Every
                Requirement
              </h1>
              <p>
                Our clients choose us because we offer a wide range of
                knowledgeable virtual assistants, all at one fixed price,
                through a single vendor.
              </p>
              <p>
                Here, all of our Virtual Assistant team members are our
                employees. This means that they're at their desks, ready when
                you need them. (And it means we're doing the right thing when
                caring for our team.)
              </p>
            </div>

            <div className="assistant-about-btn mb-5">
              <a href="#">
                Let's Discuss <i class="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="assistant-side-img">
              <img
                src="./assets/Assistant-img/about-img.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

        </div>
      </div>
       <div className="assistant-about-bg">
        <img src="./assets/Assistant-img/about-bg.png" alt="" />
       </div>
    </div>
  );
};
