import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./ourwork.css";

export default function OurWork() {
  // Options for Owl Carousel
  const options = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <div className="ourwork-section position-relative mt-5">
      <div className="container">

        <h1 className="text-center">
          Our <span>Work</span>
        </h1>
        <h6 className="text-center mb-5">Projects Delivered by our Developers!</h6>

        <OwlCarousel className="owl-theme" {...options}>

          <div className="item">
            <div className="Project-card">
                <img src="./assets/ServicesPage/Web Development Services.png" alt="" />
                {/* <img src="./assets/ServicesPage/work.png" alt="" /> */}
            </div>
          </div>
          
          <div className="item">
            <div className="Project-card">
                <img src="./assets/ServicesPage/work2.png" alt="" />
                <img src="./assets/ServicesPage/work2.png" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="Project-card">
                <img src="./assets/ServicesPage/work.png" alt="" />
                <img src="./assets/ServicesPage/work.png" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="Project-card">
                <img src="./assets/ServicesPage/work2.png" alt="" />
                <img src="./assets/ServicesPage/work2.png" alt="" />
            </div>
          </div>
        
        </OwlCarousel>

        <div className="ourwork-dot-icon">
            <img src="./assets/ServicesPage/dot-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}
