import React from "react";
import "./developers.css";

export default function Developers() {
  const cardData = [
    {
      icon: "fa-solid fa-code",
      title: "Confidentiality & Data Security",
      description:
        "We recognize the significance of safeguarding sensitive data. Prioritizing data security through stringent protocols and ensuring safe data handling is one of our core principles.",
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "High Quality at Offshore Prices",
      description:
        "webpristine offers a unique advantage: world-class software development at competitive offshore prices. We deliver high-quality solutions without exceeding your budget.",
    },
    {
      icon: "fa-solid fa-file-signature", 
      title: "NDA Protected Contracts",
      description:
        "Your data and sensitive information is safe with us. At webpristine, we value confidentiality. We establish NDAs to legally bind our team to strict confidentiality standards.",
    },
    {
      icon: "fa-solid fa-people-arrows",
      title: "Pool of Experienced Developers",
      description:
        "Our team comprises highly skilled and experienced developers. Their proficiency is grounded in a proven track record of successful projects, ensuring they tackle complex challenges and deliver innovative solutions for your business.",
    },
    {
      icon: "fa-solid fa-project-diagram",
      title: "Flexible Engagement Models",
      description:
        "Every project is unique, and we respect that. We offer flexible engagement models tailored to your specific needs.",
    },
    {
      icon: "fa-solid fa-user-shield",
      title: "100% Source Code Ownerships",
      description:
        "When you partner with webpristine, you retain complete ownership of the source code; granting you the freedom to make modifications, enhancements, or scale your software according to your evolving business needs.",
    },
  ];

  return (
    <>
      <div className="developer-section mt-2">
        <div className="container">
          <div className="developer-info text-center">
            <h1 className="">
              Why Hire <span>Developers</span>
            </h1>
            <p>from Webpristine?</p>
            <p className="mb-5">
              Accelerate your business growth by hiring our skilled Software
              Developers
            </p>
          </div>

          <div className="row g-5">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 gap-5 d-flex align-items-stretch"
              >
                <div className="developer-card position-relative mb-5 gap-4 h-95">
                  <div className="developer-card-icon text-center">
                    <span>
                      <i className={card.icon}></i>
                    </span>
                  </div>
                  <h4 className="text-center mt-4">{card.title}</h4>
                  <p className="text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
