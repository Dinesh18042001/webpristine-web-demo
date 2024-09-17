// import React from "react";
// import "./services.css";

// export const Services = () => {
//   return (
//     <>
//       <div className="services-section position-relative">
//         <div className="service-bg">
//           <img src="./assets/Services/services-bg.png" alt="" />
//         </div>

//         <div className="container">
//           {/* <div className="serveice-tittle">
//             <h1 className="text-center mb-4">Services</h1>
//           </div> */}

//           <div className="services-img">
//             <div className="row">
//               <div className="col">
//                 <div className="main-service-img">
//                   <img src="./assets/Services/img1.png" alt="" />
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="main-service-img">
//                   <img src="./assets/Services/img1.png" alt="" />
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="main-service-img">
//                   <img src="./assets/Services/img1.png" alt="" />
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="main-service-img">
//                   <img src="./assets/Services/img1.png" alt="" />
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="main-service-img">
//                   <img src="./assets/Services/img1.png" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <div className="custome-cards main-row">
//             <div className="custome-card main-row ">
//               <div className="custome-card-body">
//                 <img src="./assets/Services/img1.png" alt="" />
//                 <div className="custome-card-tittle">
//                   <h2>Virtual Assistant</h2>
//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
//                   incidunt autem aspernatur, quae dicta nulla voluptas magnam
//                   officiis minima perspiciatis.
//                 </p>
//               </div>
//             </div>

//             <div className="custome-card main-row">
//               <div className="custome-card-body">
//                 <div className="custome-card-tittle">
//                   <h2>App Development</h2>
//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
//                   incidunt autem aspernatur, quae dicta nulla voluptas magnam
//                   officiis minima perspiciatis.
//                 </p>
//               </div>
//             </div>

//             <div className="custome-card main-row">
//               <div className="custome-card-body">
//                 <div className="custome-card-tittle">
//                   <h2>Web Development</h2>
//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
//                   incidunt autem aspernatur, quae dicta nulla voluptas magnam
//                   officiis minima perspiciatis.
//                 </p>
//               </div>
//             </div>

//             <div className="custome-card main-row">
//               <div className="custome-card-body">
//                 <div className="custome-card-tittle">
//                   <h2>Digital Marketing</h2>
//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
//                   incidunt autem aspernatur, quae dicta nulla voluptas magnam
//                   officiis minima perspiciatis.
//                 </p>
//               </div>
//             </div>

//             <div className="custome-card main-row">
//               <div className="custome-card-body">
//                 <div className="custome-card-tittle">
//                   <h2>Cloud Services</h2>
//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
//                   incidunt autem aspernatur, quae dicta nulla voluptas magnam
//                   officiis minima perspiciatis.
//                 </p>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useState } from "react";
// import "./services.css";

// export const Services = () => {
//   const [hovered, setHovered] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHovered(index);
//   };

//   const handleMouseLeave = () => {
//     setHovered(null);
//   };

//   const services = [
//     { src: "./assets/Services/img1.png", title: "Virtual Assistant", description: "Nobody ever said, 'Mobile apps are complicated,' before they met our team of developers." },
//     { src: "./assets/Services/img2.png", title: "Service 2", description: "Description for service 2." },
//     { src: "./assets/Services/img3.png", title: "Service 3", description: "Description for service 3." },
//     { src: "./assets/Services/img1.png", title: "Service 4", description: "Description for service 4." },
//     { src: "./assets/Services/img2.png", title: "Service 5", description: "Description for service 5." },
//   ];

//   return (
//     <div className="services-section position-relative">
//       <div className="service-bg mb-5">
//         <img src="./assets/Services/services-bg.png" alt="" />
//       </div>

//       <div className="container">
//         {/* <div className="service-title mb-5">
//           <h1 className="text-center">Services</h1>
//         </div> */}
//         <div className="services-img">
//           <div className="row">
//             {services.map((service, index) => (
//               <div className="col" key={index}>
//                 <div className="main-service-img">
//                   <img
//                     src={service.src}
//                     alt={service.title}
//                     style={{
//                       width: hovered === index ? "400px" : "10px",
//                       transition: "width 0.3s ease-in-out",
//                     }}
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onMouseLeave={handleMouseLeave}
//                   />
//                   <h2 className="service-title">{service.title}</h2>
//                   <p className="service-description">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



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
