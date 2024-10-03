// import React, { useRef, useState } from "react";
// import CountUp from "react-countup";
// import "./idea.css";
// import { motion } from "framer-motion";

// export const Idea = () => {
//   const imgRef = useRef(null);
//   const [hover, setHover] = useState(false);


//   return (
//     <>
//       <div className="idea-section">

//         <div className="container">
//           <div className="row align-items-center">

//             <div className="col-lg-5 col-md-12 mb-4 mb-md-0 d-flex justify-content-center">
//               <div className="project-img">
//                 <div
//                   className="image-wrapper"
                
//                 >
//                   <img
//                     ref={imgRef}
//                     src={hover ? "./assets/idea/project-img.png" : "./assets/idea/project-img2.png"}
//                     className="img-fluid"
//                     alt="Project"
//                   />
//                 </div>
//               </div>
//             </div>

//             <motion.div 
//               initial={{x: 200}}
//               whileInView={{x: 0}}
//               transition={{duration: 1.3}}
//               className="col-lg-7 col-md-12"
//             >
//               <div className="tittle mb-4">
//                 <h3>
//                   We <span> Create Great </span> Things Out of Good Ideas.
//                 </h3>
//               </div>
//               <div className="row">
//                 <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                   <div className="counter1">
//                     <h2 className="text-center">
//                       <CountUp end={20} suffix="+" duration={4} />
//                     </h2>
//                     <h6 className="text-center">Years of Experience</h6>
//                   </div>
//                 </div>

//                 <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-3">
//                   <div className="counter1">
//                     <h2 className="text-center">
//                       <CountUp end={400} suffix="+" duration={4} />
//                     </h2>
//                     <h6 className="text-center">In-House Experts</h6>
//                   </div>
//                 </div>

//                 <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                   <div className="counter1">
//                     <h2 className="text-center">
//                       <CountUp end={1000} suffix="+" duration={4} />
//                     </h2>
//                     <h6 className="text-center">Projects Delivered</h6>
//                   </div>
//                 </div>

//                 <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-3">
//                   <div className="counter1">
//                     <h2 className="text-center">
//                       <CountUp end={600} suffix="+" duration={4} />
//                     </h2>
//                     <h6 className="text-center">Happy Clients</h6>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel";
import "./idea.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Idea = () => {
  const imgRef = useRef(null);
  const [hover, setHover] = useState(false);

  const carouselOptions = {
    loop: false,
    margin: 0,
    nav: false,
    dots: false, 
    animateOut: 'fadeOut',
    autoplay: true,              
    autoplayTimeout: 4000,  
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1, 
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="idea-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0 d-flex justify-content-center">
              {/* Owl Carousel using react-owl-carousel */}
              <OwlCarousel className="owl-theme" {...carouselOptions}>
                {/* Item 1 */}
                <div className="item">
                  <div className="project-img">
                    <div className="image-wrapper">
                      <img
                        ref={imgRef}
                        src="./assets/idea/project-img2.png"
                        className="img-fluid"
                        alt="Project"
                      />
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                {/* <div className="item">
                  <div className="project-img">
                    <div className="image-wrapper">
                      <img
                        src="./assets/idea/project-img.png"
                        className="img-fluid"
                        alt="Project"
                      />
                    </div>
                  </div>
                </div> */}
                {/* Add more items if needed */}
              </OwlCarousel>
            </div>

            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              className="col-lg-7 col-md-12"
            >
              <div className="tittle mb-4">
                <h3>
                  We <span> Create Great </span> Things Out of Good Ideas.
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="counter1">
                    <h2 className="text-center">
                      <CountUp end={10} suffix="+" duration={4} />
                    </h2>
                    <h6 className="text-center">Years of Experience</h6>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-3">
                  <div className="counter1">
                    <h2 className="text-center">
                      <CountUp end={100} suffix="+" duration={4} />
                    </h2>
                    <h6 className="text-center">In-House Experts</h6>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="counter1">
                    <h2 className="text-center">
                      <CountUp end={1000} suffix="+" duration={4} />
                    </h2>
                    <h6 className="text-center">Projects Delivered</h6>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-3">
                  <div className="counter1">
                    <h2 className="text-center">
                      <CountUp end={600} suffix="+" duration={4} />
                    </h2>
                    <h6 className="text-center">Happy Clients</h6>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
