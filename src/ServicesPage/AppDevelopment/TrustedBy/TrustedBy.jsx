import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./trustedby.css";

export default function TrustedBy() {
  // Owl Carousel settings
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1, 
      },
      768: {
        items: 2, 
      },
      1024: {
        items: 3, 
      },
    },
  };

  return (
    <div className="trusted-section mt-5">
      <div className="container">
        <h1 className="text-center">
          Trusted <span>By</span>
        </h1>
        <p className="text-center">
          Industry leaders for our custom mobile app development services - We
          love that!
        </p>

        <OwlCarousel className="owl-theme" {...options}>

          <div className="item">
            <div className="app-card1">
              <div className="app-tittle mb-4">
                <div className="app-tittle-bg position-relative">
                  <img src="./assets/AppDevelopment/card-bg.png" alt="" />
                  <div className="main-tittle">
                    <h6>Social Media App</h6>
                    <p>Flutter, Node.Js</p>
                  </div>
                </div>
              </div>
              <div className="app-card-img d-flex justify-content-center">
                <img
                  src="./assets/AppDevelopment/app.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

           <div className="item">
            <div className="app-card2">
              <div className="app-tittle mb-4">
                <div className="app-tittle-bg position-relative">
                  <img src="./assets/AppDevelopment/card-bg.png" alt="" />
                  <div className="main-tittle">
                    <h6>eCommerce App</h6>
                    <p>React Native, Node.Js</p>
                  </div>
                </div>
              </div>
              <div className="app-card-img d-flex justify-content-center">
                <img
                  src="./assets/AppDevelopment/app.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>


          <div className="item">
            <div className="app-card3">
              <div className="app-tittle mb-4">
                <div className="app-tittle-bg position-relative">
                  <img src="./assets/AppDevelopment/card-bg.png" alt="" />
                  <div className="main-tittle">
                    <h6>Gaming App</h6>
                    <p>Flutter, Node.Js</p>
                  </div>
                </div>
              </div>
              <div className="app-card-img d-flex justify-content-center">
                <img
                  src="./assets/AppDevelopment/app.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

         
        
        </OwlCarousel>
      </div>
    </div>
  );
}
