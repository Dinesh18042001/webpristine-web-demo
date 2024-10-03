import React from "react";
import "./careersfaq.css";
export default function CareersFaq() {
  return (
    <>
      <div className="careerfaq-section pb-5 mt-5">
        <div className="container">
          <div className="careerfaq-tittle mb-5">
            <h1 className="text-center">FAQ</h1>
          </div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item mb-4">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Why should I hire developers in India at webpristine?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>Why should I hire developers in India at webpristine:</p>
                  <ul>
                    <li>Indian services at offshore prices</li>
                    <li>A large pool of skilled professionals</li>
                    <li>Thriving tech ecosystem</li>
                    <li>Technical Expertise</li>
                    <li>Flexibility</li>
                    <li>Ability to work on diverse projects</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-4">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How to hire developers in India at webpristine?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                 <ul>
                  <li>Define Your Needs</li>
                  <li>Visit Webpristine</li>
                  <li> Contact Them</li>
                 </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-4">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How much does it cost to hire Indian developers from
                  webpristine?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <p>Starts from $10/hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
