
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navtwo.css";

export default function NavTwo() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  // useEffect(() => {
  //   const dropdown = document.querySelector(".drop_down");
  //   const dropdownTrigger = document.querySelector(".nav-item.dropdownf");

  //   const showDropdown = () => {
  //     dropdown.style.display = "block";
  //     requestAnimationFrame(() => {
  //       dropdown.style.opacity = "1";
  //     });
  //   };

  //   const hideDropdown = () => {
  //     dropdown.style.opacity = "0";
  //     setTimeout(() => {
  //       dropdown.style.display = "none";
  //     }, 300);
  //   };

  //   dropdownTrigger.addEventListener("mouseenter", showDropdown);
  //   dropdownTrigger.addEventListener("mouseleave", hideDropdown);

  //   dropdown.style.display = "none";

  //   return () => {
  //     dropdownTrigger.removeEventListener("mouseenter", showDropdown);
  //     dropdownTrigger.removeEventListener("mouseleave", hideDropdown);
  //   };
  // }, []);



  useEffect(() => {
    const dropdown = document.querySelector(".drop_down");
    const dropdownTrigger = document.querySelector(".nav-item.dropdownf");
  
    let hideTimeout;
  
    const showDropdown = () => {
      clearTimeout(hideTimeout); 
      dropdown.style.display = "block";
      requestAnimationFrame(() => {
        dropdown.style.opacity = "1";
      });
    };
  
    const hideDropdown = () => {
      hideTimeout = setTimeout(() => {
        dropdown.style.opacity = "0";
        setTimeout(() => {
          dropdown.style.display = "none";
        }, 300); 
      }, 500); 
    };
  
    dropdownTrigger.addEventListener("mouseenter", showDropdown);
    dropdown.addEventListener("mouseenter", showDropdown);

    dropdownTrigger.addEventListener("mouseleave", hideDropdown);
    dropdown.addEventListener("mouseleave", hideDropdown);
  
    dropdown.style.display = "none";
  
    return () => {
      clearTimeout(hideTimeout); 
      dropdownTrigger.removeEventListener("mouseenter", showDropdown);
      dropdownTrigger.removeEventListener("mouseleave", hideDropdown);
      dropdown.removeEventListener("mouseenter", showDropdown);
      dropdown.removeEventListener("mouseleave", hideDropdown);
    };
  }, []);
  
  
  
  return (
    <div className="nav-two-section">
      <nav className="navbar navbar-expand-lg position-relative">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./assets/images/logo2.png" alt="Logo" />
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
                  fill="#000"
                />
              </g>
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item ms-3">
                <Link className="nav-link active" to="/">
                  Company
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link active" to="/assistant">
                  Assistant
                </Link>
              </li>

              <li className="nav-item dropdownf ms-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="mobileServicesDropdown"
                  role="button"
                >
                  Services <i className="fa-solid fa-plus ms-1"></i>
                </a>
                <ul className="drop_down">
                  <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <div className="col text-center">
                      <Link to="/assistant">
                        <div className="header-img position-relative">
                          <img
                            src="./assets/header/img1.png"
                            alt=""
                            className="img-fluid"
                          />
                          <div className="header-img-tittle">
                            <h6>Virtual Assistant</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col text-center">
                      <Link to="/webdevelopment">
                        <div className="header-img position-relative">
                          <img
                            src="./assets/header/img2.png"
                            alt=""
                            className="img-fluid"
                          />
                          <div className="header-img-tittle">
                            <h6>Web Development</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col text-center">
                      <Link to="/appdevelopment">
                        <div className="header-img position-relative">
                          <img
                            src="./assets/header/img3.png"
                            alt=""
                            className="img-fluid"
                          />
                          <div className="header-img-tittle">
                            <h6>App Development</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col text-center">
                      <Link to="/digitalmarketing">
                        <div className="header-img position-relative">
                          <img
                            src="./assets/header/img4.png"
                            alt=""
                            className="img-fluid"
                          />
                          <div className="header-img-tittle">
                            <h6>Digital Marketing</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col text-center">
                      <Link to="/cloudservices">
                        <div className="header-img position-relative">
                          <img
                            src="./assets/header/img5.png"
                            alt=""
                            className="img-fluid"
                          />
                          <div className="header-img-tittle">
                            <h6>Cloud Services</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </ul>
              </li>

              {/* <li className="nav-item ms-3">
                <a className="nav-link active" href="#">
                  Our work
                </a>
              </li> */}
              <li className="nav-item ms-3">
                <Link className="nav-link active" to="./careers">
                  Career
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link active" to="./blogspage">
                  Blogs
                </Link>
              </li>
            </ul>

            <div className="heater-btn ms-5">
              <Link to="./contactpage">
                Contact Us <i className="fa-solid fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <a className="navbar-brand mt-3" href="#">
            <img src="./assets/images/logo2.png" alt="" />
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item mb-2">
              <a className="nav-link active" href="#">
                Company
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link active" href="#">
                Assistant
              </a>
            </li>
            <li className="nav-item dropdown mb-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="offcanvasServicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services <i className="fa-solid fa-plus ms-1"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="offcanvasServicesDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cloud Services
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link active" href="#">
                Our work
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link active" href="#">
                Hire Experts
              </a>
            </li>
            <li className="nav-item mb-4">
              <Link className="nav-link active" href="#">
                Blogs
              </Link>
            </li>
          </ul>
          <div className="heater-btn mb-2">
            <a href="#">
              Contact Us <i className="fa-solid fa-arrow-right ms-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
