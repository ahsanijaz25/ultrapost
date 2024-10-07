import React, { useState } from "react";
import "./ConfigPC.css";

export default function ConfigPc() {
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

  // Function to handle thumbnail click
  const handleImageClick = (index) => {
    setSelectedImage(index); // Update selected image index
  };

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(0); // Index of the selected image

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

  const items = [
    {
      image: "../assets/pop1.jpg",
      title: "Game Pass",
      details: "details", // or you could link to a detailed page or provide a function
    },
    {
      image: "../assets/pop2.png",
      title: "Powered by MSI - Advanced",
      details: "details",
    },
    {
      image: "../assets/pop3.png",
      title: "Powered by MSI - Ultimate",
      details: "details",
    },
    {
      image: "../assets/pop4.jpg",
      title: "AMD 2-Game Bundle",
      details: "details",
    },
    {
      image: "../assets/pop5.jpg",
      title: "Nvidia Game Bundle - Star Wars Outlaws",
      details: "details",
    },

    // Add more items as needed
  ];

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

  const systemDetails = [
    {
      image: "../assets/system.svg",
      title: "Système d'Exploitation",
      description: "Sans système d'exploitation",
    },
    {
      image: "../assets/system1.svg", // Add a different image for another system if needed
      title: "Processeur",
      description: "AMD Ryzen 5 3600 6x 3.60GHz (4.10 GHz Turbo)",
    },
    {
      image: "../assets/system2.svg", // Add a different image for another system if needed
      title: "Carte graphique",
      description: "Nvidia GeForce RTX 3050 6Go VRAM",
    },
    {
      image: "../assets/system.svg",
      title: "Système d'Exploitation",
      description: "Sans système d'exploitation",
    },
    {
      image: "../assets/system1.svg", // Add a different image for another system if needed
      title: "Processeur",
      description: "AMD Ryzen 5 3600 6x 3.60GHz (4.10 GHz Turbo)",
    },
    {
      image: "../assets/system2.svg", // Add a different image for another system if needed
      title: "Carte graphique",
      description: "Nvidia GeForce RTX 3050 6Go VRAM",
    },
    {
      image: "../assets/system.svg",
      title: "Système d'Exploitation",
      description: "Sans système d'exploitation",
    },
    {
      image: "../assets/system1.svg", // Add a different image for another system if needed
      title: "Processeur",
      description: "AMD Ryzen 5 3600 6x 3.60GHz (4.10 GHz Turbo)",
    },
    {
      image: "../assets/system2.svg", // Add a different image for another system if needed
      title: "Carte graphique",
      description: "Nvidia GeForce RTX 3050 6Go VRAM",
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
                Configurateur PC sur mesure Megaport : Ma config PC gamer
              </p>
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

                <span className="gray">SKU:CON100</span>
              </p>
              <h3 className="config-lh">
                Configurateur PC sur mesure <br /> Ultraport : Ma config PC
                gamer
              </h3>

              <p className="gray font-8">
                Vous souhaitez personnaliser un PC en fonction de vos besoins
                spécifiques ? C'est facile ! Notre configurateur PC est là pour
                vous !
              </p>
              <p className="gray font-8">
                Le configurateur de Megaport vous permet de configurer votre
                propre PC gamer de chez vous. Profitez de notre savoir-faire en
                tant que monteur de PC et choisissez parmi notre large gamme de
                composants en cliquant simplement dessus. Vous recevrez en
                quelques jours un PC sur mesure, monté intégralement pour vous
                par nos experts. Lancez-vous !
              </p>

              <p>
                <img src="../assets/Windows11.png" alt="" />
              </p>

              <p></p>

              <div className="centered-content mt-4">
                <span>Configurateur PC</span>
              </div>

              <div className="row mt-4">
                {items.map((item, index) => (
                  <div className="col-lg-6 mb-3" key={index}>
                    <div className="d-flex border-black align-items-center justify-content-between ">
                      <img src={item.image} alt={item.title} />

                      <h6 className="mb-0 ps-3">{item.title}</h6>
                      <p className="green underline pe-3 pe-md-3 mb-0">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="container">
                {systemDetails.map((item, index) => (
                  <div className="row mt-4  border-bot1" key={index}>
                    <div className="col-lg-5">
                      <div className="d-flex">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="svg-size"
                        />
                        <p className="bold mb-0 ps-2">{item.title}</p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <p className="mb-0 font-8">{item.description}</p>
                    </div>
                    <div className="col-lg-2">
                      <p className="text-end mb-0 green">+</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dark-grayBack py-3 mt-4 text-white">
        <div className="container">
          <p className="mb-0 ">
            <span className="green-hover">Fonctionnalités</span>{" "}
            <span className="px-3 gray">|</span>
            <span className="green-hover">Avis</span>
          </p>
        </div>
      </div>

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

            <h4>Configurez votre PC en toute simplicité avec le configurateur de Megaport</h4>
            <p className="gray ">
            Vous souhaitez configurer vous-même un ordinateur et le personnaliser selon vos besoins ? Avec notre configurateur PC, c'est simple !
            </p>
            <p className="gray">Le configurateur de Megaport vous permet de configurer votre ordinateur en un clin d'œil. Profitez de notre savoir-faire en matière de configuration d'ordinateurs et choisissez parmi des centaines de composants. Vous pouvez facilement configurer vous-même une config que vous recevrez chez vous en quelques jours seulement. Lancez-vous de suite !</p>
            
            <h6>Composez votre PC gamer personnel avec le configurateur Megaport</h6>
            <p className="gray">
            Chaque gamer a ses préférences et ses exigences en termes de PC fixes. Notre configurateur PC vous offre une large sélection de composants pour monter votre PC, du simple PC d'entrée de gamme, au bolide gaming haut de gamme.
            </p>
            <p className="gray">Il y en a pour tout le monde chez Megaport ! Notre configurateur vous laisse le choix, du PC d'entrée de gamme pratique, à la machine gaming haut de gamme, en passant par un ordinateur milieu de gamme fiable. C'est à vous de déterminer comment vous allez configurer votre PC !</p>
          
            <h6>Une large sélection de matériel de haute qualité</h6>
            <p className="gray">
            Notre gamme contient les meilleurs produits et les plus récents sur le marché. Vous êtes sûr de trouver ce que vous cherchez.
            </p>
            <p className="gray">
            À vous de choisir ! Préférez-vous vous baser sur un processeur Intel ou AMD ? Voulez-vous faire confiance au leader du marché Intel ou à son concurrent AMD ? En fonction de votre choix, vous devrez opter pour une gamme différente de carte mère. Pas d'inquiétude cependant ! Notre configurateur PC ne vous propose que les composants compatibles entre eux ! Pour votre configuration, notre site vous propose une carte mère compatible avec processeur Intel, ou bien notre sélection carte mère pour processeur AMD.
            </p>

            <h6>Le style est aussi important</h6>
            <p className="gray">Notre sélection de boitiers fait l'objet d'une attention toute particulière. Nous savons combien il est important pour vous que votre PC ressemble à quelque chose et soit présent dans votre setup avec style ! Megaport vous propose donc de choisir parmi une large gamme de boitiers stylés et pratiques ! Que vous cherchiez des boîtiers sobres et silencieux, ou bien dotés d'une grande fenêtre latérale et de nombreux éclairages RGB, vous devriez trouver votre bonheur dans notre configurateur PC.</p>
            <p className="gray">
            Si vous aimez en mettre plein les yeux, alors vous pouvez opter pour nos différents sets de ventilateurs avec éclairages RGB. Vous pourrez ainsi équiper votre boitier d'un splendide éclairage haut en couleurs, si celui-ci n'est pas déjà équipé de ventilateurs RGB.
            </p>

            <h6>Une offre complète avec des accessoires adaptés</h6>
            <p className="gray">Notre configurateur Megaport vous offre aussi la possibilité de sélectionner des accessoires adaptés et essentiels au bon fonctionnement de votre PC. La qualité est au rendez-vous !</p>
            <p className="gray">Vous pouvez sélectionner des packs clavier-souris avec ou sans fil qui vous permettront de vous frayer un chemin en toute sécurité dans l'univers du gaming. Pour dominer le jeu, vous trouverez également des souris gamer avec des fonctionnalités supplémentaires !</p>
            <p className="gray">Nous proposons aussi des claviers pour tous les styles et toutes les bourses. Un clavier à l'éclairage RGB est un vrai plus dans votre setup, en plus d'être essentiel pour votre utilisation. Ne faites plus de compromis entre style et efficacité !</p>
            <p className="gray">Et pour pouvoir profiter au mieux de vos jeux, nous proposons une large sélection d'écrans gamer. Des petits moniteurs 22 pouces aux grands moniteurs 28 pouces, tout est là pour vous faire vivre une expérience de jeu incomparable. Nos écrans mettent à votre disposition une reproduction d'images brillantes avec des temps de réponse ultra-courts, et des hautes fréquences d'affichage !</p>
            <p className="gray">
            Si vous ajoutez Windows à votre configuration, alors nous installons une licence officielle du fameux système d'exploitation sur votre disque dur, ou mieux, sur votre SSD si votre configuration en contient un. Que vous partiez sur un ordinateur bureautique ou un PC gamer, vous êtes certains de ne recevoir que du logiciel officiel chez Megaport !
            </p>

            <h6>Configurez votre PC avec nos conseillers</h6>
            <p className="gray">
            Si vous avez des questions sur la composition de votre ordinateur ou que vous souhaitez obtenir des conseils, vous pouvez contacter notre support par email et téléphone ! Nous sommes à votre écoute et répondons avec plaisir à vos questions !
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
              <p className="line-through  mb-0 text-danger">906,00 €</p>
              <h2 className="mb-0">829,00 €</h2>
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
