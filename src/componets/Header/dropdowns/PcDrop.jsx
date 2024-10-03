import React from "react";
import "./PcDrop.css";

export default function PcDrop() {
  return (
    <div className="megaNav ">
      <div className="container pops">
        <div className="d-flex justify-content-between">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-5">
                <div className="p-3">
                  <h6 className="bold">PC Gamer Intel</h6>
                  <p>Intel Core i5</p>
                  <p>Intel Core i9</p>
                  <p>Intel Core i7</p>

                  <h6 className="bold">PC Gamer Intel</h6>
                  <p>Intel Core i5</p>
                  <p>Intel Core i9</p>
                  <p>Intel Core i7</p>

                  <h6 className="bold mt-4">PC gamer complet</h6>
                  <h6 className="mt-4 bold">PC Gamer fixe</h6>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="p-3 ps-pc border-left ">
                  <h6 className="bold">PC Premium</h6>
                  <h6 className=" mt-4 bold">PC gamer pour budget</h6>
                  <p className="mt-4">PC Gamer à 800 €</p>
                  <p>PC Gamer à 1000€</p>
                  <p>PC Gamer à 1500€</p>
                  <p>PC Gamer à 2000€</p>

                  <h6 className="bold">Windows 11</h6>
                  <p>Windows 11 Gaming</p>
                  <p>Xbox Gaming</p>

                  <h6 className="bold">See all PC Gamer</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="p-3 border-left">
                  <img src="../assets/card1.png" alt="" className="mb-3" />
                  <h5>PC Premium gaming AMD Ryzen 9 7900X Super Nova</h5>
                  <ul class="plus-sign-list mt-3">
                    <li>Windows 11 Home</li>
                    <li>AMD Ryzen 9 7900X, 12x 4,70 GHz</li>
                    <li>
                      NVIDIA GeForce <strong>RTX 4080 Super</strong>16 Go
                    </li>
                    <li>32Go Kingston 6000Mhz DDR5 RGB RAM</li>
                    <li>Gigabyte X670 Aorus Elite</li>
                    <li>1To Crucial T700 M.2 NVMe SSD</li>
                  </ul>
                  <div className="d-flex card-font align-items-center green">
                    <i class="fa-regular fa-clock"></i>
                    <span className="ps-1 ">
                      Délai de livraison 4-6 jours ouvrés
                    </span>
                  </div>

                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <p className="m-0 old-price">3 074,00 €</p>
                      <span className="new-price">2 999,00 €</span>
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

              <div className="col-lg-6">
                <div className="p-3 border-left">
                  <img src="../assets/card1.png" alt="" className="mb-3" />
                  <h5>PC Premium gaming AMD Ryzen 9 7900X Super Nova</h5>
                  <ul class="plus-sign-list mt-3">
                    <li>Windows 11 Home</li>
                    <li>AMD Ryzen 9 7900X, 12x 4,70 GHz</li>
                    <li>
                      NVIDIA GeForce <strong>RTX 4080 Super</strong>16 Go
                    </li>
                    <li>32Go Kingston 6000Mhz DDR5 RGB RAM</li>
                    <li>Gigabyte X670 Aorus Elite</li>
                    <li>1To Crucial T700 M.2 NVMe SSD</li>
                  </ul>
                  <div className="d-flex card-font align-items-center green">
                    <i class="fa-regular fa-clock"></i>
                    <span className="ps-1 ">
                      Délai de livraison 4-6 jours ouvrés
                    </span>
                  </div>

                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <p className="m-0 old-price">3 074,00 €</p>
                      <span className="new-price">2 999,00 €</span>
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
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
