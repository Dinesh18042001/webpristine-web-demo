// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./case.css";

// gsap.registerPlugin(ScrollTrigger);

// const caseStudies = [
//   {
//     id: 1,
//     title: "Website Development",
//     description: "SilkWater is a farming solution that takes care of the prime needs of a farmer. It enables the farmers to manage their budget, calculations, profit and loss in a more efficient way.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img2.png",
//     btnGroup: ["UI/UX Design", "iOS App", "Web App"],
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     description: "SmartFarm provides real-time analytics and monitoring for farmers, helping them optimize crop yield and manage water consumption.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img3.png",
//     btnGroup: ["Mobile App", "API Integration", "Backend"],
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     description: "FarmFresh is an online platform that connects farmers with consumers, offering fresh produce directly from farms.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img2.png",
//     btnGroup: ["E-commerce", "Web Design", "SEO"],
//   },
// ];

// export const Case = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
  
//     const sections = document.querySelectorAll('.cardMainContainer');
//     const sectionDetail = document.getElementById('sectionDetail');
  
//     if (sections.length > 0) {
//       gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: 'none',
//         scrollTrigger: {
//           trigger: ".section7",
//           pin: true,
//           scrub: 1,
//           end: () => `+=${document.querySelector('.section7')?.offsetWidth || 0}`,
//           invalidateOnRefresh: true,
//         },
//       });
//     } else {
//       console.warn('GSAP: No sections found for animation.');
//     }
  
//     const handleScroll = () => {
//       const caseSection = document.getElementById('caseStudies')?.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
  
//       if (caseSection && caseSection.top <= 0 && caseSection.bottom >= windowHeight - 100) {
//         sectionDetail?.classList.add('positionSticky');
//         sections.forEach((study) => study.classList.add('positionSticky'));
//       } else {
//         sectionDetail?.classList.remove('positionSticky');
//         sections.forEach((study) => study.classList.remove('positionSticky'));
//       }
//     };
  
//     window.addEventListener('scroll', handleScroll);
  
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  

//   return (
//     <div className="case-section " id="caseStudies">
//       <div className="case-bg">
//         <img src="./assets/case/case-bg.png" alt="Background" />
//       </div>
//       <div className="container">
//         <div className="case-tittlt mb-5">
//           <h1 className="text-center">Case <span>Studies</span></h1>
//           <h4 className="text-center">We do Amazing Things with Amazing People</h4>
//         </div>

//         {caseStudies.map((caseItem) => (
//           <div className="case-card position-relative mb-5" key={caseItem.id}>
//             <div className="card-img">
//               <img src={caseItem.mainImg} alt={caseItem.title} />
//             </div>

//             <div className="case-card-info">
//               <h4 className="mb-4">{caseItem.title}</h4>
//               <p>{caseItem.description}</p>

//               <div className="case-card-btn">
//                 <a href="#">View More <i className="fa-solid fa-arrow-right ms-3"></i></a>
//               </div>
//             </div>

//             <div className="card-side-img">
//               <img src={caseItem.sideImg} alt={caseItem.title} />
//             </div>

//             <div className="btn-group">
//               {caseItem.btnGroup.map((btnText, index) => (
//                 <div className="btn-group-one me-3" key={index}>
//                   <a href="#">{btnText}</a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };




// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./case.css";

// gsap.registerPlugin(ScrollTrigger);

// const caseStudies = [
//   {
//     id: 1,
//     title: "Website Development",
//     description: "SilkWater is a farming solution that takes care of the prime needs of a farmer. It enables the farmers to manage their budget, calculations, profit and loss in a more efficient way.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img2.png",
//     btnGroup: ["UI/UX Design", "iOS App", "Web App"],
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     description: "SmartFarm provides real-time analytics and monitoring for farmers, helping them optimize crop yield and manage water consumption.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img3.png",
//     btnGroup: ["Mobile App", "API Integration", "Backend"],
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     description: "FarmFresh is an online platform that connects farmers with consumers, offering fresh produce directly from farms.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img2.png",
//     btnGroup: ["E-commerce", "Web Design", "SEO"],
//   },
// ];

// export const Case = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
    
//     const sections = document.querySelectorAll('.case-card');
    
//     if (sections.length > 0) {
//       sections.forEach((section, index) => {
//         gsap.fromTo(
//           section,
//           {
//             opacity: 0,
//             y: 100,
//             zIndex: sections.length - index,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             zIndex: sections.length - index,
//             ease: "power1.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 80%", 
//               end: "top 20%", 
//               scrub: 1,
//               toggleActions: "play none none reverse", 
//             },
//           }
//         );
//       });
//     }
//   }, []);

//   return (
//     <div className="case-section position-sticky top-0" id="caseStudies">
//       <div className="case-bg">
//         <img src="./assets/case/case-bg.png" alt="Background" />
//       </div>
//       <div className="container">
//         <div className="case-tittlt mb-5">
//           <h1 className="text-center">Case <span>Studies</span></h1>
//           <h4 className="text-center">We do Amazing Things with Amazing People</h4>
//         </div>

//         {caseStudies.map((caseItem) => (
//           <div className="case-card position-relative mb-5" key={caseItem.id}>
//             <div className="card-img">
//               <img src={caseItem.mainImg} alt={caseItem.title} />
//             </div>

//             <div className="case-card-info">
//               <h4 className="mb-4">{caseItem.title}</h4>
//               <p>{caseItem.description}</p>

//               <div className="case-card-btn">
//                 <a href="#">View More <i className="fa-solid fa-arrow-right ms-3"></i></a>
//               </div>
//             </div>

//             <div className="card-side-img">
//               <img src={caseItem.sideImg} alt={caseItem.title} />
//             </div>

//             <div className="btn-group">
//               {caseItem.btnGroup.map((btnText, index) => (
//                 <div className="btn-group-one me-3" key={index}>
//                   <a href="#">{btnText}</a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };





// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./case.css";

// gsap.registerPlugin(ScrollTrigger);

// const caseStudies = [
//   {
//     id: 1,
//     title: "Website Development",
//     description: "SilkWater is a farming solution that takes care of the prime needs of a farmer. It enables the farmers to manage their budget, calculations, profit and loss in a more efficient way.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img2.png",
//     btnGroup: ["UI/UX Design", "iOS App", "Web App"],
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     description: "SmartFarm provides real-time analytics and monitoring for farmers, helping them optimize crop yield and manage water consumption.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img3.png",
//     btnGroup: ["Mobile App", "API Integration", "Backend"],
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     description: "FarmFresh is an online platform that connects farmers with consumers, offering fresh produce directly from farms.",
//     mainImg: "./assets/images/banner2.jpg",
//     sideImg: "./assets/case/img2.png",
//     btnGroup: ["E-commerce", "Web Design", "SEO"],
//   },
// ];

// export const Case = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
    
//     const sections = document.querySelectorAll('.case-card');
    
//     if (sections.length > 0) {
//       sections.forEach((section, index) => {
//         gsap.fromTo(
//           section,
//           {
//             opacity: 0,
//             y: 100,
//             zIndex: sections.length - index,
//           },
//           {
//             opacity: 1,
//             y:0,
//             zIndex: sections.length - index,
//             ease: "power1.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 80%", 
//               end: "top 20%", 
//               scrub: true, 
//               toggleActions: "play none none reverse", 
//             },
//           }
//         );
//       });
//     }
//   }, []);

//   return (
//     <div className="case-section" id="caseStudies">
//       <div className="case-bg">
//         <img src="./assets/case/case-bg.png" alt="Background" />
//       </div>
//       <div className="container">
//         <div className="case-tittlt mb-5">
//           <h1 className="text-center">Case <span>Studies</span></h1>
//           <h4 className="text-center">We do Amazing Things with Amazing People</h4>
//         </div>

//         {caseStudies.map((caseItem) => (
//           <div className="case-card position-relative mb-5" key={caseItem.id}>
//             <div className="card-img">
//               <img src={caseItem.mainImg} alt={caseItem.title} />
//             </div>

//             <div className="case-card-info">
//               <h4 className="mb-4">{caseItem.title}</h4>
//               <p>{caseItem.description}</p>

//               <div className="case-card-btn">
//                 <a href="#">View More <i className="fa-solid fa-arrow-right ms-3"></i></a>
//               </div>
//             </div>

//             <div className="card-side-img">
//               <img src={caseItem.sideImg} alt={caseItem.title} />
//             </div>

//             <div className="btn-group">
//               {caseItem.btnGroup.map((btnText, index) => (
//                 <div className="btn-group-one me-3" key={index}>
//                   <a href="#">{btnText}</a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };








// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./case.css";
// import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// export const Case = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const cards = document.querySelectorAll('.case-card');

//     cards.forEach((card, index) => {
//       const nextCard = cards[index + 1];

//       if (nextCard) {
//         gsap.timeline({
//           scrollTrigger: {
//             trigger: card,
//             start: "top top",
//             end: () => nextCard ? `+=${nextCard.offsetHeight}` : "bottom top",
//             scrub: true,
//             pin: true,
//             pinSpacing: false, // Disables extra spacing after the pin
//           },
//         })
//         .fromTo(card, { opacity: 1 }, { opacity: 0 }); // Fade out the current card as the next card comes in
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="case-section" id="caseStudies">
//       <div className="case-bg">
//         <img src="./assets/case/case-bg.png" alt="Background" />
//       </div>
//       <div className="container">
//         <div className="case-title mb-5">
//           <h1 className="text-center">
//             Case <span>Studies</span>
//           </h1>
//           <h4 className="text-center">
//             We do Amazing Things with Amazing People
//           </h4>
//         </div>

//         {/* Case Study 1 */}
//         <div className="case-card mb-5">
//           <div className="card-img">
//             <img src="./assets/images/banner2.jpg" alt="Website Development" />
//           </div>
//           <div className="case-card-info">
//             <h4 className="mb-4">Website Development</h4>
//             <p>
//               SilkWater is a farming solution that takes care of the prime needs of a farmer.
//               It enables the farmers to manage their budget, calculations, profit and loss 
//               in a more efficient way.
//             </p>
//             <div className="case-card-btn">
//               <Link to="/webdevelopment">
//                 View More <i className="fa-solid fa-arrow-right ms-3"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="card-side-img">
//             <img src="./assets/case/img2.png" alt="Website Development" />
//           </div>
//           <div className="btn-group">
//             <div className="btn-group-one me-3"><a href="#">UI/UX Design</a></div>
//             <div className="btn-group-one me-3"><a href="#">iOS App</a></div>
//             <div className="btn-group-one me-3"><a href="#">Web App</a></div>
//           </div>
//         </div>

//         {/* Case Study 2 */}
//         <div className="case-card mb-5">
//           <div className="card-img">
//             <img src="./assets/images/banner2.jpg" alt="Mobile App Development" />
//           </div>
//           <div className="case-card-info">
//             <h4 className="mb-4">Mobile App Development</h4>
//             <p>
//               SmartFarm provides real-time analytics and monitoring for farmers, 
//               helping them optimize crop yield and manage water consumption.
//             </p>
//             <div className="case-card-btn">
//               <Link to="./appdevelopment">
//                 View More <i className="fa-solid fa-arrow-right ms-3"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="card-side-img">
//             <img src="./assets/case/img3.png" alt="Mobile App Development" />
//           </div>
//           <div className="btn-group">
//             <div className="btn-group-one me-3"><a href="#">Mobile App</a></div>
//             <div className="btn-group-one me-3"><a href="#">API Integration</a></div>
//             <div className="btn-group-one me-3"><a href="#">Backend</a></div>
//           </div>
//         </div>

//         {/* Case Study 3 */}
//         <div className="case-card mb-5">
//           <div className="card-img">
//             <img src="./assets/images/banner2.jpg" alt="Digital Marketing" />
//           </div>
//           <div className="case-card-info">
//             <h4 className="mb-4">Digital Marketing</h4>
//             <p>
//               FarmFresh is an online platform that connects farmers with consumers, 
//               offering fresh produce directly from farms.
//             </p>
//             <div className="case-card-btn">
//               <Link to="/digitalmarketing">
//                 View More <i className="fa-solid fa-arrow-right ms-3"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="card-side-img">
//             <img src="./assets/case/img2.png" alt="Digital Marketing" />
//           </div>
//           <div className="btn-group">
//             <div className="btn-group-one me-3"><a href="#">E-commerce</a></div>
//             <div className="btn-group-one me-3"><a href="#">Web Design</a></div>
//             <div className="btn-group-one me-3"><a href="#">SEO</a></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };






import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./case.css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const Case = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.case-card');

    cards.forEach((card, index) => {
      const nextCard = cards[index + 1];

      // Create a timeline for each card
      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top top", // Start pinning when the card's top hits the viewport's top
          end: () => nextCard ? `+=${nextCard.offsetHeight}` : "bottom top", // Stop pinning when the next card starts
          scrub: true,
          pin: true,
          pinSpacing: false, // Ensures that no extra space is added after the card is pinned
        },
      })
      .fromTo(card, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 0.5 }); // Smoothly fade and move the card up
    });

    return () => {
      // Clean up ScrollTriggers on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="case-section" id="caseStudies">
      <div className="case-bg">
        <img src="./assets/case/case-bg.png" alt="Background" />
      </div>
      <div className="container">
        <div className="case-title mb-5">
          <h1 className="text-center">
            Case <span>Studies</span>
          </h1>
          <h4 className="text-center">
            We do Amazing Things with Amazing People
          </h4>
        </div>

        {/* Case Study 1 */}
        <div className="case-card mb-5">
          <div className="card-img">
            <img src="./assets/images/banner2.jpg" alt="Website Development" />
          </div>
          <div className="case-card-info">
            <h4 className="mb-4">Website Development</h4>
            <p>
              SilkWater is a farming solution that takes care of the prime needs of a farmer.
              It enables the farmers to manage their budget, calculations, profit and loss 
              in a more efficient way.
            </p>
            <div className="case-card-btn">
              <Link to="/webdevelopment">
                View More <i className="fa-solid fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
          <div className="card-side-img">
            <img src="./assets/case/img2.png" alt="Website Development" />
          </div>
          <div className="btn-group">
            <div className="btn-group-one me-3"><a href="#">UI/UX Design</a></div>
            <div className="btn-group-one me-3"><a href="#">iOS App</a></div>
            <div className="btn-group-one me-3"><a href="#">Web App</a></div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="case-card mb-5">
          <div className="card-img">
            <img src="./assets/images/banner2.jpg" alt="Mobile App Development" />
          </div>
          <div className="case-card-info">
            <h4 className="mb-4">Mobile App Development</h4>
            <p>
              SmartFarm provides real-time analytics and monitoring for farmers, 
              helping them optimize crop yield and manage water consumption.
            </p>
            <div className="case-card-btn">
              <Link to="./appdevelopment">
                View More <i className="fa-solid fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
          <div className="card-side-img">
            <img src="./assets/case/img3.png" alt="Mobile App Development" />
          </div>
          <div className="btn-group">
            <div className="btn-group-one me-3"><a href="#">Mobile App</a></div>
            <div className="btn-group-one me-3"><a href="#">API Integration</a></div>
            <div className="btn-group-one me-3"><a href="#">Backend</a></div>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="case-card mb-5">
          <div className="card-img">
            <img src="./assets/images/banner2.jpg" alt="Digital Marketing" />
          </div>
          <div className="case-card-info">
            <h4 className="mb-4">Digital Marketing</h4>
            <p>
              FarmFresh is an online platform that connects farmers with consumers, 
              offering fresh produce directly from farms.
            </p>
            <div className="case-card-btn">
              <Link to="/digitalmarketing">
                View More <i className="fa-solid fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
          <div className="card-side-img">
            <img src="./assets/case/img2.png" alt="Digital Marketing" />
          </div>
          <div className="btn-group">
            <div className="btn-group-one me-3"><a href="#">E-commerce</a></div>
            <div className="btn-group-one me-3"><a href="#">Web Design</a></div>
            <div className="btn-group-one me-3"><a href="#">SEO</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};
    