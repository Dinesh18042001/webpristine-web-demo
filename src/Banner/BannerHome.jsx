import React from "react";
import "./banner.css"
import { Companies } from "../Company-logo/Companies";
import { Idea } from "../idea/Idea";
import { News } from "../News/News";
import { Services } from "../Services/Services";
import { Certifications } from "../Certifications/Certifications";
import { Case } from "../Case/Case";
import VisionIndustries from "../VisionIndustries/VisionIndustries";
import Clients from "../Clients/Clients";
import Blogs from "../Blogs/Blogs";
import { motion } from "framer-motion"


export const BannerHome = () => {
  return (
    <>
      <div className="banner-section position-relative">
       
          <div className="item position-relative">

            <div className="banner">
              <img src="./assets/images/banner2.jpg" alt="" />
            </div>

            <motion.div
            initial={{x:-200}}
            whileInView={{x:0}}
            transition={{duration:1.3}}
             className="banner-info">
              <h2 className="mb-4">We are experts at providing</h2>
              <h1 className="mb-4">Software Solutions</h1>
              <h2>That Enhance Your Company</h2>
              <div className="banner-info-btn mt-5">
              <a href="#"><i class="fa-solid fa-arrow-right me-2"></i> Let’s Talk</a>
              </div>
            </motion.div>

          </div>
       
      </div>
      {/* <Companies/> */}
      <Idea/>
      <News/>
      <Services/>
      {/* <Certifications/> */}
      <Case/>
      <VisionIndustries/>
      <Clients/>
      <Blogs/>
      





    </>
  );
};
