import React, { useState } from 'react';
import "./Footer7.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer7() {

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
      question: `Entrée de gamme : bureautique, navigation Web, multimédia
`,
      answer: `Si vous souhaitez vous procurer un PC destiné à la bureautique, à de la navigation Internet et à une utilisation multimédia, alors un processeur d’entrée de gamme devrait suffire.

Opter pour un Intel i3 ou AMD Ryzen 3 peut se révéler être un bon choix dans un PC pour lequel vous avez un budget réduit.

Notre conseil : De nombreux modèles processeurs disposent déjà d’une puce graphique intégrée. Cela veut dire que vous n’avez pas besoin de vous procurer une carte graphique PCI-Express dédiée pour obtenir un affichage. Votre CPU pourra prendre cela en charge !

Voici comment les reconnaitre :

Un processeur Intel Core dont la variante n’est pas “F” contiennent une puce Intel HD Graphics
Un processeur AMD Ryzen dont la variante est “G” contiennent une puce Radeon Vega.
Attention cependant ! Bien que ce type de processeur puisse se passer d’une carte graphique dédiée pour afficher des tâches simples sans souci, ils ne sont souvent pas suffisants pour jouer à des jeux gourmands en 3D dans des conditions optimales.`
    },
    {
      question: `Milieu de gamme : gaming, utilisation polyvalente`,
      answer: `Si vous souhaitez vous procurer un PC destiné au gaming sans vouloir casser votre porte-monnaie, alors il est conseillé de s'équiper d'un processeur Intel Core i5 ou AMD Ryzen 5 pour agrémenter votre carte graphique.

Cette gamme visant le grand public propose généralement des processeurs multicœurs performants, sans avoir besoin de viser les records établis. Les processeurs milieu de gamme s’associent parfaitement avec les cartes graphiques de milieu de gamme. Si vous optez pour un modèle actuel, alors vous obtiendrez des performances très satisfaisantes sur tous les jeux actuels et à venir dans les prochaines années.`
    },
    {
      question: `Haut de gamme : hardcore gaming, streaming et rendu`,
      answer: `Si vous n’êtes pas là pour rigoler, il est temps de passer à la gamme supérieure. Nous entendons par là les gammes Intel Core i7, Intel Core i9, AMD Ryzen 7 ou au-delà AMD Ryzen 9.

Ces modèles disposent d’un nombre de cœurs accru en comparaison aux gammes précédentes. Il s’agit d’un point essentiel si vous comptez vous adonner à une utilisation multitâche de tous les instants. La fréquence de calcul et la capacité du cache d'un Ryzen 9 atteint de très hauts niveaux, ainsi, vous n’aurez pas à vous soucier de la capacité de votre machine. Vous pourrez laisser libre cours à votre créativité, sans avoir à vous assurer que votre matériel suivra.`
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
        <h2 className="green mb-4">Questions fréquentes </h2>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };



  return (
    <>

      <div className='Footer7'>



        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/footerPc-6-1.jpg`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>

            <div className='heading'>
              <h1> <span> Comparatif </span>
                processeur </h1>
              <p>Choisissez le meilleur processeur, pour votre PC. Car il n'y a pas que la carte graphique qui est importante pour vos jeux vidéo. Suivez notre guide d'achat avec ce comparatif processeur ci-dessous.</p>
            </div>



            <div className='content'>


              <h1>Le processeur, c’est quoi ?</h1>

              <p>Le CPU (Core Processing Unit), ou processeur PC, est le cerveau de vos appareils électroniques, que ce soit votre ordinateur, smartphone, smartwatch, PC portable, console de jeu ou autre. C'est-à-dire que son rôle principal est de traiter et d'organiser les nombreuses données numériques, et de les échanger entre les composants de votre PC.</p>

              <p>Composé de semi-conducteurs, le processeur PC est un petit composant de forme généralement carrée, de quelques millimètres d’épaisseur. Le processeur se branche sur la carte mère. Vous ne pouvez cependant pas l’apercevoir dans votre PC, car il est situé derrière son système de refroidissement. </p>

              <p>Le processeur PC peut être considéré comme la pièce centrale. Ses fonctions en font le chef d’orchestre de votre configuration. Il va donc sans dire qu'il est préférable de choisir le meilleur processeur, si vous souhaitez que votre ordinateur personnel assure une fluidité exemplaire dans toutes les taches, comme les jeux vidéo par exemple.</p>

              <p>Les meilleurs processeurs grand public répartis en plusieurs catégories, pouvant être résumées au potentiel de puissance de calcul pouvant être généré. Vous avez probablement déjà entendu parler de processeurs Intel, AMD Ryzen 5, AMD Ryzen 7 ou encore AMD Ryzen 9 ? Ces composants High-Tech au rapport qualité-prix imbattable sont un bon plan au top et sont disponibles aux meilleurs prix.</p>

              <p>Des processeurs d’entrée de gamme puissent faire l’affaire pour certains types de jeux. Cependant, il est généralement conseillé d’opter pour le milieu de gamme ou bien le haut de gamme en fonction de vos attentes en termes de gaming.</p>


              <p>Les processeurs bénéficiant de plus de cœurs pourront calculer plus d’informations simultanément. Les processeurs modernes disposent en plus de la technologie Hyper-Threading ou Multithreading. Le Multithreading permet à chaque coeur de CPU de se plier en deux, afin de procéder à plusieurs calculs en même temps. Cela revient à créer des cœurs supplémentaires virtuels. De cette manière, un processeur Ryzen à 6 cœurs bénéficie d’une capacité de calcul équivalente à un CPU 12 cœurs.</p>


              <p>Les jeux actuels sont optimisés pour tirer parti d’un nombre de cœurs élevé. Cependant, il n’est pas nécessaire d’opter pour un processeur avec le plus grand nombre de cœurs disponibles. En moyenne, les jeux actuels sont optimisés pour tirer parti de 4 à 6 cœurs. Certains jeux plus demandeurs en termes de ressources de calcul peuvent monter au-delà.</p>

              <p>Voici un tableau représentant les besoins en termes de cœurs pour quelques jeux populaires : </p>


              <div className='image-container'>
                <img src={`${imgURL}/footerPc-7-1.jpg`} className='w-100' />
              </div>

              <p>Un PC intégrant un processeur d’entrée de gamme comme un processeur Intel Core i3 ou AMD Ryzen 3 vous permettra déjà de jouer à des jeux pour lesquels les développeurs ne recommandent que quelques cœurs.</p>

              <p>Si vous optez pour le milieu de gamme, par exemple un Intel Core i5 ou un AMD Ryzen 5, vous serez paré pour la grosse majorité des jeux actuels.</p>

              <p>Vous pouvez opter pour un processeur haut de gamme, Intel Core i7 ou AMD Ryzen 7 ou supérieur comme un AMD Ryzen 9, si vous souhaitez demander à votre PC plus que “simplement” du jeu. Cela vous permettra de vous adonner au streaming ou au montage vidéo entre autres.</p>


              <h1>Comparatif processeur</h1>
              <p>Quel processeur choisir ? Comment choisir le meilleur processeur ?
              </p>

              <p>Le premier choix qui va s’imposer à vous est celui du fabricant. Ce choix peut paraitre difficile, voire cornélien.</p>

              <p>Essayons de tirer tout cela au clair.</p>

              <p>Il s’agit avant tout d’un choix de préférence de marque. Les idées reçues ont la peau dure. Il est fréquent d’entendre “un processeur Intel Core est mieux pour le gaming”, ou bien “un processeur AMD Ryzen c'est moins cher”, "Les processeurs Intel chauffent plus"ou encore “il y a moins de bugs sur Intel Core”. Qu’en est-il vraiment ?</p>

              <p>Les nombreux comparatifs et benchmarks processeur que l’on peut trouver indiquent que finalement ce choix n’est pas si déterminant que cela. Un processeur Intel Core ou AMD Ryzen offre des performances relativement équivalentes sur des modèles de gamme et de génération similaires. Il suffit de regarder des comparatifs de performance pour s’en rendre compte. Certains jeux fonctionnent légèrement mieux sur des processeurs Intel, et d’autres sur un processeur AMD Ryzen. Il n’y a donc pas de réponse toute faite à ce sujet.</p>

              <p>Il est donc essentiel, en tant que consommateur, de se poser les bonnes questions :
              </p>

              <ul>
                <li>À quelle utilisation mon PC est-il destiné ? (Bureautique ? Multimédia ? Gaming ? Streaming ? Développement ?)</li>
                <li>Quel type de budget est envisagé pour votre achat ?
                </li>
              </ul>

              <p>Il est également important de vous renseigner sur les configurations recommandées par les développeurs des jeux ou des applications que vous souhaitez utiliser.</p>


            </div>


          </div>

        </div>





        <div className="container px-5 ">
          <FAQ />
        </div>





        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>



            <div className='content'>

              <h1>Optimisation</h1>

              <p>Bien entendu, votre processeur ne va pas travailler tout seul. Même les petits génies ont besoin de soutien, et d’une équipe qui leur offre les meilleures conditions possibles sous tout rapport.</p>

              <p>Tout d’abord, le choix de la carte mère. Chaque processeur est issu d’un fabricant particulier, et fait partie d’une génération particulière. En fonction de ces éléments, le format de la prise (ou le socket) de la carte mère peut changer.</p>

              <p>Voici une liste des sockets actuellement disponibles à l'achat et de leur compatibilité avec les processeurs actuels :</p>



              {/* table  */}


              <p>Les chipsets compatibles avec les différents modèles y sont également listés.
              </p>

              <p> Le chipset (ou la puce) de la carte mère est une sorte de miniprocesseur intégré à celle-ci. Ce chipset assure le transfert des informations entre vos composants. Il est prévu pour fonctionner avec des générations de processeurs données. </p>

              <p>Tout comme le reste de la configuration, il est recommandé de choisir un chipset de gamme correspondante à celle de votre processeur.</p>

              <p>Brancher un processeur haut de gamme sur une carte mère avec un chipset d’entrée de gamme ne vous donnera pas grand-chose, si ce n'est des résultats mitigés, au mieux.</p>



              <h4>Refroidissement de votre processeur
              </h4>
              <p>L’un des composants les plus importants à associer à votre processeur est le système de refroidissement. En effet, même le meilleur va beaucoup chauffer en utilisation de part ses réflexions intenses et constantes. Afin de l’aider à garder la tête froide, le processeur doit être équipé d’un système de refroidissement. Contrairement à un PC portable, plusieurs options sont à votre disposition dans une tour PC.</p>

              <p>On trouve actuellement deux familles principales de refroidissement :</p>

              <ul>
                <li>Les refroidissements à air, ou plus communément “ventirad”</li>
                <li>Les refroidissements à liquide, ou plus communément “watercooling”</li>
              </ul>


              <p>Que ce soit avec un ventirad ou un watercooling, un corps de refroidissement en métal conducteur est apposé sur le processeur. Afin d’assurer la conductivité thermique, de la pâte thermique conductive est appliquée entre les deux. Ainsi la chaleur dégagée par le processeur est immédiatement transmise au système de refroidissement. Celui-là transmet ensuite au système d’évacuation.</p>

              <ul>
                <li>Dans le cas d’un ventirad, un radiateur accumule la chaleur qui va être dégagée par un ou plusieurs ventilateurs</li>
                <li>Dans le cas d’un watercooling, le liquide de refroidissement, propulsé par une pompe, se charge de conduire la chaleur à un corps de radiateur situé à une sortie d’aération du boitier.</li>

              </ul>


              <p>Un processeur bien rafraîchi, c’est l’assurance de performances au plus haut niveau et la garantie d’une longévité accrue.</p>


              <h4>Consommation du processeur</h4>

              <p>Le processeur comme tout composant consomme de l’électricité. Il s’agit de l’enveloppe thermique, ou plus communément appelée TDP (de l’anglais Thermal Design Power). Bien que le processeur ne soit pas le composant consommant le plus d’énergie dans votre PC, il se doit de l’associer avec une alimentation adaptée. Cela signifie une alimentation dont la capacité en Watts est suffisante pour l'apport énergétique de votre configuration, et aussi dont la certification assure une protection optimale pour vos composants. Il est conseillé d’opter au minimum pour une certification Bronze.</p>

              <h4>En conclusion, quel est le meilleur processeur du moment ?</h4>
              <p>En conclusion de ce guide d'achat, le choix du meilleur processeur vous revient à l'achat. Il est important pour l'utilisateur de déterminer la gamme nécessaire pour de bonnes performances. Comme indiqué ci-dessus, le choix d'un processeur d'entrée de gamme suffira dans la plupart des cas pour un PC prévus pour des tâches basiques. Le milieu de gamme, par exemple Ryzen 5 ou Ryzen 7, est à envisager pour les jeux vidéo. Le haut de gamme est adapté pour des logiciels à haute productivité, par exemple un Ryzen 9 pour du montage vidéo.</p>

              <p>En règle générale, l'un des nombreux processeurs grand public actuels des gammes Intel Core et AMD Ryzen devrait répondre à vos attentes. Nous recommandons d'opter pour les dernières générations disponibles afin de vous assurer de la meilleure compatibilité, avec vos derniers appareils USB-C par exemple. Opter pour les derniers composants à l'achat vous assure aussi une meilleure longévité.</p>
              <p>Si vous n'êtes pas encore bien sûr de pouvoir finaliser votre choix avant votre achat, nous vous recommandons de visualiser l'un des nombreux tests ou des benchmarks disponibles en ligne. De nombreuses vidéos comparatives entre Intel Core et AMD Ryzen sont disponibles en ligne par exemple, sur lesquelles vous pourrez vous faire une idée du niveau de performance à attendre de telle ou telle gamme.</p>
              <p>Quel que soit le modèle que vous cherchez, vous trouverez dans notre boutique de nombreux PC équipés de processeurs Intel ou d'un processeur AMD au meilleur rapport qualité-prix. Dénichez enfin le bon plan au top avec nos PC incluant les meilleurs processeurs aux meilleurs prix !</p>

            </div>



          </div>


        </div>




        <div className='container ' >


          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1> Nos <span>recommandations PC</span>  </h1>
            <p>Le bon processeur déjà à bord</p>


          </div>

        </div>





        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>



      </div>



    </>
  );
}
