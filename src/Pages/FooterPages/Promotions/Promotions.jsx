import React, { useState } from 'react';
import "./Promotions.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Promotions() {



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
      question: "À quelle fréquence y a-t-il des promotions PC ?",
      answer: `réductions Megaport.`
    },
    {
      question: "Les composants en promotion sont-ils de moindre qualité ?",
      answer: `Non. C'est une idée fausse. Les composants utilisés dans les PC Gamer fixes en promotion ont la même qualité et sont testés de la même manière que les composants sans promotion.`
    },
    {
      question: "Comment savoir quand une promotion arrive ?",
      answer: `Pour être toujours informé des promotions dans la boutique en ligne Megaport, il existe plusieurs moyens.

Consulte régulièrement le site Web pour voir si de nouvelles promotions apparaissent sur la page des promotions.
Tu peux nous suivre sur nos réseaux sociaux. Nous partageons toujours des publications sur les nouvelles promotions pour te donner la possibilité d'économiser de l'argent lors des promotions PC gamer.
N'hésite pas à t'abonner à notre newsletter. Tu seras personnellement informé du lancement de grandes promotions pour ne plus jamais manquer une bonne affaire.`
    },
    {
      question: "Combien de temps la garantie des composants en promotion dure-t-elle ?",
      answer: `Les composants des promotions PC gamer bénéficient de la même garantie que les composants achetés sans promotion. Les détails sont disponibles dans nosConditions générales, article 6.`
    }

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

      <div className='Promotions'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>
            <h1> Promotions en cours dans la boutique de PC en ligne Megaport France </h1>
            <p>Les promotions, c'est génial ! C'est pourquoi Megaport te propose régulièrement des promotions où tu peux économiser de l'argent, obtenir des bundles de jeux ou du matériel gaming. Peu importe la promotion PC gamer chez Megaport, tu la trouveras ici. Découvre une variété d’actions commerciales incroyables en collaboration avec des partenaires hardware de premier plan, qui amélioreront ton expérience de jeu sans exploser ton budget.</p>
          </div>


          {/* section 1  */}
          <div className='row'>

            <div className='col-lg-6 col-md-12 section px-3 py-3'>
              <h1>Découvrez dès maintenant nos nouvelles configurations</h1>
              <p>La Sécurité Windows (ex-Windows Defender) est un programme de sécurité intégré dans Windows 11 qui met ton PC à l'abri des virus, des malwares et autres menaces. Elle te propose des fonctionnalités de sécurité étendues :</p>

              <p>PC Gamer fixes prémontés avec les composants actuels pour une expérience gaming rapide. </p>
              <p>

                Avec un PC Gamer fixe, tu peux te lancer immédiatement et plonger dans ta prochaine aventure gaming. Ton système de gaming te parviendra déjà monté, pas besoin d'être un expert en technique pour le configurer. Dans l'ensemble, un PC Gamer fixe offre une solution simple et sans tracas pour les joueurs en quête de performances immédiates et d'une expérience de jeu fluide.

              </p>

              <button>Disponibles dès maintenant</button>


            </div>

            <div className='col-lg-6 col-md-12 section'>
              <img src={`${imgURL}/promotions.png`} className='w-100' />
            </div>

          </div>



          <div className='content w-100 d-flex py-5 flex-column'>
            <h1> <span> Les promotions PC gamer:  </span>  sont la meilleure façon d'obtenir des réductions attractives et des extras sympas. </h1>
            <p>En collaboration avec divers partenaires, nous proposons régulièrement des promotions exclusives pour une large gamme de composants gaming. Cela inclut les cartes graphiques, les processeurs, les cartes mères, la mémoire et bien plus encore. Que tu cherches un ordinateur haut de gamme pour profiter des derniers jeux en haute résolution ou que tu optes pour un système à budget limité, des actions commerciales régulièrement mises à jour proposent des réductions attractives, des contenus supplémentaires et des bundles de jeux pour répondre à tes besoins spécifiques.</p>

            <p>Notre page de promotions est régulièrement mise à jour pour te garantir d'être toujours informé des dernières promotions sur nos ordinateurs fixes. Donc, assure-toi de la consulter régulièrement pour ne pas manquer les opportunités fantastiques d'optimiser ton expérience de jeu tout en économisant de l'argent réel ou en obtenant des extras sympas.</p>

          </div>


        </div>


        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1><span>FAQ des promotions Megaport -</span> Questions fréquemment posées</h1>
          </div>
          
        </div>


        <div className="container px-5 ">
          <FAQ />
        </div>




      </div>



    </>
  );
}
