// import React, { useRef, useState } from "react";
// import CountUp from "react-countup";
// import "./idea.css";
// import { motion } from "framer-motion"

// export const Idea = () => {
//   const imgRef = useRef(null);

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
//                     src="./assets/idea/project-img.png"
//                     className="img-fluid"
//                     alt="Project"
//                   />
//                 </div>
//               </div>
//             </div>

//             <motion.div 
//             initial={{x:200}}
//             whileInView={{x:0}}
//             transition={{duration:1.3}}
//             className="col-lg-7 col-md-12">
//               <div className="tittle mb-4">
//                 <h3>
//                   We Create Great Things Out of <span>Good Ideas.</span>
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
import "./idea.css";
import { motion } from "framer-motion";

export const Idea = () => {
  const imgRef = useRef(null);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className="idea-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0 d-flex justify-content-center">
              <div className="project-img">
                <div
                  className="image-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    ref={imgRef}
                    src={hover ? "./assets/idea/project-img.png" : "./assets/idea/project-img2.png"}
                    className="img-fluid"
                    alt="Project"
                  />
                </div>
              </div>
            </div>

            <motion.div 
              initial={{x: 200}}
              whileInView={{x: 0}}
              transition={{duration: 1.3}}
              className="col-lg-7 col-md-12"
            >
              <div className="tittle mb-4">
                <h3>
                  We Create Great Things Out of <span>Good Ideas.</span>
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="counter1">
                    <h2 className="text-center">
                      <CountUp end={20} suffix="+" duration={4} />
                    </h2>
                    <h6 className="text-center">Years of Experience</h6>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-3">
                  <div className="counter1">
                    <h2 className="text-center">
                      <CountUp end={400} suffix="+" duration={4} />
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
