import React from "react";
import './Ordinatur.css'

export default function Ordinatur() {
  return (
    <div className="container pops">
      <div className="d-flex justify-content-between">
        <div className="p-3 mr pc-config " style={{width:"40%"}}>
          <h6 className="bold mt-3"> PC Bureautique</h6>
          <p> Office PC Intel </p>
          <p>Office PC AMD</p>
         

          <h6 className="bold">PC à intelligence artificielle pour le futur</h6>
          <h6 className="bold"> PC de streaming</h6>
          <p>PC de streaming Intel </p>
          <p>AMD Ryzen 7000 & 9000</p>
          <p>PC de streaming AMD</p>

          <h6 className="bold mt-4"> Workstations</h6>
          <h6 className="mt-4 bold">Mini PC</h6>
          <h6 className="mt-4 bold">En sécurité avec Windows 11</h6>
          <h6 className="mt-4 bold">En sécurité avec Windows 11</h6>
        </div>

        {/* <div>123</div> */}

        <div className="row ">
          <div className="col-lg-4 mt-4">
            <div className="p-3 border-left">
              <img src="../assets/card1.png" alt="" className="mb-3 w-100" />
              <h7>PC de bureau Intel i5 Officer</h7>
              <ul class="plus-sign-list mt-3">
                <li>Windows 11 Home</li>
                <li>Intel Core i5-12400F, 6x 2,50 GHz</li>
                <li>
                NVIDIA GeForce GT1030 2Go
                </li>
                <li>16 Go DDR4 3200 MHz RAM</li>
                <li>MSI Pro H610M-G DDR4</li>
                <li>500 Go SSD</li>
              </ul>
              <div className="d-flex card-font align-items-center green">
                <i class="fa-regular fa-clock"></i>
                <span className="ps-1 ">
                  Délai de livraison 4-6 jours ouvrés
                </span>
              </div>

              <div className="d-flex mt-3 justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  {/* <p className="m-0 old-price">3 074,00 €</p> */}
                  <span className="new-price">729,00 €</span>
                </div>
                <div>
                  <button className="cart-btn">
                    <i className="fas fa-shopping-cart" />
                  </button>
                  <button className="plus-btn">plus</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4">
            <div className="p-3 border-left">
              <img src="../assets/card1.png" alt="" className="mb-3 w-100" />
              <h7>PC de bureau Intel i5 Officer</h7>
              <ul class="plus-sign-list mt-3">
                <li>Windows 11 Home</li>
                <li>Intel Core i5-12400F, 6x 2,50 GHz</li>
                <li>
                NVIDIA GeForce GT1030 2Go
                </li>
                <li>16 Go DDR4 3200 MHz RAM</li>
                <li>MSI Pro H610M-G DDR4</li>
                <li>500 Go SSD</li>
              </ul>
              <div className="d-flex card-font align-items-center green">
                <i class="fa-regular fa-clock"></i>
                <span className="ps-1 ">
                  Délai de livraison 4-6 jours ouvrés
                </span>
              </div>

              <div className="d-flex mt-3 justify-content-between align-items-center">
                <div className="d-flex  flex-column">
     
                  <span className="new-price ">729,00 €</span>
                </div>
                <div>
                  <button className="cart-btn">
                    <i className="fas fa-shopping-cart" />
                  </button>
                  <button className="plus-btn">plus</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 h-100 bg-black">
          <div className="d-flex flex-column">
          <img src="../assets/deck.png" alt="" className="w-100" />
          <div className="bg-black p-3 text-white">
            {/* <h1 className="green">Configure</h1> */}
            <h2>Passe en live avec ton <span className="green">PC streamer</span></h2>
            <h6 className="mt-3">#FaisTonTruc</h6>
            <button className="ordinatur-btn">
                DECOUVRIR MAINTENANT
            </button>

          </div>
        </div>
          </div>


        </div>
      </div>
    </div>
  );
}
