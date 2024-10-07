import React, { useState } from "react";
import "./DetailedProducts.css";

// StarRating Component
function StarRating({ rating }) {
  const [hoveredStar, setHoveredStar] = useState(null); // Track the hovered star
  const totalStars = 5;

  // Function to handle mouse entering a star
  const handleMouseEnter = (index) => {
    setHoveredStar(index); // Set hovered star to the index
  };

  // Function to handle mouse leaving a star
  const handleMouseLeave = () => {
    setHoveredStar(null); // Reset hovered star
  };

  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-star ${i <= (hoveredStar || rating) ? "fas" : "far"}`} // Full star if it's within hover or rating
        style={{ color: i <= (hoveredStar || rating) ? "#89c600" : "#ccc" }} // Green for hover or rating, gray for the rest
        onMouseEnter={() => handleMouseEnter(i)} // On hover, set hovered star
        onMouseLeave={handleMouseLeave} // On mouse leave, reset hovered star
      ></i>
    );
  }

  return <div className="star-rating">{stars}</div>;
}

export default function DetailedProducts() {
  // Images array with main and thumbnail versions
  const images = [
    {
      main: "../assets/p1.jpg",
      thumbnail: "../assets/mini-p1.jpg",
    },
    {
      main: "../assets/p1.jpg",
      thumbnail: "../assets/mini-p1.jpg",
    },
    {
      main: "../assets/p3.jpg",
      thumbnail: "../assets/mini-p3.jpg",
    },
    {
      main: "../assets/p4.jpg",
      thumbnail: "../assets/mini-p4.jpg",
    },
    {
      main: "../assets/p5.jpg",
      thumbnail: "../assets/mini-p5.jpg",
    },
    {
      main: "../assets/p6.jpg",
      thumbnail: "../assets/mini-p6.jpg",
    },
  ];

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(0); // Index of the selected image

  // Function to handle thumbnail click
  const handleImageClick = (index) => {
    setSelectedImage(index); // Update selected image index
  };

  // Product details array
  const productDetails = [
    {
      title: "Système d'exploitation",
      description: "sans système d'exploitation",
    },
    {
      title: "Processeur",
      description: "AMD Ryzen 5 3600 6x 3.60GHz (4.10 GHz Turbo)",
    },
    {
      title: "Carte graphique",
      description: "Nvidia GeForce RTX 3050 6Go VRAM",
    },
    { title: "RAM", description: "16 Go DDR4 3200 MHz" },
    { title: "SSD", description: "1 To High performance (80+)" },
    {
      title: "Alimentation",
      description: "400 Watt Xilence Performance (+80)",
    },
    {
      title: "Carte mère",
      description:
        "MSI A520M-A Pro (4x USB 3.0 (5Gbit/s)/2x USB 2.0 (480Mbit/s))",
    },
    {
      title: "WiFi",
      description: "WiFi Adaptateur PCI Express (jusqu'à 300 Mbit/s)",
    },
    {
      title: "Boitier",
      description: "Tour gaming Megaport Hunter RGB avec 4x 120mm Ventilateurs",
    },
  ];

  // Array to hold installment options and prices
  const installmentOptions = [
    { times: "2x", price: "163,77 €" },
    { times: "3x", price: "108,51 €" },
    { times: "4x", price: "81,88 €" },
  ];

  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle click on installment options
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };
  

  return (
    <>
      <div className="container pops">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex mt-4 font-8">
              <p>
                Accueil <span className="ps-2">&gt;</span>
              </p>
              <p className="ps-2 ">
                PC Gamer <span>&gt;</span>
              </p>
              <p className="ps-2 ">PC Gamer AMD Ryzen 5 Slayer</p>
            </div>

            <div className="row">
              {/* Thumbnails column */}
              <div className="col-2">
                <div className="d-flex flex-column">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-100 black-border mt-3 p-2 ${
                        selectedImage === index ? "highlighted" : ""
                      }`} // Add highlighted class if selected
                      onClick={() => handleImageClick(index)} // On click, set the selected image
                    />
                  ))}
                </div>
              </div>

              {/* Main image column */}
              <div className="col-10">
                <img
                  src={images[selectedImage].main} // Show selected image
                  alt="Main"
                  className="w-100 ps-5 main-image"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex mt-4">&nbsp;</div>
            <div className="d-flex mt-4  flex-column">
              <p className="font-8">
                <span className="green">Écrire la première critique </span>
                <span className="px-3">|</span>
                <i className="fa-solid fa-chart-simple"></i>
                <span className="underline ps-2">Comparer</span>
                <span className="px-3">|</span>
                <span className="gray">SKU:1811-FR</span>
              </p>
              <h2>PC Gamer AMD Ryzen 5 Slayer</h2>

              <div className="centered-content mt-4">
                <span>Détails du produit</span>
              </div>

              {/* Mapped product details */}
              {productDetails.map((detail, index) => (
                <div className="row mt-4 border-bot" key={index}>
                  <div className="col-lg-4">
                    <p className="bold font-8">{detail.title}</p>
                  </div>
                  <div className="col-lg-8 font-8">
                    <p>{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* strip */}
      <div className="dark-grayBack py-3 mt-4 text-white">
        <div className="container">
          <p className="mb-0 ">
            <span className="green-hover">Fonctionnalités</span>{" "}
            <span className="px-3 gray">|</span>
            <span className="green-hover">Avis</span>
          </p>
        </div>
      </div>
      {/* strip ends */}

      {/* Function component */}
      <div className="I5-back ">
        {/* small strip */}
        <div className="d-flex justify-content-center">
          <div className=" mini-border"></div>
        </div>
        {/* small strip ends*/}

        <div className="container pops py-5">
          <div className=" text-white">
            <h4 className="mb-5">Fonctionnalités</h4>

            <h4>Le PC Slayer : ton passe vers la victoire</h4>
            <p className="gray ">
              Plonge au cœur de l'action avec le PC Gamer AMD Ryzen 5 Slayer.
              Conçu pour les aventuriers du gaming, ce bijou technologique offre
              des performances inégalées pour des sessions de jeu épiques. Doté
              d'un processeur AMD Ryzen, d'une carte graphique Nvidia GeForce
              RTX, le Slayer est prêt à défier les limites de la réalité
              virtuelle.
            </p>
            <h6>La porte d'entrée vers le gaming à un prix jamais vu</h6>
            <p className="gray">
              Forge ton propre destin gaming avec le PC Gamer AMD Ryzen 5
              Slayer. Megaport optimisé ce PC pour mettre à ta disposition des
              composants modernes et actuels, à un prix défiant toute
              concurrence. Cet ordinateur gaming est pré-assemblé par nos
              experts et testé avec soin avant l'expédition.
            </p>
            <h6>Performance sans limite</h6>
            <p className="gray">
              Exploite toute la puissance à ta disposition avec le SSD M.2 haute
              performance du Slayer. Charge instantanément tes jeux préférés et
              laisse-toi emporter par l'action sans aucun temps de chargement.
              Avec une alimentation performante et un boitier tour gaming
              Megaport Hunter LED, le Slayer offre une expérience de jeu fluide
              et immersive à chaque instant.
            </p>
          </div>
        </div>
      </div>
      {/* Function component ends */}

      <div className="gray-strip"></div>

      {/*Avis component*/}
      <div className="I5-back ">
        {/* small strip */}
        <div className="d-flex justify-content-center">
          <div className=" mini-border"></div>
        </div>
        {/* small strip ends*/}

        <div className="container pops py-5">
          <div className=" text-white">
            <h4 className="mb-4">Avis</h4>

            <p className="gray mb-0">Écrire la première critique </p>
            <div className="gray-strip my-2"></div>
            <h4 className="mb-4">
              Vous commentez : PC Gamer AMD Ryzen 5 Slayer
            </h4>

            <form action="">
              <div className="row text-white">
                <div className="col-12">
                  <label htmlFor="" className="font-8 mb-2">
                    VOTRE NOTE: <span className="red">*</span>
                  </label>
                  <div className="d-flex dark-grayBack p-3">
                    <StarRating rating={0} /> {/* Render the star rating */}
                    <p className="grays mb-0 ps-2">
                      Sélectionnez votre classement
                    </p>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="font-8 mb-2">
                      SURNOM: <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="p-3 bg-transparent form-input"
                    />
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="font-8 mb-2">
                      SURNOM: <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="p-3 bg-transparent form-input"
                    />
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="font-8 mb-2">
                      RESUME: <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="p-3 bg-transparent form-input"
                    />
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="font-8 mb-2">
                      Commentaire:
                      <span className="red">*</span>
                    </label>
                    <textarea
                      name=""
                      id=""
                      rows={4}
                      className="form-textarea"
                    ></textarea>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <button className="form-Avis-btn ">
                    Poster le commentaire
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*Avis component ends*/}

      {/* white strip */}
      <div className="container pops py-4">
        <div className="d-flex justify-content-between flex-lg-row flex-sm-column align-items-center">
          <div className="d-flex">
            <p className="green mb-0">
              <i class="fa-regular fa-clock"></i>
              <span className="ps-2">Délai de livraison 4-6 jours ouvrés</span>
            </p>
            <span className="px-3">|</span>

            <p className="bold mb-0">
              Alma
              {installmentOptions.map((option, index) => (
                <span
                  key={index}
                  className={`installment-option ms-2 ${
                    selectedOption === index ? "active" : ""
                  }`} // Add 'active' class to change style if selected
                  onClick={() => handleOptionClick(index)}
                  style={{ cursor: "pointer" }} // Change cursor on hover
                >
                  {option.times}
                </span>
              ))}
            </p>

            {/* Display the selected price */}
            {selectedOption !== null && (
              <span className="ps-4 price-display">
                {installmentOptions[selectedOption].price}
              </span>
            )}
          </div>

          <div className="d-flex ">
            <div className="d-flex flex-column">
              <p className="line-through  mb-0 text-danger">629,00 €</p>
              <h2 className="mb-0">599,00 €</h2>
            </div>
            <button className="product-btn ms-3">
              Un problème est survenu
              <i className="fas fa-shopping-cart ps-2" />
            </button>
          </div>
          
        </div>
      </div>

      {/* white strip ends */}
    </>
  );
}
