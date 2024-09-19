import React from "react";
import "./Options.css";

export default function Options() {
  const pricingOptions = [
    {
      title: "Starter",
      price: "$156",
      hours: "20hr at $40.75",
      features: [
        "Unlimited Users",
        "No Monthly Contract",
        "Access to a Team of VAs"
      ],
      icon: "fa-rocket",
    },
    {
      title: "Premium",
      price: "$2,196",
      hours: "60hr at $36.60",
      features: [
        "Priority Support",
        "Unlimited Users",
        "No Monthly Contract",
      ],
      icon: "fa-briefcase",
    },
    {
      title: "Core",
      price: "$1,550",
      hours: "40hr at $38.75",
      features: [
        "Dedicated VA",
        "Unlimited Users",
        "Priority Support",
      ],
      icon: "fa-building",
    },
    {
      title: "Pay As You Go",
      price: "$45.75/hr",
      hours: "*40hr at $38.75",
      features: [
        "Custom Solutions",
        "Unlimited Users",
        "Dedicated Support",
      ],
      icon: "fa-cogs",
    },
  ];

  return (
    <>
      <div className="pricing-scetion position-relative mt-5 mb-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center">Pricing Options</h1>
            <h5 className="text-center">
              Experience our per-package pricing model, offering ultimate flexibility.
            </h5>
            <h6 className="text-center">
              Say goodbye to minimums, monthly commitments and recurring subscriptions - with us, you're never locked into a per month contract.
            </h6>
          </div>

          <div className="card-box-main">
            <div className="container">
            <div className="row">
              {pricingOptions.map((option, index) => (
                <div className="col-lg-3 col-md-6 mb-4" key={index}>
                  <div className="card-box position-relative">
                    <div className="option-card mb-4">
                      <h5 className="text-center mb-3">{option.title}</h5>
                      <div className="icon-container">
                        <i className={`fa-solid ${option.icon}`}></i>
                      </div>
                      <h2 className="text-center">{option.price}</h2>
                      <h6 className="text-center">{option.hours}</h6>
                      <hr />
                      {option.features.map((feature, i) => (
                        <p key={i}>
                          <i className="fa-solid fa-thumbs-up me-2"></i>{feature}
                        </p>
                      ))}
                    </div>
                    <div className="card-btn">
                      <a href="">
                        Get Started <i className="fa-solid fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>

            <div className="pricing-arrow-icon">
                <img src="./assets/icons/arrow-icon.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

