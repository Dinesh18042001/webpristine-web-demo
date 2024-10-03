import React from "react";
import "./digitalservices.css";
export default function DigitalServices() {
  return (
    <div className="digitalservices-section mt-5">
      <div className="container">
        <div className="digitalservices-tittle">
          <div className="row">
            <div className="col-lg-6">
              <h1>
                Services for Holistic <span>Digital Marketing</span>
              </h1>
            </div>
            <div className="col-lg-6">
              <p>
                We offer comprehensive, innovative, and customized digital
                marketing solutions to businesses across different sectors. Our
                digital marketers offer scalable solutions as per the client's
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="digitalservices-card mt-5">
          <div className="row">
            <div className="col-lg-6 mb-4 d-flex justify-content-center">
              <div className="main-card1 position-relative ">
                <h6>SEO (Search Engine Optimization):</h6>
                <p>
                Enhance your website's visibility and ranking on search engines by optimizing content with relevant keywords, improving site architecture, and building quality backlinks. Effective SEO strategies lead to increased organic traffic and improved user experience.
                </p>
                <div className="main-card1-img">
                  <img src="./assets/DigitalMarketing/cord-icon1.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 d-flex justify-content-center">
              <div className="main-card2 position-relative">
                <h6>Content Marketing:</h6>
                <p>
                 Create and share valuable, relevant content—such as blogs, videos, and infographics—that resonates with your audience. This builds brand authority, engages potential customers, and drives conversions by providing solutions to their problems.
                </p>

                <div className="main-card2-img">
                  <img src="./assets/DigitalMarketing/cord-icon2.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 d-flex justify-content-center">
              <div className="main-card3 position-relative">
                <h6>Social Media Management:</h6>
                <p>
                Strategically manage your brand’s presence across social media platforms, creating engaging content and fostering community interaction. This helps build brand awareness, drive traffic to your website, and establish lasting relationships with customers.
                </p>

                <div className="main-card3-img">
                  <img src="./assets/DigitalMarketing/cord-icon3.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 d-flex justify-content-center">
              <div className="main-card4 position-relative">
                <h6>Email Marketing:</h6>
                <p>
                Develop targeted email campaigns that deliver personalized content and offers to your subscribers. This nurtures leads, keeps your audience informed, and encourages repeat business, ultimately boosting customer loyalty and sales.
                </p>

                <div className="main-card4-img">
                  <img src="./assets/DigitalMarketing/cord-icon4.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 d-flex justify-content-center">
              <div className="main-card5 position-relative">
                <h6>PPC Advertising:</h6>
                <p>
                Implement data-driven pay-per-click advertising campaigns to drive immediate traffic to your site. By targeting specific demographics and using compelling ad copy, PPC helps generate leads and conversions quickly while optimizing your advertising spend.
                </p>

                <div className="main-card5-img">
                  <img src="./assets/DigitalMarketing/cord-icon5.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 d-flex justify-content-center">
              <div className="main-card6 position-relative">
                <h6>Analytics & Reporting:</h6>
                <p>
                Utilize analytics tools to track and measure the performance of all marketing efforts. This data provides valuable insights into customer behavior and campaign effectiveness, enabling you to make informed decisions for continuous improvement and strategic planning.
                </p>

                <div className="main-card6-img">
                  <img src="./assets/DigitalMarketing/cord-icon6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
