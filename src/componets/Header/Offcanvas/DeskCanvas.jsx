import React from 'react'
import "./deskCanvas.css"
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function DeskCanvas(props) {
  return (
 
    <Offcanvas show={props.show} onHide={props.handleClose} placement={"end"}>
       <Offcanvas.Body>
        <div className="offcanvas-header justify-content-between">
          
          <h5 className="offcanvas-title" id="searchOffcanvasLabel">
            Man Panier 
          </h5>
      
          <div className="d-flex align-items-center">
            <p className="mb-0">Fermer</p>
          <button onClick={props.handleClose}
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
      </Offcanvas.Body>
    </Offcanvas>
 
  )
}
