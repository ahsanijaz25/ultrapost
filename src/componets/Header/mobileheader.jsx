import React from "react";
import "./mobileheader.css";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  return (
    <>
      <div className="mobile-top d-flex text-white align-items-center font-mobile">
        <i className="fa-solid fa-headphones"></i>
        <div className="px-2">ULTRAPORT HOTLINE</div>
        <div className="number">000000000</div>
        <i className="fa-solid fa-circle-exclamation ps-2"></i>
      </div>

      <div className="mobile-bottom-header text-white d-flex justify-content-between">
      <Link to={"/"}>
        <img src="../assets/ultrport.png" alt="" style={{ width: "9.2rem" }} />
      </Link>
        <div className="d-flex align-items-center">
          <div className="navbar-icons d-flex">
            <a href="#" className="nav-icon">
              <i className="fas fa-user" />
            </a>
            <a href="#" className="nav-icon">
              <i className="fas fa-shopping-cart" />
            </a>

            {/* Trigger for the right offcanvas */}
            <Link
              to="/"
              className="nav-icon"
              data-bs-toggle="offcanvas"
              data-bs-target="#searchOffcanvas"
              aria-controls="searchOffcanvas"
            >
              <i className="fas fa-search" />
            </Link>
          </div>
        </div>
      </div>

      {/* Offcanvas for Search */}
      {/* <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="searchOffcanvas"
        aria-labelledby="searchOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="searchOffcanvasLabel">
            Search
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
    
          <div className="input-group mb-3 p-3 border">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>

          <div className="mt-3 canvas-font">
            <div className="d-flex justify-content-between p-canvas">
              <div>PC Gammer</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Configurateur PC</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Ordinateur de bureau</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>PC Editions speciales</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Accessories PC</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Reductions</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">Promo</div>

            <div className="d-flex justify-content-between p-canvas bg-black h-100 text-white">
              <div>Reductions</div>
              <div>&#10148;</div>
            </div>
            <div className=" bg-black"></div>

          </div>
        </div>
      </div> */}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="searchOffcanvas"
        aria-labelledby="searchOffcanvasLabel"
      >
        <div className="offcanvas-header justify-content-between">
          
          <h5 className="offcanvas-title" id="searchOffcanvasLabel">
            Man Panier 
          </h5>
       
          <div className="d-flex align-items-center">
            <p className="mb-0">Fermer</p>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          </div>
        </div>
        
        <div className="offcanvas-body p-0">
          <div className="border-desk">
          </div>
          <strong>
          <div className="d-flex justify-content-center mt-3  h-50">Votre panier est vide.</div>
          </strong>

          <div className="bg-deskConvas h-50"></div>

            
 
          {/* <div className="input-group mb-3 p-3 border">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div> */}

  
          {/* <div className="mt-3 canvas-font">
            <div className="d-flex justify-content-between p-canvas">
              <div>PC Gammer</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Configurateur PC</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Ordinateur de bureau</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>PC Editions speciales</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Accessories PC</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">
              <div>Reductions</div>
              <div>&#10148;</div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between p-canvas">Promo</div>

            <div className="d-flex justify-content-between p-canvas bg-black h-100 text-white">
              <div>Reductions</div>
              <div>&#10148;</div>
            </div>
            

          </div> */}
        </div>
      </div>

      
    </>
  );
}
