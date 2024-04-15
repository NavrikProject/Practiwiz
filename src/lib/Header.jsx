import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        // Change 100 to whatever scroll position you prefer
        header.classList.add("headeractive");
      } else {
        header.classList.remove("headeractive");
      }
    });
  });

  const navToggle = document.querySelector("#nav-toggler");

  document.addEventListener("DOMContentLoaded", function () {
    const navExpand = document.querySelector("#navbarSupportedContent");

    navToggle.addEventListener("click", function () {
      if (navExpand.classList.contains("navbarmenucollapse")) {
        navExpand.classList.remove("navbarmenucollapse");
      } else {
        navExpand.classList.add("navbarmenucollapse");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const barIcon = document.querySelector("#bar-icon");
    const closeIcon = document.querySelector("#close-mark-icon");
    const navToggle = document.querySelector("#nav-toggle");

    navToggle.addEventListener("click", function () {
      if (barIcon.classList.contains("navbar-toggler-icon")) {
        barIcon.classList.remove("navbar-toggler-icon");
        closeIcon.classList.remove("d-none");
      } else {
        barIcon.classList.add("navbar-toggler-icon");
        closeIcon.classList.add("d-none");
      }
    });
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"
        integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <header>
        <div className="header-wrapper">
          <div className="container-fluid">
            <nav className="navbar fixed-top mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src="images/logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  id="nav-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span id="bar-icon" className="navbar-toggler-icon" />
                  <i
                    id="close-mark-icon"
                    className="fa-solid fa-xmark d-none"
                  />
                </button>
                <div
                  className="navbarmenucollapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item defdweregee">
                      <a className="nav-link" href="/">
                        Training <i className="fa-solid fa-angle-down" />
                        <div className="duiehrr_dropdwn">
                          <ul className="edfrerteee_list bg-white p-3 d-none">
                            <li>IT TRAINING</li>
                            <li>BUSINESS TRAINING</li>
                          </ul>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Mentor Club
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/findjob">
                        Jobs
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex iugeuirrr align-items-center">
                    <div className="udgehrr pe-3">
                      <div className="cdsfsdvnghff position-relative">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Discover Your Mentor..."
                        />
                        <i className="fa-solid fa-magnifying-glass position-absolute" />
                      </div>
                    </div>
                    <div className="udgehrr">
                      <button
                        className="btn fvjhdf_btn btn-main mt-0"
                        onClick={handleLoginClick}
                      >
                        LogIn
                      </button>
                    </div>
                    <div className="udgehrr ps-3">
                      <button
                        className="btn btn-main mt-0"
                        onClick={handleClick}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
