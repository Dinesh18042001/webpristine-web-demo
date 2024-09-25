import React from 'react'
import CloudSlider from './CloudSlider/CloudSlider'
import WhyCloud from './WhyCloud/WhyCloud'
import CloudIneerService from './CloudIneerService/CloudIneerService'
import HowItWorks from './HowItWorks/HowItWorks'
import FutureCloud from './FutureCloud/FutureCloud'

export default function CloudServices() {
  return (
    <>
      <div className="webdev-section mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="webdev-info">
                <h1 className="mb-4">
                  <span>Cloud Computing</span> Can Change Your Business
                </h1>
                <p className="mb-4">
                Empowering businesses to grow and innovate with secure, scalable cloud services.
                </p>
                <div className="webdev-btn mb-5">
                  <a href="#">
                  Get Started <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <div className="webdev-img position-relative">
                <img
                  src="./assets/ServicesPage/virtual.png"
                  alt="Web Development"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CloudSlider/>
      <WhyCloud/>
      <CloudIneerService/>
      <FutureCloud/>
      <HowItWorks/>
    </>
  )
}
