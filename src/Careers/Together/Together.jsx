import React from "react";
import "./together.css";
import { Link } from "react-router-dom";

export default function Together() {
  return (
    <>
      <div className="together-section position-relative mt-5">
        <div className="bg-vedio">
          <video autoPlay muted loop>
            <source src="./assets/Careers/bg-vedio.mp4" type="video/mp4" />
          </video>

          <div className="vedio-text">
            <h1 className="text-center mb-3">
              Let’s Work <span>Together!</span>
            </h1>
            <p className="text-center mb-3">
              Ready to elevate your agency? Contact us today to discover how
              webpristine can be your perfect white label partner. Let's create
              something amazing together!
            </p>
            <div className="vedio-up-btn text-center">
              <Link to="/contactpage">Let’s Talk <i class="fa-solid fa-arrow-right ms-1"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
