import React from "react";
import "./hire.css";

export default function Hire() {
  const steps = [
    "Thorough CV Evaluation",
    "Initial Technical Screening",
    "In-depth Technical Interview",
    "Final HR Interview",
    "Offer & Onboarding",
  ];

  return (
    <>
      <div className="hire-section mt-5">
        <div className="container">
          <div className="hire-tittle">
            <h1 className="text-center">
              How We Hire <span>Developers?</span>
            </h1>
            <h5 className="text-center">
              With a five-step hiring process in place, we are committed to
              onboarding exceptionally productive engineers.
            </h5>
          </div>

          <div className="scroll-text mt-5">
            {steps.map((step, index) => (
              <div
                className="scroll-text-main d-flex align-items-center justify-content-between mb-4"
                key={index}
              >
                <div className="scroll-tittle d-flex align-items-center">
                  <span>{`0${index + 1}`}</span>
                  <h1>{step}</h1>
                </div>
                <div className="down-icon">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

