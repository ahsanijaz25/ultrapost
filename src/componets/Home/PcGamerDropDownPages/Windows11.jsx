import React, { useState } from "react";
import "./Windows11.css";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Product card data (same as before)
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

// Sample FAQ data
const faqData = [
  {
    question: "Quelle est la différence entre Windows 10 et Windows 11 ?",
    answer:
      "Windows 11 offre toute la puissance et la sécurité de Windows 10, avec un style repensé et remis au goût du jour. Il dispose également de nouveaux outils, de nouveaux sons et de nouvelles applications.",
  },
  {
    question: "Mes accessoires fonctionnent-ils sous Windows 11 ?",
    answer:
      "Oui, la plupart des accessoires fonctionnent bien sous Windows 11, cependant, il est recommandé de vérifier la compatibilité avec le fabricant des accessoires pour une expérience optimale.",
  },
  {
    question: "Combien coûte la mise à niveau de Windows 10 vers Windows 11 ?",
    answer:
      "La mise à niveau est gratuite pour les utilisateurs disposant de licences Windows 10 légitimes et compatibles.",
  },
  {
    question: "Combien de temps l’offre de mise à niveau gratuite durera-t-elle ?",
    answer:
      "L’offre de mise à niveau gratuite n’a pas de date de fin spécifique pour les systèmes éligibles. Cependant, Microsoft se réserve le droit d’y mettre un terme au bout d’un temps.",
  },
  {
    question: "Windows 11 occupe-t-il plus d’espace sur mon PC que Windows 10 ?",
    answer:
      "Non. Windows 11 et Windows 10 occupent à peu près la même quantité d’espace disque. Pendant le processus de mise à niveau, cependant, de l’espace supplémentaire est requis. Windows nettoiera cet espace disque supplémentaire environ 10 jours après la fin de la mise à niveau.",
  },
];

// FAQ Item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item mb-3">
      <div
        className="faq-question d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <h5 className="m-0 bold">{question}</h5>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && <p className="faq-answer mt-2 gray">{answer}</p>}
      <hr />
    </div>
  );
};


// Main FAQ component
const FAQ = () => {
  return (
    <div className="container faq-container mt-5">
      <h2 className="green mb-4">Questions fréquemment posées</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

// Main Windows11 Component
export default function Windows11() {
  return (
    <>
      <div className="container pops">
        <div className="d-flex mt-4 font-8">
          <p>
            Accueil <span className="ps-2">&gt;</span>
          </p>
          <p className="ps-2 ">Windows 11</p>
        </div>
      </div>

      <div className="container pops">
        <div className="row">
          <div className="col-12">
            <img src="../assets/Windows11.JPG" alt="" className="w-100" />
          </div>
          <p>&nbsp;</p>
          <p className="text-center font-20 my-3">
            Nous savons que vous avez beaucoup à faire. Chaque jour
            s’accompagne d’un nouveau défi. <br />
            Avec Windows 11, il est plus facile de relever ces défis.
          </p>

          <p>&nbsp;</p>

          <div className="col-12">
            <div className="youtube-player">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="container pops">
          <Card productCardData={productCardData} />

          <div className="row">
            <div className="col-12">
              <img src="../assets/jeu.JPG" alt="" className="w-100" />
            </div>

            <p>&nbsp;</p>
            <div className="text-center">
              <h2>Si vous cherchez un moyen plus facile…</h2>
              <p className="text-center font-20 gray">
                Découvrez comment Windows 11 peut faciliter le quotidien.
              </p>
            </div>
            <p>&nbsp;</p>

            <div className="col-12 mb-5">
              <img src="../assets/La.JPG" alt="" className="w-100" />
            </div>

            <div className="col-12 mb-5">
              <img src="../assets/Trouvez.JPG" alt="" className="w-100" />
            </div>

            <div className="col-12">
              <img src="../assets/Une.JPG" alt="" className="w-100" />
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <Card productCardData={productCardData} />
        </div>

        {/* FAQ Section */}
        <div className="container pops">
          <FAQ />
        </div>
      </div>
    </>
  );
}
