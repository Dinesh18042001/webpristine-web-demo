import React from "react";
import "./careers.css";
import { Companies } from "../Company-logo/Companies";
import Developers from "./Developers/Developers";
import Hire from "./Hire/Hire";
import Engagement from "./Engagement/Engagement";
import Together from "./Together/Together";
import CareersFaq from "./CareersFaq/CareersFaq";



export default function Careers() {
  return (
    <>
        <div className="banner-section position-relative mb-5">
      <div className="container">
        <div className="banner-info">
          <h2 className="mb-4">HIRE</h2>
          <h1 className="mb-4">DEVELOPERS IN INDIA</h1>
          <h2>for Your Next Project</h2>
          <div className="banner-info-btn mt-5">
            <a href="#">
              <i class="fa-solid fa-arrow-right me-2"></i> Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </div>
      <Companies />
      <Developers/>
      <Hire/>
      <Engagement/>
      <Together/>
      <CareersFaq/>
    </>
  );
}
