import React from "react";
import "./GamingPC800Euro.css";
import Card from "../Card/Card";

const productCardData = [
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    rating: 4.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
  {
    id: 2,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    rating: 3.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
  {
    id: 3,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    rating: 3.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
];

export default function GamingPC800Euro() {
  return (
    <>
      <div className="container pops">
        <div className="d-flex mt-4 font-8">
          <p>
            Accueil <span className="ps-2">&gt;</span>
          </p>
          <p className="ps-2 ">Gaming PC 800 Euro</p>
        </div>
      </div>

      <div className="bg-blk text-white py-5">
        <div className="container pops">
          <h2 className="text-center">
            <span className="green">PC Gamer à 800 €:</span> pour bien <br />{" "}
            débuter dans l'univers du <br /> gaming à petit prix
          </h2>
          <p className="gray text-center mb-5">
            Performance fluide pour un prix modique et la porte d’entrée idéale{" "}
            <br /> dans le monde du gaming
          </p>

          <div className="d-flex justify-content-center flex-column m-euro">
            <h2 className="">Découvre nos PC Gamer à moins de 800 €</h2>
            <p className="gray font-8">
              Pas besoin de composants haut de gamme pour plonger dans le
              gaming. Avec un budget de 800 €, tu obtiens un PC Gamer solide,
              parfait pour le gaming occasionnel et les applications
              quotidiennes. Idéal pour les débutants ou les joueurs qui veulent
              profiter de leurs jeux en Full HD. Chez Megaport, tu trouveras
              divers modèles adaptés à ce budget, te permettant de commencer
              sans te ruiner.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <Card productCardData={productCardData} />
      </div>

      <div className="bg-blk text-white py-5">
        <div className="container pops">
          <div className=" text-white m-euro game-font">
            <h4>Performance solide à petit prix : PC Gamer pour débuter</h4>
            <p className="gray ">
              La catégorie des 800 € est idéale pour commencer dans le gaming.
              Beaucoup de nos PC dans cette gamme de prix sont équipés de iGPU –
              des processeurs avec une unité graphique intégrée. Ces solutions
              intégrées offrent une bonne base pour les jeux simples et les
              tâches quotidiennes. Et le gros avantage : tu pourras ajouter une
              carte graphique dédiée plus tard, augmentant ainsi la performance
              de ton PC sans trop dépenser.{" "}
            </p>
            <p className="gray mb-5">
              Un PC Gamer à 800 € est parfait pour les titres e-sport, les jeux
              indie et les classiques qui n'ont pas des exigences système
              élevées. Nos systèmes dans cette gamme sont non seulement
              abordables, mais aussi évolutifs, te permettant d'améliorer les
              performances au fil du temps. Profite de tes jeux préférés avec
              une fluidité optimale et sois prêt pour davantage lorsque tu en
              auras besoin.
            </p>

            <h4>PC Gamer à 800 € : tes avantages chez Megaport</h4>

            <ul className="gray gamer-li font-8 p-0 mb-5">
              <li>Plus de 95 % de satisfaction client</li>
              <li>Livraison Premium rapide</li>
              <li>Large choix de matériel abordable de grandes marques</li>
              <li>Configurateur : personnalise ton système</li>
              <li>
                PC Gamer sous 800 € : fonctionnalité et flexibilité à un prix
                attractif
              </li>
              <li>Plug and Play : PC livré déjà assemblé</li>
              <li>Service client compétent</li>
              <li>Partenaire Microsoft</li>
            </ul>

            <h2><span className="green">PC Gamer à 800 €:</span> commence ton aventure gaming maintenant !</h2>
            <p className="gray">Un PC Gamer à 800 € est la solution idéale pour entrer dans l'univers du gaming sans dépasser ton budget. Ces PC sont parfaits pour les joueurs débutants ou ceux qui cherchent un ordinateur fiable pour un gaming occasionnel. Grâce aux iGPU, tu peux démarrer immédiatement et ajouter une carte graphique pour encore plus de performance plus tard. Nos configurations sont pensées pour que tu économises aujourd'hui et que tu puisses facilement évoluer demain. Choisis ton système et lance-toi dans l'aventure gaming !</p>
          </div>
        </div>
      </div>
    </>
  );
}
