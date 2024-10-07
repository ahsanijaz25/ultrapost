import React, { useState } from 'react';
import "./Minecraft.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Minecraft() {

  const imgURL = ASSET_PATHS.IMG_URL;


  // Sample FAQ data
  const faqData = [
    {
      question: "Peut-on jouer gratuitement à Minecraft ?",
      answer:
        `Il existe une version de démonstration gratuite de Minecraft qui te permet de tester le jeu. Tu peux ensuite l'acheter dans la boutique officielle.

Minecraft et d'autres jeux associés sont également disponibles dans le XBOX Game Pass :

Minecraft : Java & Bedrock Edition
Minecraft Dungeons
Minecraft Legends

Megaport t'offre le XBOX Game Pass pendant un mois pour l'achat d'une sélection de PC Gamer.`,
    },
    {
      question: "Quelle version de Minecraft acheter ?",
      answer: `Minecraft Java ou Bedrock Edition ? Lors de l'achat, tu n'as pas besoin de choisir une édition, car les deux variantes sont incluses dans l'achat.`,
    },
    {
      question: "Peut-on jouer à Minecraft sur toutes les plateformes ?",
      answer: `Non seulement Minecraft est disponible sur presque toutes les plateformes, mais avec l'édition Bedrock, il est même possible de jouer ensemble via Crossplay. Ainsi, il est possible de jouer ensemble sur PC, iOS, Android, XBOX One et XBOX Series, Nintendo Switch et Playstation 4 et Playstation 5.`,
    },
    {
      question: "À quel âge Minecraft est-il adapté ?",
      answer: `Selon PEGI (Pan-European Game Information), Minecraft est autorisé à partir de 6 ans. Les enfants doivent-ils déjà jouer à Minecraft ? Il existe différentes possibilités de rendre le jeu convivial, comme en mode créatif ou à l'aide du niveau de difficulté "pacifique".

Minecraft stimule la créativité, l'imagination, la résolution de problèmes ainsi que la pensée spatiale et offre aux enfants un grand potentiel d'apprentissage. En 2011, l'organisation "MinecraftEdu" a été créée pour permettre un apprentissage créatif et inclusif dans les établissements d'enseignement. La version pédagogique permet aux enfants d'apprendre des sujets tels que la programmation ou les mathématiques de manière interactive.`,
    },
    {
      question: "De quel système d'exploitation a-t-on besoin pour jouer à Minecraft ?",
      answer: `Minecraft est compatible avec les systèmes d'exploitation suivants :

Windows 7 et supérieur
toutes les distributions Linux 64 bits modernes à partir de 2014
macOS : OS X 64 bits avec 10.9 Maverick et plus

Minecraft RTX est disponible à partir de Windows 10.`,
    },
    {
      question: "Quelle est la meilleure carte graphique pour Minecraft ?",
      answer: `En général, Minecraft n'a pas de grandes exigences en matière de carte graphique. Cependant, les mods, shaders et textures pack peuvent augmenter considérablement la puissance nécessaire. Nous recommandons donc de choisir au moins une NVIDIA GeForce RTX 3060.`,
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
      imgSrc: "minecraft_c1.jpg",
      title: "Mode Survie",
      description: `Dans le mode Survie, également appelé Survival, ta mission est de collecter différentes ressources, de construire, de combattre des monstres et, comme son nom l'indique, de survivre.`,
    },
    {
      imgSrc: "minecraft_c2.jpg",
      title: "Mode Hardcore",
      description: `Cette variante de jeu est particulièrement ardue. Le déroulement est certes le même que dans le mode Survie, mais le niveau de difficulté est réglé en permanence sur Difficile. Le plus grand défi est que votre progression et votre monde sont effacés dès que vous mourrez. Le mode Hardcore convient donc plutôt aux joueurs expérimentés qui prennent le risque de tout perdre.`,
    },
    {
      imgSrc: "minecraft_c3.jpg",
      title: "Mode créatif",
      description: `En mode créatif, aussi appelé Creative, tu disposes de ressources illimitées. Tu es en mode vol, tu ne peux pas mourir et tu peux démonter chaque bloc en un seul clic. Ici, l'accent est mis sur la créativité. Mets tes talents de constructeur à l'épreuve et crée des mondes uniques.`,
    },
  ];



  return (
    <>

      <div className='Minecraft'>


        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/minecraft2.jpg`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h1>   <span> PC Gamer Minecraft : </span> quelques conseils pour l'achat</h1>


              <h6>Sommaire</h6>

              <ol>

                <li><a href="">Minecraft, c’est quoi ? </a></li>

                <li><a href=""> Quels sont les modes de jeu disponibles dans Minecraft ?</a></li>
                <li><a href="">Plonge dans de nouveaux mondes avec Minecraft RTX</a></li>
                <li><a href="">Achète un PC Minecraft : le PC Gamer idéal</a></li>
                <ol>
                  <li><a href=""> Quel processeur est nécessaire pour Minecraft ?</a></li>
                  <li><a href="">Quelle carte graphique pour un PC Gamer Minecraft ?</a></li>
                  <li><a href="">Quelle quantité de mémoire vive pour Minecraft ?</a></li>
                  <li><a href="">Un SSD est-il utile pour Minecraft ?</a></li>
                </ol>


                <li><a href="#">Configuration requise pour Minecraft </a></li>
                <li><a href="#">Découvre les PC Gamer Minecraft chez Megaport </a></li>
                <li><a href="#">FAQ Minecraft : Foire aux questions </a></li>


              </ol>

              <h2>Minecraft, c’est quoi ?              </h2>

              <p>Le jeu sandbox a été lancé en 2011 sur PC par le studio de développement suédois Mojang. Depuis 2014, Mojang et son jeu appartiennent à Microsoft. Avec plus de 238 millions d'unités vendues, Minecraft fait partie des jeux les plus populaires au monde. À ce jour, Minecraft reçoit des mises à jour gratuites à intervalles réguliers.</p>
              <p>En tant que sandbox, il n'y a pas d'objectif précis ni d'intrigue fixe. Tu peux décider librement de ce que tu veux faire et expérimenter. Minecraft est particulièrement connu pour sa liberté créative, car il permet au joueur de créer ses propres constructions à partir d'une multitude de blocs cubiques. Tu peux modeler les mondes générés dynamiquement comme tu le souhaites. Il existe de nombreux types de blocs, comme la terre, le bois et la pierre, que tu peux extraire et utiliser. Tu peux également fabriquer des outils et des armes pour te défendre contre les monstres ou les autres joueurs. Tu as un nombre presque infini de possibilités de faire tes preuves dans différents modes de jeu.</p>
              <p>Minecraft peut être joué seul ou en ligne avec d'autres joueurs. En plus des modes de jeu normaux, il existe de nombreuses extensions et serveurs différents avec d'innombrables possibilités d'ajouter des fonctions supplémentaires au jeu.
              </p>


              <div className='content w-100 d-flex align-items-center py-5 flex-column'>
                <Link to="/wukong" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <button className='pc-btn ' >

                    Directement vers les PC Minecraft                                                              </button>
                </Link>
              </div>


            </div>


          </div>

        </div>



        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1> Quels sont les  <span>modes de jeu  </span> disponibles dans Minecraft ?</h1>
          </div>

        </div>



        {/* <cards  */}



        <div className="container my-5">
          <div className="row">
            {reviewData.map((item, index) => (
              <div className="col-lg-4 " key={index}>
                <div className=" card-wrapper d-flex flex-column mt-992">
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

              <h4>Plonge dans de nouveaux mondes avec Minecraft RTX
              </h4>

              <p>Une version du jeu en ray tracing est apparue en 2020 sous le nom de Minecraft RTX. La technologie du ray tracing permet d'obtenir des graphismes et un éclairage à couper le souffle. Avec des ombres réalistes, des reflets, des effets de lumière et des couleurs vives, tu peux vivre une nouvelle expérience dans tes mondes Minecraft. Pour profiter pleinement du ray tracing de Minecraft, un PC Gamer puissant est nécessaire.</p>



              <div className='video-container my-5'>
                <iframe width="100%" height="353" src="https://www.youtube.com/embed/91kxRGeg9wQ" title="Minecraft with RTX | Official GeForce RTX Ray Tracing Reveal Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>


              <h2> <span> Achète un PC Minecraft :  </span> le PC Gamer idéal </h2>
              <p>Avec plus de 150 millions de joueurs mensuels, il fait partie des jeux les plus joués au monde. Tu veux en faire partie et tu cherches un PC Gamer pour Minecraft ? Chez Megaport, nous t'expliquons à quelles conditions ton PC Minecraft doit répondre pour que tu puisses jouer sans problème.</p>


              <h4>Quel est le processeur nécessaire pour Minecraft ?</h4>
              <p>Le minimum requis ici est un Intel i3-3210 3,2 GHz ou un AMD A8-7600 APU 3,1 GHz. Nous recommandons au moins un CPU Intel Core i5 ou AMD Ryzen 5 pour que le jeu fonctionne correctement. Ceux qui veulent jouer en 4K UHD ou qui préfèrent en général une solution plus évolutive devraient opter pour un processeur Intel Core i7 ou AMD Ryzen 7.</p>


              <h4>Quelle carte graphique pour un PC Gamer Minecraft ?</h4>
              <p>Une carte graphique NVIDIA GeForce GTX 700 ou AMD Radeon RX 200 est déjà suffisante pour jouer à Minecraft en Full HD (1920x1080). Pour Minecraft en 2K WQHD (2560x1440), il faut au moins une NVIDIA GeForce GTX 900 ou AMD Radeon RX 500. Si vous voulez jouer avec votre PC Gamer Minecraft en 4K UHD (3840x2160), vous pouvez vous lancer à partir d'une NVIDIA GeForce RTX 3060 ou d'une AMD Radeon RX 6600.</p>
              <p>Ceux qui souhaitent utiliser des fonctions supplémentaires telles que des packs de textures, des shaders ou des mods devraient en général opter pour une meilleure carte graphique. Nous recommandons de choisir au moins une NVIDIA GeForce RTX 4070, également pour des raisons de durabilité.</p>


              <h4>Combien de mémoire vive faut-il pour Minecraft ?
              </h4>

              <p>La condition minimale est ici de 4 Go de RAM. Nous recommandons 8 Go de RAM pour un PC Minecraft et même 16 Go de RAM pour des exigences plus élevées, comme pour Minecraft RTX.</p>

              <h4>Un SSD est-il utile pour Minecraft ?
              </h4>

              <p>Pour réduire les temps de chargement, il peut être judicieux d'installer Minecraft sur un SSD NVMe. Pour cela, tu dois prévoir au moins 4 Go d'espace disque.
              </p>


              <h4> <span> Configuration requise </span> pour Minecraft</h4>

              <p>Configuration système recommandée :</p>

              <ul>
                <li>Processeur (CPU): Intel Core i5 4690 3,5 GHz / AMD A10-7800 3.5 GHz</li>
                <li>Mémoire vive (RAM): 8 Go ou supérieur</li>
                <li>Carte graphique (GPU): NVIDIA GeForce 700 / AMD Radeon RX 200                </li>

                <li>Système d'exploitation : Windows 10</li>
              </ul>




              <p> Minecraft RTX : Configuration requise pour le ray tracing</p>

              <ul>
                <li>Processeur (CPU): Intel Core i5 / AMD Ryzen 5 ou supérieur</li>
                <li>Mémoire vive (RAM): 8 Go ou plus </li>
                <li>Carte graphique (GPU): NVIDIA GeForce RTX 2060 / AMD Radeon RX 6000er Serie ou supérieur</li>
                <li>Système d'exploitation : Windows 10</li>
              </ul>


              <h4>Découvre les PC Gamer Minecraft chez Megaport</h4>

              <p>En résumé, Minecraft est un jeu polyvalent et divertissant qui convient aux joueurs de tous âges. Il favorise la créativité, la résolution de problèmes et l'interaction sociale et est devenu l'un des jeux les plus populaires de tous les temps.</p>

              <p>Chez Megaport, tu peux acheter un PC Minecraft à bas prix. Grâce à notre configurateur PC, tu peux également personnaliser ton PC Gamer Minecraft selon tes souhaits. Que tu veuilles seulement jouer en Full HD ou que tu veuilles essayer Minecraft RTX, nous avons certainement l'ordinateur qu'il te faut. Tu ne veux pas uniquement jouer avec ton PC Minecraft, mais aussi le streamer ? Alors jette un coup d'œil à nos PC de streaming.</p>





              <h2>Minecraft, c’est quoi ?              </h2>

              <p>Le jeu sandbox a été lancé en 2011 sur PC par le studio de développement suédois Mojang. Depuis 2014, Mojang et son jeu appartiennent à Microsoft. Avec plus de 238 millions d'unités vendues, Minecraft fait partie des jeux les plus populaires au monde. À ce jour, Minecraft reçoit des mises à jour gratuites à intervalles réguliers.</p>
              <p>En tant que sandbox, il n'y a pas d'objectif précis ni d'intrigue fixe. Tu peux décider librement de ce que tu veux faire et expérimenter. Minecraft est particulièrement connu pour sa liberté créative, car il permet au joueur de créer ses propres constructions à partir d'une multitude de blocs cubiques. Tu peux modeler les mondes générés dynamiquement comme tu le souhaites. Il existe de nombreux types de blocs, comme la terre, le bois et la pierre, que tu peux extraire et utiliser. Tu peux également fabriquer des outils et des armes pour te défendre contre les monstres ou les autres joueurs. Tu as un nombre presque infini de possibilités de faire tes preuves dans différents modes de jeu.</p>
              <p>Minecraft peut être joué seul ou en ligne avec d'autres joueurs. En plus des modes de jeu normaux, il existe de nombreuses extensions et serveurs différents avec d'innombrables possibilités d'ajouter des fonctions supplémentaires au jeu.
              </p>


              <div className='content w-100 d-flex align-items-center py-5 flex-column'>
                <Link to="/wukong" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <button className='pc-btn ' >

                    Directement vers les PC Minecraft                                                              </button>
                </Link>
              </div>


            </div>


          </div>

        </div>





        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1>Achète un  <span>PC Gamer Minecraft </span> chez Megaport
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
