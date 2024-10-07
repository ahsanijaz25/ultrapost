import React, { useState } from 'react';
import "./Fortnite.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Fortnite() {

  const imgURL = ASSET_PATHS.IMG_URL;


  // Sample FAQ data
  const faqData = [
    {
      question: "Fortnite est-il gratuit ?",
      answer: `Oui - au moins le mode Battle Royale, le plus populaire et le plus joué, est gratuit. Chez Epic Games, tu peux le télécharger gratuitement et jouer au mode Battle Royale de Fortnite.
Seul le mode campagne " Sauve le monde " est payant.`},
    {
      question: `Comment télécharger Fortnite ?`,
      answer: `Tu trouveras le téléchargement de Fortnite chez Epic Games. Tu peux y télécharger Fortnite gratuitement.`
    },
    {
      question: `À partir de quel âge peut-on jouer à Fortnite ?`,
      answer: `Selon PEGI (Pan-European Game Information), Fortnite est autorisé à partir de 12 ans.`
    },
    {
      question: `Peut-on jouer à Fortnite sur toutes les plates-formes ?`,
      answer: `Oui - Fortnite peut être joué sur PC, Playstation 4 et Playstation 5, Nintendo Switch, XBOX One, XBOX Series et certains smartphones. Le jeu multiplateforme et le crossplay sont pris en charge sur tous les appareils. Tu peux donc jouer sans problème avec tes amis sur ton PC Fortnite, quel que soit l'appareil sur lequel ils se trouvent.

Ceux qui ne veulent pas jouer avec des joueurs d'autres plates-formes ont la possibilité de désactiver le crossplay dans les paramètres.`
    },
    {
      question: `De quel système d'exploitation a-t-on besoin pour jouer à Fortnite ?`,
      answer: `La configuration PC officielle de Fortnite requiert Windows 10 ou Windows 11.`
    },
    {
      question: `Quelle est la meilleure carte graphique pour Fortnite ?`,
      answer: `Pour une expérience de jeu fluide avec suffisamment de FPS, nous recommandons au moins une carte graphique NVIDIA RTX 3070 ou AMD RX 6700 XT.`
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



  const reviewData = [
    {
      imgSrc: "fortnite_c1.jpg",
      title: "Sauve le monde",
      description: `Suite à une catastrophe, une grande partie de l'humanité a disparu. Dans "Fortnite Sauve le monde", tu peux jouer en solo ou en coopération avec jusqu'à quatre joueurs. Ton objectif est de récolter du butin et de construire ainsi une forteresse que tu devras défendre la nuit contre les zombies. Il s'agit ici d'une campagne payante.`,
    },
    {
      imgSrc: "fortnite_c2.jpg",
      title: "Battle Royale",
      description: `Battle Royale est le mode le plus connu et le plus joué de Fortnite. 100 joueurs s'affrontent pour survivre sur une carte qui se rétrécit sans cesse. Le dernier joueur ou la dernière équipe gagne la partie. Le mode Battle Royale est disponible avec ou sans construction. On peut y jouer en solo, en duo, en trio ou en escouade. Dans le mode Arène, les joueurs peuvent s'affronter de manière compétitive.`,
    },
    {
      imgSrc: "fortnite_c3.jpg",
      title: "Mode créatif",
      description: `Ici, tu peux créer tes propres mondes et cartes ou tester des cartes déjà construites par la communauté. Il existe une multitude de mini-jeux différents comme les deathruns, les courses ou les combats de boxe. Dans le mode créatif de Fortnite, tu peux t'amuser comme un fou avec tes amis.`,
    },
  ];



  return (
    <>

      <div className='Fortnite'>


        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/fortnite2.jpg`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h1>   <span> Achète un PC Gamer Fortnite :  </span> Quelques conseils pour une expérience de jeu impeccable </h1>


              <h6>Sommaire</h6>

              <ol>

                <li><a href="">Fortnite, c'est quoi ? </a></li>

                <li><a href="">Quels sont les modes de jeu de Fortnite ? </a></li>
                <li><a href="">Achète un PC Fortnite : Des PC Gamer optimisés pour les meilleures performances</a></li>
                <ol>
                  <li><a href="">Quel processeur est adapté pour Fortnite ?</a></li>
                  <li><a href="">Quelle carte graphique pour un PC Gamer Fortnite ?</a></li>
                  <li><a href="">Combien de mémoire vive faut-il pour un PC Fortnite ?</a></li>
                  <li><a href="">Un SSD est-il utile pour Minecraft ?</a></li>
                </ol>

                <li><a href="#">Configuration requise pour Fortnite sur PC </a></li>
                <li><a href="#">Joue à Fortnite : Découvre les PC Gamer Fortnite de Megaport </a></li>
                <li><a href="#">FAQ Fortnite : Foire aux questions </a></li>


              </ol>

              <h2>Fortnite, c’est quoi ? Un aperçu du célèbre jeu de Battle Royale </h2>
              <p>Le hit Battle Royale Fortnite a été développé par le studio de développement polonais People Can Fly en collaboration avec Epic Games et est sorti en 2017 pour la PlayStation 4, la XBOX One et PC. Depuis, le jeu en ligne est devenu de plus en plus populaire et atteint aujourd'hui plusieurs millions de joueurs par jour. Fortnite fait partie des jeux les plus populaires au monde, avec une scène e-sport professionnelle et des millions de spectateurs. C'est pourquoi nous te proposons chez Megaport des PC Gamer Fortnite optimisés.</p>


              <div className='content w-100 d-flex align-items-center py-5 flex-column'>
                <Link to="/wukong" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <button className='pc-btn ' >
                    Directement vers les PC Fortnite
                  </button>
                </Link>
              </div>

              <p>Sur la scène gaming, le genre Battle Royale connaît un grand succès depuis quelques années. Un grand nombre de joueurs atterrissent dans une zone limitée. Là, ils doivent se battre les uns contre les autres jusqu'à ce qu'il ne reste plus qu'un seul joueur. En règle générale, on atterrit sans aucun équipement. Ce matériel est collecté au fur et à mesure de la partie. Afin que les joueurs ne se cachent pas et qu'il y ait une certaine tension, la zone de jeu se rétrécit peu à peu pour rassembler les joueurs. Le dernier survivant ou la dernière équipe gagne la partie.</p>

              <h4> <span>La hype du Battle Royale : </span> comment Fortnite a redéfini le genre</h4>

              <p>En raison de la compétitivité et de son aspect survival, le genre Battle Royale a gagné en popularité. Parmi les titres Battle Royale populaires, on trouve, en plus de Fortnite, Apex Legends, Call of Duty Warzone et PUBG (PlayerUnknown's Battlegrounds). Qu'est-ce qui rend le Battle Royale Fortnite si particulier ? Le principe de base du Battle Royale est certes le même ici, mais Epic Games a réussi à s'adresser à un large public. Fortnite est jouable gratuitement et disponible sur presque toutes les plates-formes. Le jeu possède un style visuel unique qui le distingue des autres jeux du genre. Le style cartoon coloré séduit aussi bien les joueurs expérimentés que les novices.</p>

              <p>Grâce au crossplay, les joueurs peuvent jouer ensemble sur quasiment toutes les plates-formes. Ainsi, il n'est plus nécessaire de se soucier de la machine sur laquelle jouent ses amis. Grâce au jeu multiplateforme, Epic Games Fortnite a pu créer une communauté énorme et engagée. Par ailleurs, Fortnite présente une caractéristique particulière par rapport aux autres jeux de Battle Royale. Les joueurs peuvent démolir des bâtiments, des voitures, des arbres et bien d'autres choses encore, et ainsi collecter des ressources telles que du bois, des pierres et du métal. Les matériaux collectés permettent de construire des structures telles que des murs, des rampes et des plateformes qui peuvent aider les joueurs dans leur combat pour la survie.</p>




              <div className='video-container my-5'>
                <iframe width="100%" height="285" src="https://www.youtube.com/embed/66t5L6EhPMM" title="Fortnite Battle Royale - Gameplay Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>




            </div>


          </div>

        </div>



        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1> Quels sont les  <span>modes de jeu  </span> disponibles dans Fortnite ?</h1>
          </div>

        </div>



        {/* <cards  */}



        <div className="container my-5">
          <div className="row">
            {reviewData.map((item, index) => (
              <div className="col-lg-4 " key={index}>
                <div className="card-wrapper d-flex flex-column mt-992">
                  <div>
                    <img src={`${imgURL}/${item.imgSrc}`} alt="" className="w-100" />
                  </div>
                  <div className="card-content d-flex justify-content-center bg-black p-3 flex-column align-items-center">
                    <h2 className="text-white text-center">{item.title}</h2>
                    <p className="text-center gamer-para">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>






        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h2><span> Achète un PC Fortnite : </span> des PC Gamer optimisés pour les meilleures performances</h2>
              <p>Fortnite n'est pas seulement l'un des jeux pour consoles les plus populaires, il connaît également un grand succès en tant que jeu sur PC. Tu veux toi aussi te mesurer à d'autres joueurs et tu cherches un PC Gamer pour Fortnite ? Chez Megaport, nous t'indiquons les caractéristiques que ton PC Fortnite doit remplir pour que tu puisses profiter de la meilleure expérience de jeu possible. Tu trouveras ici des PC Gamer spécialement optimisés pour Fortnite. Que tu veuilles acheter un PC Fortnite bon marché ou que tu sois à la recherche d'un PC haut de gamme pour Fortnite, nous te proposons un large choix.</p>

              <h4>Quel processeur est adapté à Fortnite ?</h4>
              <p>Pour que le jeu fonctionne, il faut au moins un Intel Core i3-3225 3,3 GHz. Mais pour pouvoir jouer sans problème, nous recommandons au moins un CPU Intel Core i5 ou AMD Ryzen 5. Ceux qui souhaitent jouer en 4K UHD ou avec des paramètres graphiques élevés et qui préfèrent une configuration plus évoluée pour les jeux à venir, devraient équiper leur PC Gamer Fortnite d'un processeur Intel Core i7 ou AMD Ryzen 7.</p>


              <h4>Quelle carte graphique pour un PC Gamer Fortnite ?</h4>
              <p>Avec une carte graphique NVIDIA GeForce GTX 1650 ou AMD Radeon RX 6500 XT, on peut déjà jouer à Fortnite en Full HD (1920x1080). Pour Fortnite en 2K WQHD (2560x1440), il faut au moins une NVIDIA GeForce RTX 2060 ou AMD Radeon RX 5600 XT. Si tu veux jouer avec ton PC Gamer Fortnite en 4K UHD (3840x2160), tu peux opter pour une NVIDIA GeForce RTX 4070 ou une AMD Radeon RX 6800 XT.</p>

              <p>Si tu veux être équipé de manière optimale en prévision des années à venir, profiter des meilleurs réglages et expérimenter des fonctions supplémentaires comme le ray tracing de Fortnite, nous te recommandons de choisir une NVIDIA GeForce RTX 4090 ou une AMD Radeon RX 7900 XTX.</p>

              <h4> Combien de mémoire vive faut-il pour un PC Fortnite ?</h4>
              <p>Epic Games recommande un minimum de 8 Go de RAM. Pour jouer à Fortnite sans saccades ni problèmes, tu devrais opter pour 16 Go de mémoire vive.</p>


              <h4>Un SSD est-il utile pour Fortnite ?</h4>
              <p>Pour réduire au maximum les temps de chargement, il est préférable d'installer Fortnite sur un SSD NVMe. Les mises à jour régulières peuvent faire varier l'espace disque nécessaire. Par sécurité, tu devrais prévoir au moins 40 Go d'espace libre.</p>

              <h2><span>Configuration requise </span> pour Fortnite sur PC</h2>


              <p>Configuration recommandée :</p>

              <ul>
                <li>Processeur (CPU) : Intel Core i5 7300U 3,5 GHz / AMD Ryzen 3 3300U</li>
                <li>Mémoire vive (RAM) : 16 Go ou plus</li>
                <li>Carte graphique (GPU) : NVIDIA GeForce GTX 960 / AMD Radeon R9 280
                </li>
                <li>Système d'exploitation : Windows 10 minimum</li>
              </ul>

              <p>Configuration requise pour Fortnite en qualité graphique "Épique" :</p>

              <ul>
                <li>Processeur (CPU) : Intel Core i7 8700 / AMD Ryzen 7 3700x</li>
                <li>Mémoire vive (RAM) : 16 Go ou plus</li>
                <li>Carte graphique(GPU) : NVIDIA GeForce RTX 3070 / AMD Radeon RX 6700 XT
                </li>
                <li>Système d'exploitation : Windows 10 minimum
                </li>
              </ul>


              <h4> <span>Joue à Fortnite :</span>  découvre les PC Gamer Fortnite de Megaport </h4>

              <p>Fortnite est un jeu extrêmement populaire qui a séduit des millions de joueurs dans le monde entier. Le Battle Royale offre un mélange unique d'action, de fun et de stratégie. Des événements réguliers, des ingrédients comme la construction et les différents modes offrent aux joueurs une multitude de possibilités. La diversité de Fortnite fait qu'on ne s'y ennuie jamais. Il convient à presque tous les groupes d'âge et permet de s'amuser aussi bien seul qu'avec des amis.</p>

              <p>Chez Megaport, tu peux acheter un PC Fortnite à bas prix. Grâce à notre configurateur PC, tu peux personnaliser ton PC Gamer Fortnite selon tes souhaits. Que tu veuilles seulement jouer en Full HD ou que tu sois à la recherche d'un PC haut de gamme pour Fortnite, nous avons à coup sûr l'ordinateur qu'il te faut. Tu trouveras ici le meilleur PC Gamer Fortnite adapté à tes besoins et à ton budget.</p>


            </div>


          </div>

        </div>





        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1>Achète un  <span>PC Gamer Fortnite </span> chez Megaport
            </h1>
          </div>

        </div>


        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>





        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1><span>FAQ Minecraft :</span> Foire aux questions</h1>
          </div>

        </div>



        <div className="container px-5 ">
          <FAQ />
        </div>



        <div className='fluid-cotainer section-2'>

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <Link to="/pc-pour-jouer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className='pc-btn  ' >
                DÉCOUVRE D'AUTRES PC POUR JOUER                                                          </button>
            </Link>
          </div>

        </div>


      </div>



    </>
  );
}
