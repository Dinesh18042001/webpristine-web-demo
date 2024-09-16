import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./case.css";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: "Website Development",
    description: "SilkWater is a farming solution that takes care of the prime needs of a farmer. It enables the farmers to manage their budget, calculations, profit and loss in a more efficient way.",
    mainImg: "./assets/images/banner2.jpg",
    sideImg: "./assets/case/img2.png",
    btnGroup: ["UI/UX Design", "iOS App", "Web App"],
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "SmartFarm provides real-time analytics and monitoring for farmers, helping them optimize crop yield and manage water consumption.",
    mainImg: "./assets/images/banner2.jpg",
    sideImg: "./assets/case/img3.png",
    btnGroup: ["Mobile App", "API Integration", "Backend"],
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "FarmFresh is an online platform that connects farmers with consumers, offering fresh produce directly from farms.",
    mainImg: "./assets/images/banner2.jpg",
    sideImg: "./assets/case/img2.png",
    btnGroup: ["E-commerce", "Web Design", "SEO"],
  },
];

export const Case = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const sections = document.querySelectorAll('.cardMainContainer');
    const sectionDetail = document.getElementById('sectionDetail');
  
    if (sections.length > 0) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: ".section7",
          pin: true,
          scrub: 1,
          end: () => `+=${document.querySelector('.section7')?.offsetWidth || 0}`,
          invalidateOnRefresh: true,
        },
      });
    } else {
      console.warn('GSAP: No sections found for animation.');
    }
  
    const handleScroll = () => {
      const caseSection = document.getElementById('caseStudies')?.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (caseSection && caseSection.top <= 0 && caseSection.bottom >= windowHeight - 100) {
        sectionDetail?.classList.add('positionSticky');
        sections.forEach((study) => study.classList.add('positionSticky'));
      } else {
        sectionDetail?.classList.remove('positionSticky');
        sections.forEach((study) => study.classList.remove('positionSticky'));
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className="case-section" id="caseStudies">
      <div className="case-bg">
        <img src="./assets/case/case-bg.png" alt="Background" />
      </div>
      <div className="container">
        <div className="case-tittlt mb-5">
          <h1 className="text-center">Case Studies</h1>
          <h4 className="text-center">We do Amazing Things with Amazing People</h4>
        </div>

        {caseStudies.map((caseItem) => (
          <div className="case-card position-relative mb-5" key={caseItem.id}>
            <div className="card-img">
              <img src={caseItem.mainImg} alt={caseItem.title} />
            </div>

            <div className="case-card-info">
              <h4 className="mb-4">{caseItem.title}</h4>
              <p>{caseItem.description}</p>

              <div className="case-card-btn">
                <a href="#">View More <i className="fa-solid fa-arrow-right ms-3"></i></a>
              </div>
            </div>

            <div className="card-side-img">
              <img src={caseItem.sideImg} alt={caseItem.title} />
            </div>

            <div className="btn-group">
              {caseItem.btnGroup.map((btnText, index) => (
                <div className="btn-group-one me-3" key={index}>
                  <a href="#">{btnText}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
