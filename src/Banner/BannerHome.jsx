import React from "react";
import "./banner.css"
import { Companies } from "../Company-logo/Companies";


export const BannerHome = () => {
  return (
    <>
      <div className="banner-section position-relative">
       
          <div className="item position-relative">

            <div className="banner">
              <img src="./assets/images/banner2.jpg" alt="" />
            </div>

            <div className="banner-info">
              <h2 className="mb-4">We are experts at providing</h2>
              <h1 className="mb-4">Software Solutions</h1>
              <h2>That Enhance Your Company</h2>
              <div className="banner-info-btn mt-5">
              <a href="#"><i class="fa-solid fa-arrow-right me-2"></i> Let’s Talk</a>
              </div>
            </div>

          </div>
       
      </div>
      {/* <Companies/> */}




    </>
  );
};
