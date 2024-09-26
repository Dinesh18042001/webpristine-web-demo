import React from "react";
import "./AssistantTeam.css";

export default function AssistantTeam() {
  return (
    <>
      <div className="assistant-team-section mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="assistant-team-link mb-4">
                <div className="assistant-team-main-link1 d-inline-flex align-items-center mx-auto mx-lg-0">
                  <a href="#">
                    <i className="fa-solid fa-arrow-down me-4"></i> ALL
                    INCLUSIVE
                  </a>
                </div>
              </div>

              <div className="assistant-team-link mb-4">
                <div className="assistant-team-main-link2 d-inline-flex align-items-center mx-auto mx-lg-0">
                  <p>01</p>
                  <a href="#">MARKETING</a>
                </div>
              </div>

              <div className="assistant-team-link mb-4">
                <div className="assistant-team-main-link3 d-inline-flex align-items-center mx-auto mx-lg-0">
                  <p>02</p>
                  <a href="#">THOUGHT PARTNER</a>
                </div>
              </div>

              <div className="assistant-team-link mb-4">
                <div className="assistant-team-main-link4 d-inline-flex align-items-center mx-auto mx-lg-0">
                  <p>03</p>
                  <a href="#">TECHNICAL</a>
                </div>
              </div>

              <div className="assistant-team-link mb-4">
                <div className="assistant-team-main-link5 d-inline-flex align-items-center mx-auto mx-lg-0">
                  <p>04</p>
                  <a href="#">ADMINISTRATIVE</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <div className="assistant-team-info">
                <h1 className="text-center text-lg-start mb-4">
                  You'll get back time from our Indian-based{" "}
                  <span>Virtual Assistant</span> team.
                </h1>
                <p>
                  Without the hassles of hiring and managing staff, you can have
                  access to an INDIAN assistant.
                </p>
                <p>
                  We manage all aspects of the job, including pay, benefits,
                  paid time off, holidays, wellness programs, overhead, and
                  more.
                </p>
                <p>
                  Paying simply for the precise time you need, down to the
                  minute, eliminates the need for monthly contracts or
                  subscriptions. Your hours never expire when working with us,
                  the only virtual assistant firm.
                </p>
                <p>
                  With a variety of savings options, we provide the most
                  affordable all-inclusive rates available. Only the time that
                  you really use—to the nearest minute—is paid for.
                </p>
                Start working immediately; we can pair you up with a VA and set
                up a meeting in less than a day.
                <p>
                  Start working immediately; we can pair you up with a VA and
                  set up a meeting in less than a day.
                </p>
                <div className="assistant-about-btn mb-5">
                  <a href="#">
                    Let's Discuss{" "}
                    <i className="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="start-today-section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <div className="person-img">
                <img src="./assets/Assistant-img/person-img.png" alt="Person" />
              </div>
            </div>
            <div className="col-lg-9 d-flex flex-column justify-content-center align-items-center">

              <div className="start-today-tittle text-center">
                <h1>
                  Start <span>Today</span>
                </h1>
                <p>We will assist you in giving you back your time.</p>
              </div>
              <div className="start-today-section-btn d-flex gap-5 mt-2 mb-5 ">
                <div className="start-today-btn">
                <a href="#">Get started <i class="fa-solid fa-arrow-right ms-1"></i></a>
                </div>

                <div className="start-today-btn">
                <a href="">Questions ? <i class="fa-solid fa-arrow-right ms-1"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="arrow-icon">
          <img src="./assets/Assistant-img/arrow-icon.png" alt="" />
        </div>
      </div>

      {/* <div className="start-today-section">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-3 d-flex justify-content-start mb-4 mb-lg-0">
              <div className="person-img">
                <img src="./assets/Assistant-img/person-img.png" alt="Person" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <div className="start-today-tittle">
                <h1>
                  Start <span>Today</span>
                </h1>
                <p>We will assist you in giving you back your time.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
