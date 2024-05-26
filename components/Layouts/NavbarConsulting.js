/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarConsulting = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [sidebarModal, setSidebarModal] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const toggleModal = () => {
    setSidebarModal(!sidebarModal);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuActiveClass = () => {
      const mainNavLinks = document.querySelectorAll(".navbar-nav li a");
      window.addEventListener("scroll", () => {
        const fromTop = window.scrollY;
        mainNavLinks.forEach((link) => {
          if (link.hash) {
            const section = document.querySelector(link.hash);
            if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
            ) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          }
        });
      });
    };
    menuActiveClass();
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md consulting-navbar">
        <div className="container-fluid">
          <Link href="/consulting" className="navbar-brand">
            <img
              src="/images/consulting/justlogo-innovationskraft-dark.png"
              alt="logo"
            />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => 100}
                  className="nav-link active"
                  href="#home"
                >
                  Home
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#about-us"
                >
                  About Us
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#services"
                >
                  Services
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#our-works"
                >
                  Our Works
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#pricing"
                >
                  Pricing
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#contact"
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>

            <div className="other-option">
              <i className="bx bxs-phone-call"></i>
              <a href="tel:+1-(514)-321-4477">+62 (812) 6284 5980</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarConsulting;
