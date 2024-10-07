import React, { useState } from 'react';
import "./PcPourJouer.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function PcPourJouer() {

  const imgURL = ASSET_PATHS.IMG_URL;


  const cardData = [
    { img: 'Wukong_card.png', text: 'PC Black Myth: Wukong', link: '/wukong' },
    { img: 'Starfield_card.jpg', text: 'PC Starfield', link: '/starfield' },
    { img: 'daiblo_card.jpg', text: 'PC Diablo 4', link: '/diablo' },
    { img: 'counter-strike-2-card.jpg', text: 'PC Counter Strike 2', link: '/counter-strike' },
    { img: 'Fortnite_card.jpg', text: 'PC Fortnite', link: '/fortnite' },
    { img: 'Minecraft_card.jpg', text: 'PC Minecraft', link: '/minecraft' },
    { img: 'Overwatch-2_card.jpg', text: 'PC Overwatch 2', link: '/overwatch' },
  ];


  // Sample FAQ data
  const faqData = [
    {
      question: "Dois-je assembler moi-même le PC Gamer ?",
      answer:
        `Nous te livrons un PC Gamer déjà assemblé, tel que tu l’as configuré et commandé.`,
    },
    {
      question: "Qu’est-ce que la configuration minimale ?",
      answer:
        `La configuration minimale indique l’assemblage de composants matériels nécessaire pour pouvoir exécuter une application ou un jeu.`,
    },
    {
      question: "Qu’est-ce que la configuration recommandée ?",
      answer:
        `La configuration recommandée indique l’assemblage de composants matériels nécessaire pour pouvoir exécuter une application ou un jeun avec des performances optimales.`,
    },
    {
      question: "Comment trouver la configuration requise pour un jeu ?",
      answer:
        `Pour trouver la configuration recommandée pour un jeu, tu peux te baser sur nos éditions “PC pour jouer”, ou simplement recherche la configuration requise en ligne → Ex. : Recherche Google : “Jeu XY” + “Configuration recommandée”.`,
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

      <div className='PcPourJouer'>

        <div className='container ' id="">


          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1>  <span>PC pour jouer</span> chez Megaport </h1>
            <p>  Découvre nos PC pour jouer performants pour un max de FPS dans ton jeu préféré </p>
          </div>


          {/* cards section   */}

          <div className="row my-5 card-section">
          {cardData.map((card, index) => (
        <div className="col-lg-4 col-md-6 p-0" key={index}>
          <div className='card m-2'>
            <div className='card-image'>
              <img src={`${imgURL}/${card.img}`} className='w-100' alt={card.text} />
              <Link to={card.link}>
                <button className='btn-overlay'>{card.text}</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
          </div>


        </div>

        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h1>Les <span> PC pour jouer Megaport : </span> parfaitement adaptés à tes exigences</h1>

              <p> Qui achète à bon marché, achète deux fois. Surtout en matière de logiciels, la bataille pour le prix le plus bas fait rage sur les boutiques en ligne et diverses plateformes d'enchères. Ce qui semble être un avantage pour les clients est souvent négligé : la plupart de ces offres sont des logiciels contrefaits, falsifiés ou non autorisés ! </p>

              <p>L'utilisation de tels logiciels comporte des risques importants, allant des logiciels malveillants à l'espionnage d'informations et à la perte de données. De plus, les copies illégales ne bénéficient d'aucun support du fabricant, rendant impossible les mises à jour de sécurité et de fonctionnalités. Pour être protégé contre ces dangers, que ce soit dans la vie privée ou professionnelle, nous recommandons d'utiliser exclusivement des logiciels authentiques. </p>

              <h4>Des aventures gaming sans compromis avec nos <span> PC pour jouer optimisés </span> </h4>
              <p>Passe aux réglages max sur Cyberpunk 2077, Fortnite, Minecraft, Valorant ou le tout dernier jeu AAA ! Nous analysons les derniers benchmarks et les configurations recommandées actuelles pour te proposer les meilleurs PC pour jouer avec un max de FPS. C’est très simple, il suffit de choisir ton jeu, d’acheter le PC pour jouer qui te convient et tu peux profiter de performances ultimes, des réglages max et de taux de FPS constants.</p>

              <p>En achetant un PC pour jouer de Megaport, tu profites de nombreux avantages. Avec notre configurateur PC, tu peux facilement configurer toi-même ton propre PC Gamer personnalisé. Tu veux plus de puissance et changer de matériel pour un processeur ou une carte graphique plus puissants ? Pas de problème ! Notre configurateur te permet de choisir les composants de ton PC selon tes souhaits en quelques secondes. Tu n’as même pas à te soucier de l’assemblage des composants. Nous assemblons chaque PC pour jouer et les livrons en quelques jours seulement.</p>


              <h4><span> Configuration recommandée : </span> Comment trouver le bon  PC pour jouer ? </h4>

              <p>Les configurations recommandées indiquent les exigences matérielles requises par un logiciel ou un jeu, et permettent de déterminer si un PC est capable ou non d’exécuter cette application ou ce jeu. Se baser sur la configuration recommandée est la meilleure méthode pour être sûr de recevoir un PC gamer parfaitement adapté à ses besoins.</p>

              <p>La configuration minimale est la condition la plus basse qu’un PC doit remplir pour pouvoir lancer et exécuter un jeu correctement. Ces exigences peuvent varier d’un jeu à un autre. Le but de la configuration minimale est de conseiller une configuration étant capable d’obtenir de faibles performances avec les réglages graphiques les plus bas.</p>

              <p>Il n’est pas conseillé de se baser sur ces conditions pour se procurer un nouveau matériel. Jouer à la limite avec peu de FPS n’est pas amusant. Il convient donc de s’orienter sur les configurations recommandées. Celles-ci indiquent quels composants sont nécessaires pour jouer en Full-HD dans de bonnes conditions avec suffisamment de puissance en qualité moyenne à élevée. La configuration recommandée permet d’obtenir des performances moyennes.</p>

              <h6>Que faut-il prendre en compte dans la configuration requise ?</h6>

              <p>En règle générale, la configuration recommandée mentionne les points suivants :</p>

              <ul>

                <li> Processeur (CPU) </li>
                <li> Mémoire (RAM) </li>
                <li> Carte graphique (GPU) </li>
                <li> Système d’exploitation (OS)  </li>
                <li> Espace requis sur le disque dur (HDD / SSD) </li>

              </ul>


              <p>Les exigences d’un jeu peuvent sensiblement varier en fonction de la résolution d’affichage utilisée. Les configurations recommandées permettent généralement d’obtenir au moins 60 FPS en résolution Full HD avec des paramètres graphiques moyens et élevées. Il est recommandé d’opter pour du matériel plus haut de gamme pour les personnes qui accordent une importance particulière aux résolutions élevées et aux paramètres d’image maximum.</p>

              <p>C’est pourquoi nous te proposons différentes configurations PC pour jouer en Full HD (1920x1080), WQHD (2560x1440) ou en 4K UHD (3840x2160). Nous couvrons tous les budgets, du PC d’entrée de gamme bon marché et PC haut de gamme performant. Tu trouveras donc à coup sûr un PC gamer parfaitement adapté à tes besoins. Configure et commande dès maintenant ton PC pour jouer optimisé pour ton jeu préféré chez Megaport.</p>

            </div>


          </div>

        </div>

        <div className="container px-5">
          <FAQ />
        </div>


        <div className='fluid-cotainer section-2'>

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <Link to="/pc-pour-jouer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className='pc-btn  ' >
                Découvre maintenant nos PC pour jouer Megaport !
              </button>
            </Link>
          </div>

        </div>


      </div>



    </>
  );
}
