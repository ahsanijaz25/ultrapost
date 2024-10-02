import React from "react";
import "./ConfiguraterPC.css";

export default function ConfiguraterPc() {
  return (
    <div className="container pops">
      <div className="d-flex justify-content-between">
        <div className="p-3 pc-config">
          <h6 className="bold mt-3">Configurateur PC</h6>
          <p>AMD Ryzen 4000 & 5000 </p>
          <p>AMD Ryzen 7000 & 9000</p>
          <p>Intel Core 12., 13. & 14. Gen</p>

          <h6 className="bold">Configurer un PC Gamer</h6>
          <p>AMD Ryzen 4000 & 5000 </p>
          <p>AMD Ryzen 7000 & 9000</p>
          <p>Intel Core 12., 13. & 14. Gen</p>

          <h6 className="bold mt-4"> Configurer un PC Multimedia </h6>
          <h6 className="mt-4 bold">Configurer un PC de bureau</h6>
          <h6 className="mt-4 bold">See all Configurateur PC</h6>
        </div>

        <div className="d-flex flex-column">
          <img src="../assets/deck.png" alt="" className="w-100" />
          <div className="bg-black p-3 text-white">
            <h1 className="green">Configure</h1>
            <h2>le PC de tes Reves</h2>
            <h6 className="mt-3">#FaisTonTruc</h6>
            <button className="config-btn">
                LANCE-TO!
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
