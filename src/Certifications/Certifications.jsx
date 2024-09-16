import React from "react";
import "./certifications.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Certifications = () => {
  return (
    <>
      <div className="certification-section position-relative">

        <div className="bg-img">
          <img src="./assets/Certifications/bg-img.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="certification-tittlt">
            <h1 className="text-center mb-4">Awards & Certifications</h1>
            <p className="text-center mb-5">
              Since 2009, we've built trust by catering to our clients’ unique
              needs and exceeding expectations. Our dedicated team has undergone
              rigorous training and obtained various certifications, assuring
              that your concerns are addressed with professionalism and
              expertise.
            </p>

            <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            autoplay
            autoplayTimeout={3000} 
            navText={[
              "<i class='fa-solid fa-arrow-left'></i>",
              "<i class='fa-solid fa-arrow-right'></i>",
            ]}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
              992: {
                items: 3,
              },
            }}
            >
              <div className="item d-flex flex-column justify-content-center align-items-center">
                <div className="certification-img">
                  <div className="certification-icon-img ">
                    <img
                      src="./assets/Certifications/img1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="certification-icon-img">
                    <img
                      src="./assets/Certifications/img2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="item d-flex flex-column justify-content-center align-items-center">
                <div className="certification-img">
                  <div className="certification-icon-img ">
                    <img
                      src="./assets/Certifications/img6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="certification-icon-img">
                    <img
                      src="./assets/Certifications/img4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="item d-flex flex-column justify-content-center align-items-center">
                <div className="certification-img">
                  <div className="certification-icon-img ">
                    <img
                      src="./assets/Certifications/img5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="certification-icon-img">
                    <img
                      src="./assets/Certifications/img6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="item d-flex flex-column justify-content-center align-items-center">
                <div className="certification-img">
                  <div className="certification-icon-img ">
                    <img
                      src="./assets/Certifications/img6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="certification-icon-img">
                    <img
                      src="./assets/Certifications/img4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="item d-flex flex-column justify-content-center align-items-center">
                <div className="certification-img">
                  <div className="certification-icon-img ">
                    <img
                      src="./assets/Certifications/img5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="certification-icon-img">
                    <img
                      src="./assets/Certifications/img6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>


        <div className="certification-icon1">
          <img src="./assets/Certifications/left-icon.png" alt="" />
        </div>
        
        {/* <div className="certification-icon2">
          <img src="./assets/Certifications/right-icon.png" alt="" />
        </div> */}



      </div>
    </>
  );
};
