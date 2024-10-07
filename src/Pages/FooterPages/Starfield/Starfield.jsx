import React, { useState } from 'react';
import "./Starfield.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Starfield() {

  const imgURL = ASSET_PATHS.IMG_URL;


  // Sample FAQ data
  const faqData = [
    {
      question: "Sur quelles plates-formes peut-on jouer à Starfield ?",
      answer:
        `Grâce à sa collaboration avec Microsoft, Starfield sera exclusivement disponible sur les consoles Xbox Series X/S et sur Microsoft Windows pour PC.`,
    },
    {
      question: "Est-ce que Starfield sera disponible dans le Game Pass ?",
      answer:
        `Oui, le jeu sera disponible dès sa sortie dans le Xbox Game Pass et pourra être joué sans frais supplémentaires. Chez Megaport, l'achat d'un PC avec le système d'exploitation Windows 11 te donne droit à un mois gratuit de Game Pass.`,
    },
    {
      question: "Y aura-t-il une version de Starfield pour la PS5 ?",
      answer:
        `Non, Starfield est une exclusivité de Microsoft, il ne sera donc pas disponible sur la PS4 ou la PS5.`,
    },
    {
      question: "Starfield propose-t-il un mode multijoueur ?",
      answer:
        `Non, Starfield est un jeu solo pur et ne dispose pas de mode multijoueur. Il n'y aura pas non plus de mode coopératif à sa sortie, bien que cela puisse être envisagé ultérieurement.`,
    },
    {
      question: "Quelle carte graphique est nécessaire pour Starfield ?",
      answer:
        `Selon les exigences système recommandées pour Starfield, une carte graphique NVIDIA GeForce RTX 2080 ou AMD Radeon RX 6800 XT est nécessaire. Les résolutions et les FPS spécifiques ne sont malheureusement pas encore connus. Pour jouer en Full HD, nous recommandons une carte graphique NVIDIA GeForce RTX 4070 ou AMD Radeon RX 7700 XT.`,
    },
    {
      question: "Quel processeur est recommandé pour Starfield ?",
      answer:
        `Starfield est gourmand en ressources CPU, donc les exigences sont assez élevées. Les processeurs Intel i5 10600K et AMD Ryzen 5 3600X sont recommandés.`,
    },
    {
      question: "Combien de RAM est nécessaire pour Starfield ?",
      answer:
        `Les exigences matérielles pour les nouveaux jeux vidéo deviennent de plus en plus importantes. Avec 8 Go de RAM, tu ne pourras pas jouer à Starfield. Un PC Starfield nécessite au moins 16 Go de RAM.`,
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



  return (
    <>

      <div className='Starfield'>



        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/Starfield2.jpg`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h1> <span> PC Gamer Starfield : </span> Voyage dans les étoiles </h1>


              <p>Starfield est un tout nouveau jeu de rôle d'action développé par Bethesda Game Studios, l'éditeur de jeux populaires tels que Fallout 4 et The Elder Scrolls V: Skyrim. Dans ce jeu de rôle nouvelle génération, Starfield, les joueurs pourront explorer l'univers en monde ouvert et conquérir les étoiles.</p>

              <p>L'action de Starfield se déroule en 2330, à des années-lumière de la planète Terre. Une grande partie de l'histoire tournera autour de l'exploration de la galaxie. Comme c'est courant dans un jeu de rôle, les joueurs pourront créer leur propre personnage. Starfield propose différentes factions dans lesquelles les humains se sont regroupés pour s'installer dans l'espace cosmique.</p>



              <div className='content w-100 d-flex align-items-center py-5 flex-column'>
                <Link to="/wukong" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <button className='pc-btn ' >
                    DIRECTEMENT VERS LES PC Starfield
                  </button>
                </Link>
              </div>



              <p>L'évolution du jeu variera en fonction de la faction choisie, ce qui signifie que différents scénarios de jeu seront possibles. Lors de vos aventures dans l'espace, vous ne serez pas seul, mais accompagné d'un équipage propre qui vous assistera lors des combats spatiaux. Dans ce jeu de rôle en monde ouvert, vous pourrez découvrir des centaines de planètes dans différentes galaxies. Ces planètes sont variées, allant de planètes de glace à des cités industrielles en passant par des formes de vie extraterrestres intelligentes qui les habitent.</p>

              <h4>Starfield Gameplay Trailer</h4>


              <div className='video-container'>
                <iframe width="100%" height="257" src="https://www.youtube.com/embed/kfYEiTdsyas" title="Starfield Official Gameplay Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>


              <h2> <span> Achète un PC Starfield </span> et découvre une expérience de jeu nouvelle génération </h2>
              <p>Ce jeu de rôle de science-fiction repose sur le moteur Creation Engine de Bethesda, qui promet une expérience visuelle époustouflante et une montée en puissance du jeu. Pour profiter pleinement de cette graphique détaillée, Megaport a le PC Gamer Starfield parfait pour toi.</p>

              <h2>Configuration requise pour Starfield</h2>

              <p> Configuration minimale requise pour le PC Starfield :</p>

              <ul>
                <li>Processeur (CPU) : Intel Core i7 6800K / AMD Ryzen 5 2600X</li>
                <li>Mémoire vive (RAM) : 16 Go</li>
                <li>Carte graphique (GPU) : NVIDIA GeForce GTX 1070 Ti / AMD Radeon RX 5700</li>
                <li>Système d'exploitation : Windows 10 à partir de la version 22H2</li>
                <li>Espace de stockage : 125 Go d'espace libre</li>
                <li>Disque dur : SSD requis</li>
              </ul>

              <p> Configuration recommandée officielle pour le PC Starfield :</p>

              <ul>
                <li>Processeur (CPU) : Intel i5 10600K / AMD Ryzen 5 3600X</li>
                <li>Mémoire vive (RAM) : 16 Go</li>
                <li>Carte graphique (GPU) : NVIDIA GeForce RTX 2080 / AMD Radeon RX 6800 XT</li>
                <li>Système d'exploitation : Windows 10 / 11 avec mises à jour</li>
                <li>Espace de stockage : 125 Go d'espace libre</li>
                <li>Disque dur : SSD requis</li>
              </ul>


              <p>Compte tenu des exigences élevées du PC pour Starfield, c'est l'occasion idéale de te procurer un nouveau PC Gamer. C'est pourquoi Megaport propose des PC Gamer Starfield adaptés.</p>

              <p> Pour jouer à Starfield en 1080p Full HD sans problème, nous recommandons au minimum une carte graphique NVIDIA GeForce RTX 4070 ou AMD Radeon RX 7700 XT pour ton PC Starfield.  </p>

              <p>Si tu souhaites jouer à Starfield en 4K, nous te conseillons une carte graphique AMD Radeon RX 7900 XT ou NVIDIA GeForce RTX 4090. Que tu préfères le Full HD ou la 4K, tu trouveras ici le PC gamer Starfield optimal. Découvre l'immensité de l'espace dans une graphique nouvelle génération à couper le souffle.</p>


            </div>


          </div>

        </div>



        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>





        <div className='container ' >


          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1><span> FAQ Starfield </span> - Foire aux questions </h1>
          </div>

        </div>


        <div className="container px-5 ">
          <FAQ />
        </div>



        <div className='fluid-cotainer section-2'>

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <Link to="/pc-pour-jouer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className='pc-btn  ' >
                DÉCOUVRE D'AUTRES PC POUR JOUER
              </button>
            </Link>
          </div>

        </div>



      </div>



    </>
  );
}
