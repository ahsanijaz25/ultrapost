import React from 'react'
import "./Reductions.css"

export default function Reductions() {
  return (
    <div className="megaNav ">
      <div className="container pops">
        <div className="d-flex justify-content-between">
          <div className="p-3 pc-config">
            <h6 className="bold mt-3">Allez à Réductions </h6>
            <h6 className="bold mt-3"> Mega Deals </h6>
            <p className='mt-3'>  RTX-Deals</p>
            <p>  AMD-Deals</p>
            <p>AMD Ryzen 7000 & 9000</p>
          

            <h6 className="bold">French Days</h6>


            <h6 className="bold mt-4"> Rentrée scolaire </h6>
            <h6 className="mt-4 bold">See all Réductions</h6>
            
          </div>

          <div className="d-flex flex-column">
            <img src="../assets/deck.png" alt="" className="w-100" />
            <div className="bg-black p-3 text-white">
              {/* <h1 className="green">Configure</h1> */}
              <h2>Decourve les <span className='green'>offres speciales</span></h2>
              <h6 className="mt-3">Mega Deals, bundles de jeux & plus encore</h6>
              <button className="config-btn">
                  ECONOMISE DES MAINTENANT
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
