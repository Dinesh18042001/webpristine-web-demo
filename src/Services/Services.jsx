

import React, { useState } from "react";
import "./services.css";

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const panels = [
    {
      title: "Virtual Assistant",
      description: "We offer virtual assistant services to help you manage tasks remotely.",
      button: "Read More",
      imageUrl: "./assets/Services/img1.png",
    },
    {
      title: "Mobile App Development",
      description: "Our team develops mobile apps tailored to your business needs.",
      button: "Read More",
      imageUrl: "./assets/Services/img2.png",
    },
    {
      title: "Web Development",
      description: "We build responsive and engaging websites for businesses.",
      button: "Read More",
      imageUrl: "./assets/Services/img3.png",
    },
    {
      title: "Digital Marketing",
      description: "We provide digital marketing solutions to grow your online presence.",
      button: "Read More",
      imageUrl: "./assets/Services/img1.png",
    },
    {
      title: "Cloud Services",
      description: "Our cloud services help you scale your business with ease.",
      button: "Read More",
      imageUrl: "./assets/Services/img2.png",
    },
  ];

  const handlePanelMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handlePanelMouseLeave = () => {
    setActiveIndex(0); 
  };

  return (
    <div className="services-section position-relative">
      <div className="service-bg">
        <img src="./assets/Services/services-bg.png" alt="Service Background" />
      </div>

      <div className="services-tittle text-center">
        <h1>Services</h1>
      </div>

      <div className="container">
        {panels.map((panel, index) => (
          <div
            key={index}
            className={`panel ${activeIndex === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${panel.imageUrl})` }}
            onMouseEnter={() => handlePanelMouseEnter(index)} 
            onMouseLeave={handlePanelMouseLeave} 
          >
            <h3>{panel.title}</h3>
            <p>{panel.description}</p>
            {activeIndex === index && (
              <button className="panel-btn">{panel.button} <i class="fa-solid fa-arrow-right ms-1"></i></button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
