import React, { useState } from 'react';
import "./CounterStrike.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CounterStrike() {

  const imgURL = ASSET_PATHS.IMG_URL;


  // Sample FAQ data
  const faqData = [
    {
      question: "Combien coûte Counter Strike 2 ?",
      answer: `Counter Strike 2 remplace son prédécesseur CSGO et est jouable gratuitement. Comme le dernier opus de la série est également la propriété de Valve, il est également disponible gratuitement sur Steam`
    },
    {
      question: `Y a-t-il du crossplay dans Counter Strike 2 ?`,
      answer: `Non, à l'heure actuelle, Counter-Strike 2 n'est disponible que sur PC. Il n'est donc pas possible de jouer en crossplay entre différentes plates-formes.`
    },
    {
      question: `Quelle est la meilleure carte graphique pour Counter Strike 2 ?`,
      answer: ` Pour un gameplay fluide avec un bon nombre d'images par seconde (FPS), nous recommandons au minimum une carte graphique NVIDIA RTX 3060 ou AMD RX 6600.`
    },
    {
      question: `D'où vient le nom Counter Strike 2 ?`,
      answer: `Après les jeux Counter-Strike, Counter-Strike: Condition Zero, Counter-Strike: Source et Counter-Strike: Global Offensive, voici venir Counter-Strike 2 en 2023. Mais comment ce nom a-t-il été choisi ? À vrai dire, il ne s'agit pas du deuxième volet de la série de jeux.

Valve n'a encore fait aucune déclaration officielle à ce sujet jusqu'à présent. Beaucoup de joueurs pensent que le nom a été choisi pour coller avec le moteur de jeu maison de Valve, Source 2.`
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
      imgSrc: "CounterStrike2_c1.jpg",
      title: "Sauve le monde",
      description: `Suite à une catastrophe, une grande partie de l'humanité a disparu. Dans "Fortnite Sauve le monde", tu peux jouer en solo ou en coopération avec jusqu'à quatre joueurs. Ton objectif est de récolter du butin et de construire ainsi une forteresse que tu devras défendre la nuit contre les zombies. Il s'agit ici d'une campagne payante.`,
    },
    {
      imgSrc: "CounterStrike2_c2.jpg",
      title: "Battle Royale",
      description: `Battle Royale est le mode le plus connu et le plus joué de Fortnite. 100 joueurs s'affrontent pour survivre sur une carte qui se rétrécit sans cesse. Le dernier joueur ou la dernière équipe gagne la partie. Le mode Battle Royale est disponible avec ou sans construction. On peut y jouer en solo, en duo, en trio ou en escouade. Dans le mode Arène, les joueurs peuvent s'affronter de manière compétitive.`,
    },
    {
      imgSrc: "CounterStrike2_c3.jpg",
      title: "Mode créatif",
      description: `Ici, tu peux créer tes propres mondes et cartes ou tester des cartes déjà construites par la communauté. Il existe une multitude de mini-jeux différents comme les deathruns, les courses ou les combats de boxe. Dans le mode créatif de Fortnite, tu peux t'amuser comme un fou avec tes amis.`,
    },
  ];



  return (
    <>

      <div className='CounterStrike'>


        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/CounterStrike2.jpg`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h1>   <span> Achète ton PC Gamer Counter Strike 2 :  </span>  Performance Gaming optimale </h1>


              <h6>Sommaire</h6>

              <ol>

                <li><a href="">Qu'est-ce que Counter Strike 2 ?</a></li>
                <li><a href="">Cartes de Counter Strike 2 : Quels sont les maps disponibles ?</a></li>
                <li><a href="">La hype Counter Strike dans l'eSport</a></li>
                <li><a href="">Achète ton PC pour Counter Strike 2 - le PC Gamer parfait</a></li>
                <ol>
                  <li><a href="">Quel processeur faut-il pour Counter Strike 2 ?</a></li>
                  <li><a href="">Quelle carte graphique pour un PC Counter Strike 2 ?</a></li>
                  <li><a href="">Combien de RAM a besoin un PC CS2 ?</a></li>
                  <li><a href="">Une SSD est-elle utile pour Counter Strike 2 ?</a></li>
                </ol>

                <li><a href="#">Périphériques pour Counter-Strike : L'équipement de jeu adapté </a></li>
                <li><a href="#">Joue à CS2 - PC Gamer Counter Strike 2 de Megaport </a></li>
                <li><a href="#">FAQ Counter Strike 2 - Questions fréquemment posées</a></li>

              </ol>



              <h2>Qu'est-ce que Counter Strike 2 ? La suite de la série de tir à la première personne populaire</h2>

              <p>Counter Strike (CS abrégé) est l'un des jeux de tir à la première personne les plus populaires sur PC et fait désormais partie intégrante de la scène du gaming. Depuis sa première sortie en 2000, CS a réussi à construire une communauté de fans de plus en plus grande. Aujourd'hui encore, le jeu est développé et publié par l'entreprise de logiciels Valve. Counter Strike se distingue par son gameplay intense basé sur l'équipe et sa profondeur tactique.</p>
              <p>Ce principe de jeu n'a pas changé jusqu'à aujourd'hui et reste le même dans Counter Strike 2. La raison de cette nouvelle version est la mise à jour du moteur Source 2 de Valve. CS2 est sorti à l'été 2023 en tant que mise à jour gratuite du précédent Counter Strike Global Offensive. Avec le nouveau moteur de jeu, il y aura également quelques changements intéressants. En raison de la popularité du jeu, nous te proposons chez Megaport des PC Gaming optimisés pour Counter Strike 2.</p>


              <div className='content w-100 d-flex align-items-center py-5 flex-column'>
                <Link to="/wukong" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <button className='pc-btn ' >
                    DIRECTEMENT VERS LES PC COUNTER STRIKE 2                                                              </button>
                </Link>
              </div>

              <p>Parmi les nouveautés, on peut citer la refonte des armes, de nouveaux modèles de personnages et une meilleure qualité graphique. En plus des ajustements visuels, il y a aussi des nouveautés au niveau du gameplay. Les grenades de fumée se répandront de manière plus réaliste et s'adapteront à leur environnement. Si tu tires à travers la fumée, des trous d'entrée apparaîtront pendant un court laps de temps. Si tu lances une grenade explosive haute (HE) au milieu de la grenade de fumée, celle-ci disparaîtra complètement pendant quelques secondes.</p>

              <p>De plus, Valve a repensé l'interface utilisateur, y compris le menu d'achat, pour améliorer constamment l'expérience de jeu. Le travail sur la qualité audio a également été effectué. Le son a été amélioré et les distances ainsi que l'environnement général peuvent maintenant être perçus de manière plus précise. Avec le nouveau moteur de jeu, les cartes seront également retravaillées. Les cartes sont maintenant plus lumineuses et disposent de nouvelles textures ainsi que d'un meilleur éclairage.</p>

            </div>


          </div>

        </div>



        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1> <span>Cartes de Counter Strike 2 : </span>Quels sont les maps disponibles ?</h1>
          </div>

          <p>Dans CS2, les niveaux populaires bien connus seront toujours présents. Ils seront simplement retravaillés. Dust 2 existe depuis 2001 et est probablement la carte la plus connue de l'univers Counter-Strike. Outre Dust 2, Counter Strike 2 comprend également des classiques tels qu'Inferno, Nuke, Mirage ou Train.</p>


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
              
                </div>
              </div>
            ))}
          </div>
        </div>






        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h4>La hype Counter Strike dans l'eSport</h4>
              <p>Le mode de jeu le plus important du jeu est la compétition. Le déroulement du jeu n'a pas beaucoup changé. Dans un match en mode "First to 16" ou en mode "Short Match" également appelé "First to 9", deux équipes de 5 joueurs s'affrontent. Une équipe a pour tâche de placer la bombe sur l'un des deux sites de bombe prévus. L'autre équipe doit défendre ces sites et empêcher la pose de la bombe. Une manche est également remportée si tous les joueurs de l'équipe adverse sont éliminés. Si la bombe a déjà été posée dans ce cas, elle doit encore être désamorcée par les défenseurs.</p>


              <p>Le jeu de tir tactique CS est l'un des jeux eSports les plus populaires au monde depuis de nombreuses années. La plupart des matchs professionnels se déroulent presque exclusivement dans ce mode. Chaque année, de nombreux tournois LAN et en ligne attirent des milliers de spectateurs et offrent des prix conséquents. Pour être parfaitement équipé dans CS2 et offrir les meilleures performances, tu as besoin du bon matériel. Ici, tu trouveras le PC Gamer adapté à Counter Strike 2.
              </p>



              <div className='video-container my-5'>
                <iframe width="100%" height="303" src="https://www.youtube.com/embed/HSI1wRMK2So" title="The Cathedral of Counter-Strike - ESL One Cologne 2018 (Official Aftermovie)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>


              <h2><span> Achète ton PC pour Counter Strike 2 </span> - le PC Gamer parfait </h2>
              <p>Le jeu de tir en ligne compte plus de 800 000 joueurs chaque jour et est l'un des jeux vidéo les plus joués au monde. Rejoins la communauté et mesure-toi aux autres joueurs en compétition. Tu cherches un PC Gamer parfait pour CS2 ? Nous t'expliquons quelles sont les exigences pour ton PC Counter Strike 2 afin que tu puisses profiter d'une expérience de jeu optimale. Que tu sois un joueur professionnel, un débutant ou un streamer, nous te proposons un large choix.</p>

              <h4>Quel processeur faut-il pour Counter Strike 2 ?</h4>
              <p>Pour une expérience de jeu fluide, nous recommandons un processeur Intel Core i5 12400F ou AMD Ryzen 5 5600. Si tu veux jouer en 4K UHD et être prêt pour les futurs jeux, nous te recommandons un processeur Intel Core i5 13600K ou AMD Ryzen 5 7600X et mieux.</p>

              <h4>Quelle carte graphique pour un PC Counter Strike 2 ?</h4>
              <p>Avec une NVIDIA GeForce RTX 3060 ou une AMD Radeon RX 6600, tu peux jouer à Counter Strike 2 en Full HD (1920x1080) sans problème. Si tu veux jouer en 4K UHD (3840x2160) avec ton PC CS2, choisis plutôt une NVIDIA GeForce RTX 4070 Ti ou une AMD Radeon RX 7900 XT. Avec ces cartes graphiques, tu t'assures une grande compatibilité pour l'avenir.</p>

              <h4>Combien de RAM a besoin un PC CS2 ?</h4>
              <p>Counter Strike 2 fonctionne déjà avec 8 Go de RAM. Cependant, pour plus de sécurité, nous recommandons plutôt d'utiliser 16 Go de RAM. Ainsi, tu auras suffisamment de puissance pour CS2 ainsi que pour d'autres jeux et applications.</p>

              <h4>Une SSD est-elle utile pour Counter Strike 2 ?</h4>
              <p>Nous recommandons d'installer Counter Strike 2 sur un SSD pour réduire les temps de chargement. Tous nos systèmes PC sont équipés en standard d'un SSD.
              </p>

              <h4>Périphériques pour Counter-Strike : <span> L'équipement de jeu adapté </span></h4>

              <p>Si tu veux vraiment te lancer dans le jeu de tir de Valve, tu devrais te procurer un écran Gamer avec un taux de rafraîchissement de 144 Hz ou plus. Un taux de rafraîchissement élevé garantit une meilleure fluidité de l'affichage du gameplay. Les mouvements dans le jeu seront ainsi plus rapides et plus précis. Cela peut être très utile dans un jeu basé sur des réactions rapides comme Counter Strike.</p>

              <p>En plus d'un écran adapté, les autres périphériques ne sont pas à négliger. Une souris Gamer avec un bon capteur permet des mouvements rapides et précis. La sensibilité joue un grand rôle et varie selon le joueur. La plupart des souris Gamer permettent de régler individuellement la sensibilité (DPI).
              </p>

              <p> Chez Megaport, tu trouveras également d'autres accessoires Gaming tels qu'un clavier, un tapis de souris ou un casque pour améliorer ton expérience de jeu dans Counter Strike 2.</p>


              <h4> <span> Joue à CS2  </span> - PC Gamer Counter Strike 2 de Megaport</h4>

              <p>Même 23 ans après sa sortie, Counter Strike reste extrêmement populaire. Le jeu allie tension, tactique et esprit d'équipe. Le jeu est stratégique et est apprécié par les joueurs ambitieux. Le cœur du jeu n'a pas beaucoup changé. On ne change pas une équipe qui gagne. Que tu joues en solo ou en équipe de 5, les joueurs cherchent toujours à s'améliorer.</p>

              <p> Chez Megaport, tu peux désormais acheter ton PC Counter Strike 2 à un prix avantageux. Notre configurateur de PC te permet de personnaliser ton PC CS 2 en fonction de tes besoins. Que tu recherches un PC de milieu de gamme bon marché, un PC haut de gamme ou un PC de streaming, tu trouveras certainement l'ordinateur qui te convient. Nous avons le meilleur PC Gamer pour Counter Strike 2 qui correspond à ton budget et à tes besoins. </p>


            </div>


          </div>

        </div>





        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1><span>Achète ton PC Gamer Counter Strike 2 </span> chez Megaport
            </h1>
          </div>

        </div>


        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>





        <div className='container ' >

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1><span>FAQ Counter Strike 2</span> FAQ Counter Strike 2</h1>
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
