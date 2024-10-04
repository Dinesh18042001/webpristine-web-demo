import React from "react";
import "./blogpage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <>
      <div className="blogs-section pb-5 mt-5">
        <div className="container">
          <div className="blogs-section-tittle">
            <h1 className="text-center mb-5">
              We enable <span>organizations</span> from startups to{" "}
              <span>large enterprises</span> to make their work{" "}
              <span>environment</span> more efficient.
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
                  In today’s digital landscape, developing mobile apps that
                  offer great user experiences is crucial to success. One of the
                  frameworks that has been gaining immense popularity is Flutter
                  by Google. Flutter is an open-source framework that allows
                  developers to create multi-platform applications using a
                  single codebase, making it both efficient and cost-effective.
                  The magic of Flutter lies not only in its ability to produce
                  apps for iOS, Android, and other platforms, but also in how it
                  facilitates the creation of beautiful, smooth, and interactive
                  user interfaces. This blog will explore how Flutter can help
                  you build stunning user interfaces that provide an engaging
                  user experience.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/mobileappblog">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
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
                  Not Sure How to Find the Right SEO Company? Here’s What You
                  Need to Know
                </h5>
                <p className="mb-4">
                  Finding a trustworthy SEO company can be challenging,
                  especially with countless agencies promising top rankings and
                  instant results. The success of your digital marketing
                  strategy largely depends on partnering with the right SEO
                  experts. In this blog, we’ll help you navigate the crowded
                  landscape and share tips for choosing the best SEO company to
                  meet your business needs.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/digitalblog">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
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
                  Website Development: Building a Strong Online Presence
                </h5>
                <p className="mb-4">
                  In today’s digital age, having a well-designed website is
                  crucial for any business aiming to establish a strong online
                  presence. Website development is not just about creating an
                  appealing website; it’s about building a platform that serves
                  as the foundation of your digital marketing efforts,
                  effectively communicating your brand’s message to the
                  audience, and providing a seamless user experience. Let’s
                  explore the importance of website development, its benefits,
                  and how it can impact your business.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5  align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/webdevblog">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
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
                  <span>Virtual</span> Assistant
                </h1>
                <h5 className="mb-4">
                  Why You Should Hire a Virtual Assistant to Streamline Your
                  Business
                </h5>
                <p className="mb-4">
                  In today’s fast-paced digital world, businesses are constantly
                  evolving, and with this evolution comes the need for more
                  efficient and effective work processes. One of the most
                  significant changes we’ve seen in recent years is the growing
                  popularity of virtual assistants (VAs). Virtual assistants are
                  remote professionals who can manage a variety of tasks, from
                  administrative duties to digital marketing, allowing business
                  owners to focus on growth and core operations. If you’re
                  looking for ways to streamline your business, hiring a virtual
                  assistant may be the perfect solution. In this blog, we’ll
                  explore the benefits of hiring a virtual assistant and how
                  they can make your business more efficient.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/virtualassblog">
                    View More <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
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
