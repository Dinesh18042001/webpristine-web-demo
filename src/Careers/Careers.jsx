import React from "react";
import "./careers.css";
import { Companies } from "../Company-logo/Companies";
import Developers from "./Developers/Developers";
import Hire from "./Hire/Hire";

export default function Careers() {
  return (
    <>
      <div className="banner-section position-relative">
        <div className="item position-relative">
          <div className="banner">
            <img src="./assets/Careers/careers-banner.png" alt="" />
          </div>
          <div className="banner-info">
            <h3 className="mb-4">HIRE</h3>
            <h1 className="mb-4">DEVELOPERS IN INDIA</h1>
            <h3>for Your Next Project</h3>
            <div className="banner-info-btn mt-5">
              <a href="#">
                <i class="fa-solid fa-arrow-right me-2"></i> Hire Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Companies />
      <Developers/>
      <Hire/>
    </>
  );
}
