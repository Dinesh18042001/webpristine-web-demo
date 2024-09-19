import React from "react";
import "./Sessions.css";

export default function Sessions() {
  return (
    <div className="session-section-start position-relative mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="session-info">
              <h1>
                Strategic <span>Sessions</span>
              </h1>
              <h5>Unsure what next steps to take in your business? </h5>
              <p>Do you have too much on your plate and feel disorganized? </p>
              <p>
                Do you want to delegate to a Virtual Assistant, but you're not
                sure where to start?
              </p>
              <p>Do you lack SOPs?</p>
              <h6 className="mt-3 mb-3">
                Our strategic, executive team is available for consultative
                sessions on guidance such as:
              </h6>

              <p className="mb-3">
                <i class="fa-solid fa-thumbs-up me-2"></i>Developing a digital
                marketing plan
              </p>
              <p className="mb-3">
                {" "}
                <i class="fa-solid fa-thumbs-up me-2"></i>Researching, selecting
                and implementing a new platform (such as a CRM)
              </p>
              <p className="mb-3">
                <i class="fa-solid fa-thumbs-up me-2"></i>Creating an operations
                plan
              </p>
              <p className="mb-3">
                <i class="fa-solid fa-thumbs-up me-2"></i>Building a launch plan
                for a book, podcast or new product line and much more! 
              </p>

              <div className="session-btn d-flex gap-4">
                <div className="session-btn-main">
                  <a href="">
                    Schedule <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
                <div className="session-btn-main">
                  <a href="">
                    Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="session-img">
                <img src="./assets/Session/session-person.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="session-bg-img">
        <img src="./assets/Session/session-bg.png" alt="" />
      </div>
    </div>
  );
}
