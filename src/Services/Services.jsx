

// import React, { useState } from "react";
// import "./services.css";

// export const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0); 

//   const panels = [
//     {
//       title: "Virtual Assistant",
//       description: "We offer virtual assistant services to help you manage tasks remotely.",
//       button: "Read More",
//       imageUrl: "./assets/Services/img1.png",
//     },
//     {
//       title: "Mobile App Development",
//       description: "Our team develops mobile apps tailored to your business needs.",
//       button: "Read More",
//       imageUrl: "./assets/Services/img2.png",
//     },
//     {
//       title: "Web Development",
//       description: "We build responsive and engaging websites for businesses.",
//       button: "Read More",
//       imageUrl: "./assets/Services/img3.png",
//     },
//     {
//       title: "Digital Marketing",
//       description: "We provide digital marketing solutions to grow your online presence.",
//       button: "Read More",
//       imageUrl: "./assets/Services/img1.png",
//     },
//     {
//       title: "Cloud Services",
//       description: "Our cloud services help you scale your business with ease.",
//       button: "Read More",
//       imageUrl: "./assets/Services/img2.png",
//     },
//   ];

//   const handlePanelMouseEnter = (index) => {
//     setActiveIndex(index);
//   };

//   const handlePanelMouseLeave = () => {
//     setActiveIndex(0); 
//   };

//   return (
//     <div className="services-section position-relative">
//       <div className="service-bg">
//         <img src="./assets/Services/services-bg.png" alt="Service Background" />
//       </div>

//       <div className="services-tittle text-center">
//         <h1>Services</h1>
//       </div>

//       <div className="container">
//         {panels.map((panel, index) => (
//           <div
//             key={index}
//             className={`panel ${activeIndex === index ? "active" : ""}`}
//             style={{ backgroundImage: `url(${panel.imageUrl})` }}
//             onMouseEnter={() => handlePanelMouseEnter(index)} 
//             onMouseLeave={handlePanelMouseLeave} 
//           >
//             <h3>{panel.title}</h3>
//             <p>{panel.description}</p>
//             {activeIndex === index && (
//               <button className="panel-btn">{panel.button} <i class="fa-solid fa-arrow-right ms-1"></i></button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };




import React, { useState } from "react";
import "./services.css";

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

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
        {/* Panel 1 */}
        <div
          className={`panel ${activeIndex === 0 ? "active" : ""}`}
          style={{ backgroundImage: `url(./assets/Services/img1.png)` }}
          onMouseEnter={() => handlePanelMouseEnter(0)}
          onMouseLeave={handlePanelMouseLeave}
        >
          <h3 className={`title ${activeIndex === 0 ? "rotate-none" : "rotate-90"}`}>
            Virtual Assistant
          </h3>
          <p>We offer virtual assistant services to help you manage tasks remotely.</p>
          {activeIndex === 0 && (
            <button className="panel-btn">
              Read More <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>
          )}
        </div>

        {/* Panel 2 */}
        <div
          className={`panel ${activeIndex === 1 ? "active" : ""}`}
          style={{ backgroundImage: `url(./assets/Services/img2.png)` }}
          onMouseEnter={() => handlePanelMouseEnter(1)}
          onMouseLeave={handlePanelMouseLeave}
        >
          <h3 className={`title ${activeIndex === 1 ? "rotate-none" : "rotate-90"}`}>
            Mobile App Development
          </h3>
          <p>Our team develops mobile apps tailored to your business needs.</p>
          {activeIndex === 1 && (
            <button className="panel-btn">
              Read More <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>
          )}
        </div>

        {/* Panel 3 */}
        <div
          className={`panel ${activeIndex === 2 ? "active" : ""}`}
          style={{ backgroundImage: `url(./assets/Services/img3.png)` }}
          onMouseEnter={() => handlePanelMouseEnter(2)}
          onMouseLeave={handlePanelMouseLeave}
        >
          <h3 className={`title ${activeIndex === 2 ? "rotate-none" : "rotate-90"}`}>
            Web Development
          </h3>
          <p>We build responsive and engaging websites for businesses.</p>
          {activeIndex === 2 && (
            <button className="panel-btn">
              Read More <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>
          )}
        </div>

        {/* Panel 4 */}
        <div
          className={`panel ${activeIndex === 3 ? "active" : ""}`}
          style={{ backgroundImage: `url(./assets/Services/img1.png)` }}
          onMouseEnter={() => handlePanelMouseEnter(3)}
          onMouseLeave={handlePanelMouseLeave}
        >
          <h3 className={`title ${activeIndex === 3 ? "rotate-none" : "rotate-90"}`}>
            Digital Marketing
          </h3>
          <p>We provide digital marketing solutions to grow your online presence.</p>
          {activeIndex === 3 && (
            <button className="panel-btn">
              Read More <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>
          )}
        </div>

        {/* Panel 5 */}
        <div
          className={`panel ${activeIndex === 4 ? "active" : ""}`}
          style={{ backgroundImage: `url(./assets/Services/img2.png)` }}
          onMouseEnter={() => handlePanelMouseEnter(4)}
          onMouseLeave={handlePanelMouseLeave}
        >
          <h3 className={`title ${activeIndex === 4 ? "rotate-none" : "rotate-90"}`}>
            Cloud Services
          </h3>
          <p>Our cloud services help you scale your business with ease.</p>
          {activeIndex === 4 && (
            <button className="panel-btn">
              Read More <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
