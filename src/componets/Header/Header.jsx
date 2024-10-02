import React, { useState, useEffect } from "react";
import "./Header.css";
import DropdownNavItem from "./DropdownNavItem";
import Mobileheader from "./mobileheader";
import PcDrop from "./dropdowns/PcDrop";
import ConfiguraterPc from "./dropdowns/ConfiguraterPc";
import Ordinatur from "./dropdowns/Ordinatur";
import PCeditiondrop from "./dropdowns/PCeditiondrop";
import Reductions from "./dropdowns/Reductions";
import DeskCanvas from "./Offcanvas/DeskCanvas";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Update state based on window width
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1023);
  };

  // Add event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  return (
    <>
      {isMobile ? (
        /* Mobile Header */
        <Mobileheader />
      ) : (
        /* Desktop Header */
        <div className="top-header">
          <div className="container">
            <div className="d-flex justify-content-between text-white">
              <div className="d-flex align-items-center top-font">
                <i className="fa-solid fa-headphones"></i>
                <div className="px-2">ULTRAPORT HOTLINE</div>
                <div className="number">000000000</div>
                <i className="fa-solid fa-circle-exclamation ps-2"></i>
              </div>

              <div className="d-flex align-items-center top-font">
                <span className="gray">PAYS</span>
                <div className="ps-3">
                  <div className="dropdown ">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="../assets/flag-fr-fr.svg" alt="" /> FRANCE
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark w-100 custom-dropdown ">
                      <li>
                        <a className="dropdown-item active" href="#">
                          Italia
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Netherland
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Espana
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          United kingdom
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container ">
              {/* Logo */}
              <Link className="navbar-brand" to={"/"}>
                <img
                  src="../assets/ultrport.png"
                  alt="Logo"
                  className="navbar-logo"
                />
              </Link>
              {/* Hamburger Icon for mobile */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Navbar links and icons */}
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarNav"
              >
                {/* Links (centered in desktop) */}
                <ul className="navbar-nav mx-auto">
                  <DropdownNavItem
                    linkText="PC Gamer"
                    dropdownContent={<div>Your PC Gamer content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Configurateur PC"
                    dropdownContent={<div>Your Configurator content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Ordinateur de bureau"
                    dropdownContent={<div>Your Desktop content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="PC Editions spéciales"
                    dropdownContent={
                      <div>Your Special Editions content here!</div>
                    }
                  />
                  <DropdownNavItem
                    linkText="Accessoires PC"
                    dropdownContent={<div>Your Accessories content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Réductions"
                    dropdownContent={<div>Your Discounts content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Promo"
                    dropdownContent={<div>Your Promo content here!</div>}
                  />
                </ul>

                {/* Icons with slanted lines */}
                <div className="navbar-icons d-flex">
                  <a href="#" className="nav-icon">
                    <i className="fas fa-search" />
                  </a>
                  <a href="#" className="nav-icon">
                    <i className="fas fa-user" />
                  </a>
                  <a onClick={handleShow}
                    className="nav-icon"
                    // data-bs-toggle="offcanvas"
                    // data-bs-target="#searchOffcanvas"
                    // aria-controls="searchOffcanvas"
                  >
                    <i className="fas fa-shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <DeskCanvas show={show} handleClose={handleClose}/>
        </div>
      )}

      {/* ALL NAV BAR DROP DOWNS */}
 
      {/* <PcDrop/> */}
      {/* <ConfiguraterPc /> */}
      {/* <Ordinatur/> */}
      {/* <PCeditiondrop/> */}
      {/* <Reductions/> */}
    </>
  );
}
