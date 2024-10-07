import React, { useState } from "react";
import "./PcProductCarsouel.css";
import CardHome from "../Card/CardHome"; // Import the Card component

const productData = [
  {
    id: 1,
    imgURL: "card-1-gray.jpg",
    hoverImgURL: "card_1_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    title: "PC Gamer AMD Ryzen 5 Slayer",
    rating: 4,
    features: [
      "sans système dexploitation",
      "NVIDIA GeForce RTX 3050  6GB",
      "MSI A520M-A Pro",
    ],
    deliveryTime: "Délai de livraison 4-6  jours ouvrés",
    oldPrice: "€120",
    newPrice: "€100",
  },

  // Add more products as needed
];

export default function PcProductCarsouel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3; // Show 3 cards per slide

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex < Math.ceil(productData.length / itemsPerSlide) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
        <div className="bg-Product-carsouel">

      {/* small strip */}
      <div className="d-flex justify-content-center">
        <div className=" mini-border"></div>
      </div>
      {/* small strip ends*/}

      <div className="container pops py-5">
        <h2 className="text-center bold">
          <span className="green">PC Gaming</span>  Nouveautés
        </h2>
        <h5 className="mt-3 gray text-center">
        Nouveautés de Megaport: Intel de 14e génération <br />
        & AMD de 9e génération <br />
        & GeForce RTX Série 40
        </h5>
      </div>

      {/* CARSOEUL STARTS */}
      <div className="container-fluid HomeProdcutCarsouel pb-5">
        <div
          id="productCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Create groups of product cards for each slide */}
            {Array.from(
              { length: Math.ceil(productData.length / itemsPerSlide) },
              (_, slideIndex) => (
                <div
                  className={`carousel-item ${
                    slideIndex === currentIndex ? "active" : ""
                  }`}
                  key={slideIndex}
                >
                  <div className="row ">
                    {/* Pass data to the Card component for the current slide */}
                    {productData
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide
                      )
                      .map((product, index) => (
                        <div className="col-md-4" key={product.id}>
                          <CardHome productCardData={[product]} />{" "}
                          {/* Pass individual product as prop */}
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Left Control */}
          <button
            className={`carousel-control-prev ${
              currentIndex === 0 ? "" : "show"
            }`}
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Right Control */}
          <button
            className={`carousel-control-next ${
              currentIndex === Math.ceil(productData.length / itemsPerSlide) - 1
                ? ""
                : "show"
            }`}
            type="button"
            onClick={handleNext}
            disabled={
              currentIndex === Math.ceil(productData.length / itemsPerSlide) - 1
            }
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      </div>
    </>
  );
}
