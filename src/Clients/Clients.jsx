import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "./clients.css";

export default function Clients() {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    // autoplay: true,
    // autoplayTimeout: 3000,

    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <div className="clients-section">
      <div className="clients-tittle">
        <h1 className="text-center mb-5">What our clients say about us</h1>
      </div>
      <div className="container-fluid">
        <div className="clients-vedeos">
          <OwlCarousel
            className="clients-vedeos-carouel owl-theme"
            {...options}
          >
            <div className="item d-flex flex-column justify-content-center align-items-center">
              <div className="clients-vedio position-relative">
                <video width="700" height="394" controls>
                  <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="client-name">
                  <h5 className="text-center">Justin Ly</h5>
                  <p className="text-center">
                    A.T. Gradient Consulting Construction, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="item d-flex flex-column justify-content-center align-items-center">
              <div className="clients-vedio position-relative">
                <video width="700" height="394" controls>
                  <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="client-name">
                  <h5 className="text-center">Justin Ly</h5>
                  <p className="text-center">
                    A.T. Gradient Consulting Construction, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="item d-flex flex-column justify-content-center align-items-center">
              <div className="clients-vedio position-relative">
                <video width="700" height="394" controls>
                  <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="client-name">
                  <h5 className="text-center">Justin Ly</h5>
                  <p className="text-center">
                    A.T. Gradient Consulting Construction, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="item d-flex flex-column justify-content-center align-items-center">
              <div className="clients-vedio position-relative">
                <video width="700" height="394" controls>
                  <source src="./assets/clients/vedio1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="client-name">
                  <h5 className="text-center">Justin Ly</h5>
                  <p className="text-center">
                    A.T. Gradient Consulting Construction, Canada
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
