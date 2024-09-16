import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "./companies.css";

export const Companies = () => {
  // Owl Carousel settings
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,      
    autoplayTimeout: 3000,   
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  };

  return (
    <>
      <div className="company-section">
        <div className="container">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <div className="company-img text-center">
                <img src="./assets/company-img/img1.png" alt="Company 1" className="img-fluid" />
              </div>
            </div>
            <div className="item">
              <div className="company-img text-center">
                <img src="./assets/company-img/img2.png" alt="Company 2" className="img-fluid" />
              </div>
            </div>
            <div className="item">
              <div className="company-img text-center">
                <img src="./assets/company-img/img3.png" alt="Company 3" className="img-fluid" />
              </div>
            </div>
            <div className="item">
              <div className="company-img text-center">
                <img src="./assets/company-img/img4.png" alt="Company 4" className="img-fluid" />
              </div>
            </div>
            <div className="item">
              <div className="company-img text-center">
                <img src="./assets/company-img/img5.png" alt="Company 5" className="img-fluid" />
              </div>
            </div>
            <div className="item">
              <div className="company-img text-center">
                <img src="./assets/company-img/img6.png" alt="Company 6" className="img-fluid" />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};
