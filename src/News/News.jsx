import React from "react";
import "./News.css";
export const News = () => {
  return (
    <>
      <div className="news-section position-relative">
        <div className="news-bg-img">
          <img src="./assets/News/bg-img.jpg" />
        </div>

        <div className="container">
          <div className="tittle mb-5">
            <h1 className="text-center">The <span>News's</span> Resources</h1>
            <h6 className="text-center">
              Latest updates and announcements about us!
            </h6>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6 col-6 main-col1">
              <div className="news-logo text-center">
                <img src="./assets/News/img1.png" alt="" />
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-6 main-col2">
              <div className="news-logo text-center">
                <img src="./assets/News/img2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6 main-col3">
              <div className="news-logo text-center">
                <img src="./assets/News/img3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6 main-col4">
              <div className="news-logo text-center">
                <img src="./assets/News/img4.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6 main-col5">
              <div className="news-logo text-center">
                <img src="./assets/News/img5.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6 main-col6">
              <div className="news-logo text-center">
                <img src="./assets/News/img6.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6 main-col7">
              <div className="news-logo text-center">
                <img src="./assets/News/img7.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6 main-col8">
              <div className="news-logo text-center">
                <img src="./assets/News/img8.png" alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 main-col9">
              <div className="news-logo text-center">
                <div className="new-btn">
                  <a href="">
                    Let’s Connect <i class="fa-solid fa-arrow-right ms-2"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left-icon-img">
          <img src="./assets/News/icon-bg1.png" alt="" />
        </div>

        <div className="right-icon-img">
          <img src="./assets/News/icon-bg2.png" alt="" />
        </div>
      </div>
    </>
  );
};
