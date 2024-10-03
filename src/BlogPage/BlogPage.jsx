import React from "react";
import "./blogpage.css";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <>
      <div className="blogs-section pb-5 mt-5">

        <div className="container">

        <div className="blogs-section-tittle">
          <h1 className="text-center mb-5">
            We enable <span>organizations</span> from startups to <span>large enterprises</span> to make
            their work <span>environment</span> more efficient.
          </h1>
        </div>

          <div className="row align-items-center mb-4">
            <div className="col-lg-8">
              <div className="page-blog-info">
                <h1 className="mb-4">
                  <span>Mobile App </span>Development
                </h1>
                <h5 className="mb-4">
                  Creating Beautiful User Interfaces with Flutter
                </h5>
                <p className="mb-4">
                  Flutter by Google is an open-source framework for building
                  multi-platform applications from one codebase. You can use one
                  programming language to code in Flutter, which is Dart.
                  Flutter is simple and efficient to use for its consumers, and
                  its properties and functions are easy to understand.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <a href="#">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              className="col-lg-4 text-center"
            >
              <div className="blog-img">
                <img
                  src="./assets/blogs/page-blog1.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </motion.div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-lg-4 order-lg-1 order-2 text-center">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.3 }}
                className="blog-img"
              >
                <img
                  src="./assets/blogs/page-blog2.png"
                  alt=""
                  className="img-fluid"
                />
              </motion.div>
            </div>

            <div className="col-lg-8 order-lg-2 order-1">
              <div className="page-blog-info">
                <h1 className="mb-4">
                  <span>Digital</span> Marketing
                </h1>
                <h5 className="mb-4">
                  Not sure how to find the right SEO company?
                </h5>
                <p className="mb-4">
                  Finding a trustworthy SEO company is a daunting task. There
                  are so many SEO agencies out there and all claim to be the
                  best. But by keeping a few pointers in mind you can choose a
                  great SEO company.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <a href="#">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-lg-8">
              <div className="page-blog-info">
                <h1 className="mb-4">
                  <span>Website</span> development
                </h1>
                <h5 className="mb-4">
                  Creating Beautiful User Interfaces with Flutter
                </h5>
                <p className="mb-4">
                  Flutter by Google is an open-source framework for building
                  multi-platform applications from one codebase. You can use one
                  programming language to code in Flutter, which is Dart.
                  Flutter is simple and efficient to use for its consumers, and
                  its properties and functions are easy to understand.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5  align-items-center mt-4">
                <div className="blog-btn">
                  <a href="#">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              className="col-lg-4 text-center"
            >
              <div className="blog-img">
                <img src="./assets/blogs/page-blog3.png" alt="" />
              </div>
            </motion.div>
          </div>

          <div className="row align-items-center mb-4">
            <div className="col-lg-4 order-lg-1 order-2 text-center">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.3 }}
                className="blog-img"
              >
                <img
                  src="./assets/blogs/page-blog4.png"
                  alt=""
                  className="img-fluid"
                />
              </motion.div>
            </div>

            <div className="col-lg-8 order-lg-2 order-1">
              <div className="page-blog-info">
                <h1 className="mb-4">
                  <span>Digital</span> Marketing
                </h1>
                <h5 className="mb-4">
                  Not sure how to find the right SEO company?
                </h5>
                <p className="mb-4">
                  Finding a trustworthy SEO company is a daunting task. There
                  are so many SEO agencies out there and all claim to be the
                  best. But by keeping a few pointers in mind you can choose a
                  great SEO company.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <a href="#">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
