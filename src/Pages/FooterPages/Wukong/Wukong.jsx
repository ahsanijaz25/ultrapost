import React, { useState } from 'react';
import "./Wukong.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Wukong() {

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



  return (
    <>

      <div className='Wukong'>



        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/Wukong.png`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h1> <span> Black Myth: </span> Wukong NVIDIA GeForce RTX Game Bundle </h1>

              <h6>Table des matières</h6>

              <ol>

                <li><a href=""> Qu'est-ce que Black Myth: Wukong ? </a>
                  <ol>
                    <li><a href=""> Le genre Action-RPG </a></li>
                  </ol>

                </li>

                <li><a href="#"> Black Myth: Wukong - Quoi de neuf </a>
                  <ol>
                    <li><a href="#"> Graphismes et personnages dans Black Myth: Wukong </a></li>
                    <li><a href="#"> Black Myth: Wukong - Système de compétences, capacités et gameplay</a></li>
                  </ol>
                </li>

                <li><a href="#"> Acheter un PC pour Black Myth: Wukong - Le PC gaming idéal pour ton jeu d'aventure action </a>
                  <ol>
                    <li><a href="#">Quel processeur pour Black Myth: Wukong ?</a></li>
                    <li><a href="#">Quelle carte graphique pour un PC gaming Black Myth: Wukong ?</a></li>
                    <li><a href="#">Quelle quantité de mémoire vive pour un PC Black Myth: Wukong ?</a></li>
                    <li><a href="#">Quelle est l'utilité d'un SSD pour Black Myth: Wukong ?</a>
                    </li>
                  </ol>
                </li>
                <li><a href="#"> Les configurations requises pour Black Myth: Wukong sur PC  </a></li>
                <li><a href="#"> Joue à Black Myth: Wukong - Découvre les PC gaming Black Myth: Wukong de Megaport </a></li>

              </ol>

              <h6>Tu veux savoir comment activer le bundle GeForce RTX ?</h6>

              <ul>
                <li>Black Myth: Wukong - Activer le bundle NVIDIA GeForce RTX</li>
              </ul>


              <h2> Qu'est-ce que Black Myth: Wukong ? - Le jeu épique d'action de la mythologie chinoise </h2>

              <p>Black Myth: Wukong est un jeu d'action-RPG épique, profondément ancré dans la mythologie chinoise. Tu incarnes l'Élu, qui se lance dans un périple rempli de défis et de merveilles pour découvrir la vérité cachée derrière une légende glorieuse du passé. Avec son histoire captivante et ses graphismes impressionnants, ce jeu t'embarque dans une aventure que tu n’oublieras pas de sitôt. </p>


              <div className='content w-100 d-flex align-items-center py-5 flex-column'>
                <Link to="/wukong" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <button className='pc-btn ' >
                    Accède aux PC Black Myth: Wukong
                  </button>
                </Link>
              </div>



              <h4>Black Myth: Wukong - Les points importants </h4>


              <p>Dans Black Myth: Wukong, tu incarnes le Roi Singe, Sun Wukong, l'une des figures les plus célèbres de la mythologie chinoise, inspirée du roman classique Le Voyage en Occident. L’histoire commence lorsque tu découvres ta destinée en tant que Wukong : dévoiler une légende glorieuse et percer les secrets d'une époque révolue. </p>

              <p>En chemin, tu croiseras diverses créatures et dieux, chacun avec ses propres objectifs et motivations. Certains seront bienveillants, d’autres seront tes ennemis. Ce voyage est rempli de défis qui mettront à l’épreuve ton habileté et tes capacités. En chemin, tu découvriras les pouvoirs cachés de Wukong, bien au-delà de ses compétences physiques. Tu maîtriseras des pouvoirs magiques et la transformation pour affronter tes ennemis et révéler la vérité derrière les événements mystérieux.</p>

              <p>Durant l’aventure, tu devras également faire des choix moraux difficiles, qui influenceront non seulement ton parcours mais aussi le destin du monde qui t'entoure. Black Myth: Wukong est plus qu’un simple RPG d'action – c'est un voyage épique à travers des mythes, des légendes, et les secrets profonds d'un monde imprégné de forces obscures et de sagesses ancestrales.</p>


              <h4><span> Le genre Action-RPG :  </span> Des missions pleines d'action dans un univers fantastique</h4>

              <p>Les jeux de rôle d'action (Action-RPG) combinent des éléments classiques de RPG avec des combats dynamiques en temps réel. Black Myth: Wukong propose une grande variété de compétences, d'équipements et d'options tactiques qui te permettent de créer ton propre style de jeu et de relever les défis que le jeu te réserve.</p>

              <p>La configuration minimale est la condition la plus basse qu’un PC doit remplir pour pouvoir lancer et exécuter un jeu correctement. Ces exigences peuvent varier d’un jeu à un autre. Le but de la configuration minimale est de conseiller une configuration étant capable d’obtenir de faibles performances avec les réglages graphiques les plus bas.</p>


            </div>


          </div>

        </div>



        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>



        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h4> <span> Black Myth: Wukong: </span>  Quoi de neuf ? </h4>

              <p>Black Myth: Wukong est probablement le plus grand jeu de l'année 2024, avec plus de deux millions de joueurs simultanés sur Steam peu après son lancement. Ce jeu établit de nouveaux standards dans le monde du gaming, notamment grâce à ses graphismes époustouflants et son gameplay profond. Le dernier patch 1.0.8, en particulier, a amélioré les taux d’images sur la plupart des cartes graphiques avec des pilotes mis à jour. </p>

              <h4> Graphismes et personnages dans Black Myth: Wukong </h4>

              <p>Les graphismes de Black Myth: Wukong sont tout simplement saisissants. Le jeu utilise les dernières technologies comme le ray tracing et l’upscaling pour créer un monde visuellement impressionnant. Les modèles des personnages et les environnements sont extrêmement détaillés et contribuent à l'atmosphère immersive du jeu. Que tu te promènes dans des forêts luxuriantes ou te retrouves en pleine bataille contre un boss épique, les visuels te captiveront.</p>

              <h4> Black Myth: Wukong : Système de compétences, capacités et gameplay </h4>
              <p> Le gameplay de Black Myth: Wukong se distingue par un système de compétences profond, te permettant de personnaliser ton personnage. Tu peux apprendre et utiliser différentes compétences pour t'adapter aux défis du jeu. Les combats sont rapides et tactiques, chaque ennemi constituant un défi unique. Grâce à la liberté dans le choix des compétences et des armes, tu pourras développer ton propre style de jeu pour progresser dans l'aventure à ta manière. </p>





              <div className='image-container'>
                <img src={`${imgURL}/Wukong2.png`} className='w-100' />
              </div>


              <h2><span> Acheter un PC pour Black Myth: Wukong  </span> - Le meilleur PC gaming pour une action totale
              </h2>


              <p>Pour profiter pleinement de Black Myth: Wukong, il te faut un PC gaming puissant. Que tu joues avec des paramètres moyens, élevés ou ultra-élevés, il est essentiel que ton PC soit à la hauteur des exigences du jeu. </p>

              <h4>Quel processeur est parfait pour Black Myth: Wukong ?</h4>

              <p>Pour une expérience optimale avec des réglages élevés, un processeur comme l'Intel Core i7-9700 ou l'AMD Ryzen 5 5500 est recommandé. Si tu veux jouer en ultra, il est préférable d’opter pour un processeur plus performant comme l'AMD Ryzen 7 7800X3D.</p>



              <h4>Quelle carte graphique choisir pour Black Myth: Wukong ?</h4>

              <p>Le choix de la carte graphique est crucial pour la qualité visuelle de Black Myth: Wukong. Pour jouer en 1080p avec des paramètres élevés, une NVIDIA GeForce RTX 4060 ou 4060 Ti fera l'affaire. Pour une résolution en 4K avec ray tracing, il te faudra une carte puissante comme la NVIDIA GeForce RTX 4070 Ti SUPER ou la RTX 4080 SUPER.</p>

              <h4>Quelle quantité de mémoire vive pour un PC Black Myth: Wukong ?</h4>

              <p>Il est recommandé d’avoir au moins 16 Go de RAM pour un gameplay fluide. Pour des performances maximales et anticiper les futures mises à jour, 32 Go de RAM seraient idéaux.</p>

              <h4>Quelle est l’utilité d’un SSD pour Black Myth: Wukong ?</h4>
              <p> Un SSD est fortement recommandé pour réduire les temps de chargement et améliorer la fluidité du jeu. Bien que le jeu fonctionne sur un disque dur classique, un SSD offre une expérience bien plus agréable, notamment lors des changements rapides de scènes et des textures volumineuses. </p>

              <h2>Configuration requise pour Black Myth: Wukong sur PC</h2>
              <p> Voici les configurations système officielles pour Black Myth: Wukong, afin que tu puisses t'assurer que ton PC est prêt pour l'aventure ultime : </p>

              <h6> Configuration minimale (1080p, réglages moyens):</h6>

              <ul>
                <li> OS : Windows 10/11 (64 bits)</li>
                <li> Processeur : Intel Core i5-8400 ou AMD Ryzen 5 1600</li>
                <li> Carte graphique : NVIDIA GeForce GTX 1060 (6 Go) ou AMD Radeon RX 580 (8 Go)</li>
                <li> RAM : 16 Go</li>
                <li> Stockage : 130 Go (SSD recommandé, HDD pris en charge)</li>
                <li> VRAM : 6 Go</li>
              </ul>

              <h6>Configuration recommandée (1080p, réglages élevés):</h6>

              <ul>
                <li> Processeur : Intel Core i7-9700 ou AMD Ryzen 5 5500</li>
                <li> Carte graphique : NVIDIA GeForce RTX 2060, AMD Radeon RX 5700 XT ou Intel Arc A750</li>
                <li> RAM : 16 Go</li>
                <li> Stockage : 130 Go (SSD recommandé)</li>
                <li>VRAM : 6 Go</li>
              </ul>


              <h6>Configuration ultra (4K, réglages très élevés avec ray tracing):</h6>

              <ul>
                <li> Processeur : Intel Core i7-9700 ou AMD Ryzen 5 5500</li>
                <li> Carte graphique : NVIDIA GeForce RTX 4080 SUPER ou AMD Radeon RX 7800 XT (12 Go de VRAM)</li>
                <li> RAM : 32 Go</li>
                <li> Stockage : 130 Go (SSD recommandé)</li>
                <li>VRAM : 16 Go</li>
              </ul>


              <h2>Instructions d’activation de l’offre GeForce RTX 40 Series Black Myth: Wukong </h2>

              <p> Pour utiliser votre code promotionnel et activer votre exemplaire de Black Myth: Wukong, vous devez disposer de l’application GeForce Experience et d’un compte Steam. Veuillez suivre les étapes suivantes : </p>


              <ol>

                <li>Installez votre carte graphique éligible.</li>

                <li>Installez l’application GeForce Experience ou mettez-la à jour (Version 3.18 ou plus) ou installez la beta de NVIDIA app. </li>
                <li>Lancez GeForce Experience (ou la beta de NVIDIA app) et connectez-vous.</li>
                <li>Ouvrez le menu déroulant Compte puis cliquez sur "ÉCHANGER".</li>
                <li>Recopiez le code promotionnel de votre offre.</li>
                <li>Suivez les instructions à l’écran pour vous connecter via votre compte Steam.</li>
                <li>Sélectionnez l’option d’activation d’un code pour associer votre exemplaire de Black Myth: Wukong à votre compte Steam.</li>
                <li>Lancez Steam pour commencer l’installation.</li>
                <li>En cas de problème, veuillez consulter notre FAQ à l’adresse suivante. Si vous ne parvenez pas à résoudre votre problème, veuillez contacter notre équipe d’assistance.</li>

              </ol>


            </div>
          </div>
        </div>










        <div className='container ' >


          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1>  <span>PC Gamer Black Myth: Wukong</span> de Megaport </h1>
            <p> Découvrez les systèmes recommandés pour une expérience de gaming idéale dans Black Myth : Wukong</p>
          </div>

        </div>



        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>



      </div>



    </>
  );
}
