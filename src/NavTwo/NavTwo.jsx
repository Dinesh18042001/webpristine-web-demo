import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./navtwo.css"
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
  return (
    <>
    <div className="nav-two-section">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./assets/images/logo2.png" alt="Logo" />
            </a>

            <button
              className="navbar-toggler"
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
                <li className="nav-item dropdown ms-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="mobileServicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services <i class="fa-solid fa-plus ms-1"></i>
                  </a>
                  <ul className="drop_down">
                    <li className="mb-3">
                    <i class="fa-solid fa-arrow-right me-2"></i><a href="#">Digital Marketing</a>
                    </li>
                    <li className="mb-3">
                    <i class="fa-solid fa-arrow-right me-2"></i><a href="#">Web Development</a>
                    </li>
                    <li className="mb-3">
                    <i class="fa-solid fa-arrow-right me-2"></i><a href="#">App Development</a>
                    </li>
                    <li className="mb-3">
                    <i class="fa-solid fa-arrow-right me-2"></i><a href="#">Cloud Services</a>
                    </li>

                    {/* <div className="row">
                      <div className="col-lg-3">
                        <div className="nav-img">

                        </div>
                      </div>
                      <div className="col-lg-3">1</div>
                      <div className="col-lg-3">1</div>
                      <div className="col-lg-3">1</div>
                    </div> */}
                  </ul>
                </li>

                <li className="nav-item ms-3">
                  <a className="nav-link active" href="#">
                    Our work
                  </a>
                </li>
                {/* <li className="nav-item ms-3">
                  <a className="nav-link active" href="#">
                    Hire Experts
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
                  Services <i class="fa-solid fa-plus ms-1"></i>
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
              <li className="nav-item mb-2">
                <a className="nav-link active" href="#">
                  Resources
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
    </>
  )
}
