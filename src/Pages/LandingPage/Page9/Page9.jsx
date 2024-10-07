import React, { useState } from 'react';
import "./Page9.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Page9() {


  const imgURL = ASSET_PATHS.IMG_URL;

  const productCardData = [
    {
      id: 1,
      imgURL: 'card_1.jpg',
      hoverImgURL: 'card_1_hover.jpg',
      rating: 4.5,
      title: 'PC Premium gaming AMD Ryzen 9 7900X Super Nova',
      features: [
        'Windows 11 Home',
        'AMD Ryzen 9 7900X, 12x 4,70 GHz',
        'NVIDIA GeForce RTX 4080 Super 16 Go',
        '32Go Kingston 6000Mhz DDR5 RGB RAM',
        'Gigabyte X670 Aorus Elite',
        '1To Crucial T700 M.2 NVMe SSD'
      ],
      oldPrice: '3 074,00 €',
      newPrice: '2 999,00 €',
      deliveryTime: 'Délai de livraison 4-6 jours ouvrés'
    },
    {
      id: 2,
      imgURL: 'card_2.jpg',
      hoverImgURL: 'card_2_hover.jpg',
      rating: 3.5,
      title: 'PC Premium gaming AMD Ryzen 9 7900X Super Nova',
      features: [
        'Windows 11 Home',
        'AMD Ryzen 9 7900X, 12x 4,70 GHz',
        'NVIDIA GeForce RTX 4080 Super 16 Go',
        '32Go Kingston 6000Mhz DDR5 RGB RAM',
        'Gigabyte X670 Aorus Elite',
        '1To Crucial T700 M.2 NVMe SSD'
      ],
      oldPrice: '3 074,00 €',
      newPrice: '2 999,00 €',
      deliveryTime: 'Délai de livraison 4-6 jours ouvrés'
    }
  ];


  // Sample FAQ data
  const faqData = [
    {
      question: "Quelles sont les conditions pour payer en plusieurs fois ?",
      answer:
        `Le paiement en plusieurs fois est éligible pour les paniers allant de 50€ à 5000€
Les cartes acceptées sont les cartes émises en France de type Visa, Mastercard et American Express.
Les cartes prépayées et virtuelles et à autorisation systématique ne sont pas acceptées`,
    },
    {
      question: "Je souhaite payer en plusieurs fois, comment faire ?",
      answer:
        `Sur la page de paiement, sélectionnez “Payer en plusieurs fois avec Alma”. Vous serez alors redirigé vers une page de paiement sur laquelle vous devrez entrer vos coordonnées bancaires comme pour un paiement standard. Vous y trouverez le récapitulatif de vos échéances à venir. Vous recevrez ensuite un email récapitulatif avec le calendrier de vos échéances puis un email de rappel 3 jours avant chaque échéance.`,
    },
    {
      question: "Le paiement en plusieurs fois avec Alma est-il sécurisé ?",
      answer:
        `Alma effectue systématiquement une vérification 3D Secure pour confirmer que vous êtes bien le propriétaire de la carte utilisée. Votre banque vous adresse alors un SMS de confirmation ou une notification push dans votre application bancaire, afin de confirmer que vous êtes bien à l'initiative de cette opération et qu'elle n'est pas frauduleuse.`,
    },
    {
      question: "Le paiement en plusieurs fois est-il disponible dans vos boutiques ?",
      answer:
        `Le paiement en plusieurs fois est disponible dans toutes nos boutiques et les conditions d’éligibilité sont les mêmes que pour notre site internet. Il vous suffit de demander au vendeur de payer en plusieurs fois avec Alma et ce dernier vous guidera.`,
    },
    {
      question: "Je souhaite me faire rembourser mais j’ai payé en plusieurs fois avec Alma, que dois-je faire ?",
      answer:
        `Alma est notre partenaire de paiement mais il ne peut avoir accès à la gestion de nos commandes. Si vous souhaitez annuler votre commande, obtenir un remboursement ou un geste commercial, nous vous invitons à nous contacter à l’adresse suivante : support@megaport.fr

Avec Alma, nous vous offrons la possibilité d’étaler votre paiement en payant en plusieurs fois. C’est simple, sécurisé et sans frais ! Si vous ne connaissez pas Alma, rendez-vous sur Shop to your own beat`,
    },
    {
      question: "Comment ça marche ?",
      answer:
        `Choisissez Alma au moment de payer. Vous pouvez payer en 2x, 3x et 4x

Entrez simplement vos coordonnées bancaires comme lors d’un paiement classique.

La validation de votre commande est instantanée.

Vous recevrez ensuite un email avec l’échéancier de paiement puis un rappel 3 jours avant chaque échéance.`,
    },
    {
      question: "Conditions d’éligibilité :",
      answer:
        `Ce type de paiement est disponible pour toutes les commandes entre 50€ et 5000€
Les cartes acceptées sont les cartes émises en France visa, mastercard et Amex.
Les cartes prépayées, virtuelles et à autorisation systématique ne sont pas acceptées.`,
    },
    {
      question: "Des questions ?",
      answer:
        `Si vous rencontrez un problème avec votre commande payée en plusieurs fois avec Alma, vous pouvez vous rendre sur la FAQ client d’Alma en cliquant ici (Alma) ou envoyer un email au support client d’Alma à support@getalma.eu`,
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
        <h2 className="green mb-4">FAQ</h2>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };




  return (
    <>

      <div className='page-9'>

        <div className='container '>


          <div className='image-container'>
            <img src={`${imgURL}/page9-1.jpg`} className='w-100' />
          </div>


          <div className='image-container'>
            <img src={`${imgURL}/page9-2.jpg`} className='w-100' />
          </div>


          <div className='image-container '>
            <img src={`${imgURL}/page9-3.jpg`} className='w-100' />
          </div>


          <Card productCardData={productCardData} />


          {/* faq panding */}

          <div className="container px-5">
            <FAQ />
          </div>


        </div>


      </div>



    </>
  );

}
