import React from "react";
import "./banner.css";
import { Companies } from "../Company-logo/Companies";
import { Idea } from "../idea/Idea";
import { News } from "../News/News";
import { Services } from "../Services/Services";
import { Certifications } from "../Certifications/Certifications";
import  {Case}  from "../Case/Case";
import VisionIndustries from "../VisionIndustries/VisionIndustries";
import Clients from "../Clients/Clients";
import Blogs from "../Blogs/Blogs";
import CaseStudies from "../scrollCard/scrollCard";
import { Link } from "react-router-dom";

export const BannerHome = () => {
  return (
    <>
      <div className="banner-section position-relative ">
          <div className="container">
            <div className="banner-info">
              <h2 className="mb-4">We are experts at providing</h2>
              <h1 className="mb-4">Software Solutions</h1>
              <h2>That Enhance Your Company</h2>
              <div className="banner-info-btn mt-5">
                <Link to="./contactpage">
                  <i class="fa-solid fa-arrow-right me-2"></i> Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
     
      {/* <Companies/> */}
      <Idea />
      <News />
      <Services />
      {/* <Certifications/> */}
      {/* <Case /> */}
      <Case/>
      <VisionIndustries />
      <Clients />
      <Blogs />
      {/* <CaseStudies/> */}
    </>
  );
};
