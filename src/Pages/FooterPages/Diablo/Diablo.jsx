import React, { useState } from 'react';
import "./Diablo.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Diablo() {

  const imgURL = ASSET_PATHS.IMG_URL;


  // Sample FAQ data
  const faqData = [
    {
      question: "Quand est sorti Diablo 4 ?",
      answer:
        `La date de sortie de Diablo 4 a été fixée au 6 juin 2023. Diablo 4 est disponible depuis sa sortie sur PC, PS4, PS5, Xbox One et Xbox Series X/S. De plus, le crossplay entre différentes plateformes est pris en charge.
`,
    },
    {
      question: "Diablo 4 est-il en free-to-play ?",
      answer:
        `Non - Blizzard a annoncé que Diablo 4 serait un jeu premium, ce qui signifie qu'il doit être acheté pour y jouer. Diablo 4 est disponible à l'achat sur la plateforme Battle.net de Blizzard.
`,
    },
    {
      question: "Quelle carte graphique faut-il pour Diablo 4 ?",
      answer:
        `Pour jouer à Diablo 4 avec un nombre suffisant d'images par seconde (FPS) en paramètres élevés, nous recommandons une NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 ou mieux pour un PC gamer Diablo 4.

Pour Diablo 4 en UHD (4K) et une bonne sécurité future, une carte graphique de la série RTX 40 de NVIDIA est parfaitement adaptée.`,
    },
    {
      question: "Peut-on jouer à Diablo 4 en crossplay ?",
      answer:
        `Oui - Diablo 4 est disponible sur PC, Playstation 4, Playstation 5, Xbox One et Xbox Series X/S, et prend en charge le crossplay complet. Ainsi, les joueurs de toutes les plateformes peuvent jouer ensemble. Vous pouvez également vous affronter en PvP via le crossplay.`,
    },
    {
      question: "Comment fonctionne le multijoueur de Diablo 4 ?",
      answer:
        `Diablo 4 propose quelques éléments multijoueurs nouveaux par rapport à ses prédécesseurs. Le monde ouvert est partagé avec d'autres joueurs, vous pouvez vous joindre à des amis pour jouer à la campagne et au contenu de fin de partie ensemble. Ainsi, les villes deviennent des centres sociaux pour tous les joueurs actifs. De plus, vous avez la possibilité de rencontrer d'autres joueurs dans la rue ou lors d'événements, de jouer en PvP ou de relever des défis en groupe. Le crossplay et la progression croisée sont pris en charge, ce qui vous permet de jouer avec des joueurs de différentes plateformes et de transférer votre progression.`,
    },
    {
      question: "Quel processeur est recommandé pour Starfield ?",
      answer:
        `Starfield est gourmand en ressources CPU, donc les exigences sont assez élevées. Les processeurs Intel i5 10600K et AMD Ryzen 5 3600X sont recommandés.`,
    },
    {
      question: "Y a-t-il un mode coopératif ?",
      answer:
        `Oui, il y a un mode coopératif dans Diablo 4. Vous pouvez jouer en ligne ou en local avec un ami jusqu'à quatre joueurs. Cependant, ce mode coopératif en canapé n'est disponible que pour les joueurs sur console.

Le mode coopératif vous permet de vivre la campagne et le contenu de fin de partie ensemble et de coordonner avec d'autres joueurs. Vous pouvez également combiner différentes classes et compétences pour combattre les ennemis de manière plus efficace.`,
    },
    {
      question: "Quelles classes existe-t-il dans Diablo 4 ?",
      answer:
        `Au lancement, Diablo 4 comprend cinq classes :

Barbare
Druide
Chasseur
Nécromancien
Sorcier

Blizzard a également annoncé que les joueurs pourront personnaliser l'apparence de leur personnage avant de commencer le jeu. Cela offre un niveau de personnalisation et de polyvalence encore jamais atteint pour Diablo 4.`,
    },

    {
      question: "Y a-t-il un passe de saison (Season Pass) pour Diablo 4 ?",
      answer:
        `Oui, il y a un passe de saison pour Diablo 4. Le passe de saison a une durée de trois mois et propose des récompenses gratuites et payantes. Les récompenses gratuites sont des améliorations de gameplay qui accélèrent la vitesse de montée en niveau d'un nouveau personnage, tandis que les récompenses payantes sont des objets cosmétiques et de la monnaie premium. Le prix du passe de saison est de 10 dollars US (environ 10 euros) par saison.

Le passe de saison de Diablo 4 est similaire à la structure des échelons de Diablo II, où les joueurs créent un nouveau personnage à chaque saison. Chaque saison a son propre passe de saison avec différentes récompenses cosmétiques. Pour obtenir ces récompenses, les joueurs doivent accumuler de l'XP du passe de saison, qu'ils peuvent gagner grâce à des activités normales en jeu. Les récompenses n'affectent pas la puissance de jeu ou l'équilibrage.`,
    },


    {
      question: "Faut-il payer mensuellement pour Diablo 4 ?",
      answer:
        `Oui - Diablo 4 est disponible sur PC, Playstation 4, Playstation 5, Xbox One et Xbox Series X/S, et prend en charge le crossplay complet. Ainsi, les joueurs de toutes les plateformes peuvent jouer ensemble. Vous pouvez également vous affronter en PvP via le crossplay.`,
    },

    {
      question: "Diablo 4 nécessite-t-il une connexion Internet permanente ?",
      answer:
        `Oui, Diablo 4 nécessite une connexion Internet permanente. Cela est dû au fait que Diablo 4 possède un vaste monde ouvert, connecté et partagé, dans lequel vous pouvez rencontrer et interagir avec d'autres joueurs. Il n'y a pas de mode hors ligne pour Diablo 4, mais vous pouvez jouer en solo si vous le souhaitez.`,
    },

    {
      question: "Y a-t-il une arène PvP ou des classements spéciaux dans Diablo 4 ?",
      answer:
        `Oui, il y a une arène PvP dans Diablo 4. Elle est connue sous le nom de "Champs de la Haine" et est une zone optionnelle dans le monde ouvert. Vous pouvez y attaquer d'autres joueurs ou être attaqué.

Vous pouvez également collecter des "Signes de la Haine" que vous pouvez échanger contre des objets spéciaux tels que des montures, des armes ou des armures. Un classement mesurant votre performance en PvP est également disponible.`,
    },

    {
      question: "Quels sont les niveaux de difficulté disponibles dans Diablo 4 ?",
      answer:
        `
Diablo 4 propose six niveaux de difficulté, également appelés "Tiers mondiaux".

Ceux-ci sont :

Tier 1 : Pour les amateurs d'histoire et les débutants absolus
Tier 2 : La difficulté "normale" de Diablo 4
Tiers 3 à 5 : Pour les joueurs avancés cherchant plus de défi
Tier 6 : Pour les experts souhaitant maximiser leur équipement

Les niveaux de difficulté supérieurs ne sont pas disponibles dès le départ, mais doivent être débloqués (entre autres en vainquant des World Bosses qui apparaissent plus tard).
`    },

    {
      question: "Comment fonctionne le nouveau système Paragon dans Diablo 4 ?",
      answer: `Le système Paragon dans Diablo 4 est étendu par le tableau Paragon, qui représente son propre nouvel arbre de compétences où vous pouvez débloquer et améliorer des dizaines de nœuds. Le tableau Paragon vise à offrir un plus grand contrôle sur votre personnage et à soutenir différents styles de jeu. Le système Paragon est débloqué au niveau 50 du personnage.`
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

      <div className='Diablo'>


        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/Diablo2.jpg`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h1> <span> Acheter un PC Gamer Diablo 4 : </span> Performance Gaming optimale  </h1>


              <h6>Sommaire</h6>

              <ol>

                <li><a href="">Qu'est-ce que Diablo 4 ? </a>
                  <ol>
                    <li><a href=""> Le genre d'aventure Hack and Slash</a></li>
                  </ol>

                </li>

                <li><a href="#"> Diablo 4 : Quoi de neuf ? </a>
                  <ol>
                    <li><a href="#"> Graphismes et personnages dans Diablo 4 </a></li>
                    <li><a href="#"> Multijoueur dans Diablo 4</a></li>
                  </ol>
                </li>

                <li><a href="#"> Acheter un PC Diablo 4 - PC Gamer idéal pour ton aventure en donjon </a>
                  <ol>
                    <li><a href="#">Quel processeur est nécessaire pour Diablo 4 ?</a></li>
                    <li><a href="#">Quelle carte graphique est parfaite pour un PC Gamer Diablo 4 ?</a></li>
                    <li><a href="#">QCombien de mémoire vive (RAM) un PC Diablo 4 a-t-il besoin ?</a></li>
                    <li><a href="#">Est-ce qu'un SSD est judicieux pour Diablo 4 ?</a>
                    </li>
                  </ol>
                </li>
                <li><a href="#"> Configuration requise pour Diablo 4 sur PC </a></li>
                <li><a href="#"> FAQ Diablo 4 - Questions fréquemment posées</a></li>

              </ol>

              <h2>Qu'est-ce que Diablo 4 ? - L'univers sombre de Blizzard</h2>

              <p>Le jeu de rôle d'action et d'aventure Hack and Slash Diablo 4 est le dernier titre de la série Diablo, qui en compte désormais quatre, développée par le studio Blizzard Entertainment aux États-Unis. La série Diablo existe depuis 1996. Même après 27 ans, Blizzard continue à rassembler une grande communauté grâce à Diablo 4. Annoncé lors de la BlizzCon, la propre convention de Blizzard, en 2019, Diablo 4 est officiellement disponible sur PC, PlayStation et Xbox depuis le 6 juin 2023. Si tu recherches un PC pour jouer à Diablo 4, nous te proposons différentes configurations de PC gamer Diablo 4 pour répondre à tes besoins. </p>


              <div className='content w-100 d-flex align-items-center py-5 flex-column'>
                <Link to="/wukong" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <button className='pc-btn ' >
                    DIRECTEMENT VERS LES PC DIABLO 4
                  </button>
                </Link>
              </div>



              <h4><span> Introduction à Diablo 4 : </span> Action-RPG, donjons et créatures ténébreuses </h4>


              <p>Le jeu te propose d'abord de choisir l'une des cinq classes jouables : le Barbare, la Sorcière, le Druide, la Rôdeuse et le Nécromancien. Après avoir choisi la classe de personnage, qui détermine le style de jeu de base dans Diablo 4, tu entres dans un vaste monde ouvert. À l'intérieur de ce monde ouvert, le personnage que tu as créé découvre une histoire divisée en plusieurs actes, l'envoyant dans de nombreux donjons générés aléatoirement et sur de vastes champs de bataille. Diablo IV permet de jouer à cette histoire en solo ou en coopération avec jusqu'à quatre joueurs. La carte est générée de manière aléatoire, mais tu peux la parcourir comme un monde cohérent sans temps de chargement.</p>

              <p>À chaque ennemi vaincu, le personnage gagne de l'expérience, qui se traduit par des niveaux. Chaque nouveau niveau permet au joueur d'équiper son personnage de nouvelles compétences. Le système de compétences dans Diablo 4 est très complet et offre une grande liberté pour développer ton propre personnage. L'équipement laissé par chaque ennemi vaincu et que tu peux trouver partout dans le monde du jeu a encore plus d'influence sur ton personnage. Il renforce ta classe et, dans certains cas, te donne de nouvelles compétences. L'équipement dans Diablo est divisé en plusieurs raretés. Plus un objet est rare, plus il confère de compétences spéciales au personnage du joueur.</p>

              <p>Diablo 4, développé par Blizzard, fait directement suite à son prédécesseur réussi, Diablo 3, et raconte l'histoire de Lilith, l'archidémon, qui envahit le monde de Sanctuary après sa résurrection. Une fois la campagne principale terminée, composée d'un prologue, de six actes principaux se déroulant dans les différentes régions de Diablo 4, et d'un épilogue, le joueur peut s'essayer soit au mode Endgame, soit au mode NewGamePlus. Le mode Endgame propose régulièrement des donjons de défi de plus en plus difficiles et des événements. Le mode NewGamePlus permet de rejouer la campagne principale à un niveau de difficulté supérieur.</p>

              <p>Ce qui est tout nouveau dans Diablo 4, ce sont le monde ouvert partagé entre les joueurs en ligne, où tu peux accomplir des quêtes et jouer en coopération avec des joueurs inconnus ou amis, et les Champs de la Haine. Les Champs de la Haine sont de vastes champs de bataille ouverts dans le monde du jeu, où le mode joueur contre joueur (PvP) est toujours actif. Ici, tu peux faire combattre tes personnages contre d'autres joueurs et gagner de précieuses récompenses en cas de victoire.</p>


              <h4>Diablo 4 - Bande-annonce de gameplay</h4>


              <div className='video-container'>
                <iframe width="100%" height="360" src="https://www.youtube.com/embed/H5_tgd1m86I" title="Diablo IV | Bande-annonce du lancement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

              <h4>Le genre <span> Hack and Slash Adventure :</span> Combats de boss et défis tactiques</h4>

              <p>Le "Hack and Slash" (littéralement "Hacher et Trancher") est un genre de jeu vidéo très populaire. Le terme provient du domaine des jeux de rôle et le sous-genre tourne donc principalement autour des jeux de rôle d'action et d'aventure joués en vue à la troisième personne. Le but d'un titre de Hack and Slash est de faire affronter un personnage très puissant contre des hordes d'ennemis plus faibles. Le plaisir de jeu dans ce genre réside généralement dans le spectacle de ces combats, mais aussi dans le défi accru qui survient lorsque, parmi les groupes d'ennemis plus faibles, se trouve parfois un "boss" ou un "élite", qui représente déjà seul un défi pour les joueurs et nécessite de la tactique et de la réactivité.</p>

              <p> Ainsi, les joueurs de Hack and Slash vivent une alternance constante entre le sentiment de découper littéralement des hordes d'ennemis comme un couteau chaud dans du beurre, et la planification tactique de constructions de personnage efficaces pour abattre le prochain boss. Le genre est presque toujours complété par un système de "butin", qui récompense les joueurs en permanence pour chaque ennemi vaincu et chaque quête accomplie par un équipement utilisable.</p>

              <p> Parmi les représentants populaires du genre, en plus de la série Diablo de Blizzard, on peut citer le jeu indépendant néo-zélandais Path of Exile, le jeu français Wolcen: Lords of Mayhem, mais aussi le MMO vampire suédois V Rising. Si tu veux plonger dans le monde du Hack and Slash, nous proposons chez Megaport des PC Gamer Diablo 4 à prix avantageux. </p>


            </div>


          </div>

        </div>



        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>



        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>
              <h4> Mais quels sont les changements concrets auxquels peut s'attendre un vétéran de Diablo 3 dans Diablo 4 </h4>

              <p>Très peu de jeux Hack and Slash ne sont aussi célèbres et appréciés des joueurs que les jeux de la série Diablo. Alors que Diablo 1 (1996) et Diablo 2 (2000) sont considérés comme des pionniers de leur genre, ce n'est qu'avec Diablo 3 (2012) que la série a eu l'occasion de s'ouvrir à un public mondial, comme de nombreux autres jeux de Blizzard. Avec la popularité croissante et le succès sont bien sûr venues de nombreuses modifications par rapport au très acclamé Diablo 2, visant à rendre le jeu plus accessible. Cependant, ces changements n'ont pas été bien accueillis par tous les joueurs. C'est pourquoi le développeur du jeu a décidé de revenir davantage à l'esthétique et aux systèmes du deuxième opus pour le quatrième volet de la série.</p>

              <h4>Graphismes et personnages dans Diablo 4 </h4>

              <p>Comme mentionné précédemment, Diablo 4 s'inspire à nouveau davantage de ses premiers titres, appréciés par les joueurs hardcore et les fans de longue date. Ainsi, le style coloré et comique de Diablo 3, qui était moins sérieux et réaliste, a été remplacé par une esthétique sombre grâce à un tout nouveau moteur graphique. En plus d'un tout nouveau système de rendu en temps réel, d'une technologie d'éclairage de pointe et de systèmes de jour et de nuit dynamiques, cela devrait créer une atmosphère de jeu sombre et immersive pour le joueur.</p>


              <p>Même ton propre personnage joue un rôle beaucoup plus important dans Diablo 4 que dans le précédent : alors que dans Diablo 3, tu choisissais l'un des 7 héros prédéfinis et ne pouvais ensuite que décider de son nom et de son sexe, le dernier Diablo offre beaucoup plus de liberté. Tu peux personnaliser l'apparence de ton personnage avec différents visages, cheveux et autres objets cosmétiques. Ainsi, la classe "Barbare" ne sera pas réservée exclusivement aux personnages masculins, et tu pourras la personnaliser jusqu'aux moindres détails selon tes souhaits.</p>


              <h4>Diablo 4 - Système de compétences, capacités et gameplay</h4>


              <p>L'un des plus grands points de critique des systèmes de Diablo 3 était le système de compétences fortement simplifié. À chaque montée de niveau, tu obtenais automatiquement de nouvelles compétences pour ta classe et tu pouvais les attribuer à un emplacement de compétence libre. Aucun personnage n'était obligé de renoncer à l'une de ses compétences, et il devait simplement choisir quelle compétence du même groupe il voulait activer. Un peu de liberté de choix était apportée par les runes déblocables, qui modifiaient légèrement certaines compétences.</p>

              <p>Dans Diablo 4, comme dans les premiers jeux, il y a des compétences actives et passives. Les compétences actives sont améliorées avec des points attribués à chaque nouveau niveau. Les compétences passives, quant à elles, sont sélectionnées dans un vaste arbre de compétences, similaire à celui du jeu indépendant gratuit Path of Exile.</p>

              <p> Le contenu de fin de partie de Diablo 3 se compose d'un mode Aventure et des Portails des Nephalem. Le mode Aventure peut être joué après la campagne. Tous les actes et points de téléportation rapides sont déjà déverrouillés, mais les quêtes et les éléments de l'histoire sont désactivés. À la place, il y a de nouveaux objectifs comme les primes. Les Portails des Nephalem font également partie du mode Aventure. Ce sont des réalités alternatives représentées sous la forme de donjons générés de manière aléatoire. Ils sont constitués de différents niveaux avec leurs propres monstres. Contrairement à Diablo 4, ils sont composés d'éléments aléatoires de différents actes, et les Portails des Nephalem ne sont ancrés nulle part dans le monde. Une fois que tu as éliminé 100 % des monstres, un boss apparaît. L'objectif est de progresser le plus rapidement possible à travers des niveaux de difficulté élevée. Diablo 4 introduit les Donjons de Clé comme alternative aux Portails des Nephalem. Il s'agit d'un défi similaire, mais tu dois maintenant trouver une clé spéciale pour chaque donjon, qui détermine la difficulté et d'autres caractéristiques du donjon. Les clés ont des affixes aléatoires qui affectent le gameplay. </p>

              <p> Alors que dans les zones relativement petites de Diablo 3, ce n'était pas nécessaire, les joueurs peuvent utiliser des montures collectibles dans le vaste monde de jeu de Diablo 4 pour se déplacer rapidement d'un point à un autre. Les montures peuvent être personnalisées tant sur le plan visuel que sur le plan du gameplay, et elles peuvent même être utilisées en combat ! </p>

              <h4>Multijoueur dans Diablo 4</h4>

              <p>Blizzard a également intégré l'aspect d'un monde de jeu crédible dans la carte de Diablo 4. Alors que les champs de bataille et les donjons de Diablo 3 étaient encore séparés par des séquences de chargement et des chapitres fixes, les joueurs du dernier opus peuvent explorer un monde de jeu ouvert vivant. La disposition de ce monde est générée de manière aléatoire, sauf à l'intérieur des donjons séparés, et grâce à un système de "monde partagé", il est possible d'interagir en permanence avec d'autres joueurs. Diablo IV autorise également pour la première fois le jeu multiplateforme, permettant aux joueurs sur différentes consoles de jouer avec des joueurs sur PC.</p>

              <p>Les systèmes multijoueurs de Diablo 4 permettent également les zones PvP (joueur contre joueur) et des combats axés sur le PvP. Les gagnants peuvent obtenir de l'équipement et des objets cosmétiques en récompense. Diablo 3 offrait également des possibilités limitées de combats PvP, mais ils se limitaient toujours à des duels individuels entre membres de l'équipe et ne promettaient jamais de récompenses au vainqueur.</p>


              <div className='image-container'>
                <img src={`${imgURL}/Diablo3.jpg`} className='w-100' />
              </div>


              <h2><span> Achète un PC gaming Diablo 4   </span> - le PC gaming idéal pour ton aventure en donjon
              </h2>

              <p>Depuis sa sortie en 2012, Diablo 3 compte plus de 70 millions de joueurs dans le monde entier. À ce jour, la franchise Diablo compte un grand nombre de joueurs dans le monde entier et la phase bêta de Diablo 4, avec plus d'un million de joueurs actifs par jour, a été incroyablement réussie. Tu veux aussi te joindre à la lutte entre le ciel et l'enfer et tu cherches le PC gaming Diablo 4 parfait pour jouer ? Chez Megaport, nous t'expliquons quelles sont les exigences que doit remplir ton PC gaming Diablo 4 pour jouer sans problème.</p>

              <h4>Quel processeur est nécessaire pour Diablo 4 ?              </h4>

              <p>Au minimum, un Intel i5-2500K 3,7 GHz ou un AMD FX-8350 4 GHz sont requis. Cependant, nous recommandons au moins un processeur Intel Core i5 ou AMD Ryzen 5 actuels pour que le jeu sur PC se déroule correctement. Si tu veux jouer en 4K UHD ou si tu préfères une certaine sécurité pour l'avenir, opte pour un processeur Intel Core i7 ou AMD Ryzen 7.</p>

              <h4>Quelle carte graphique est parfaite pour un PC gaming Diablo 4 ?
              </h4>

              <p>Une carte graphique NVIDIA GeForce GTX 660 ou AMD Radeon R9 280 est indiquée comme exigence minimale pour pouvoir jouer à Diablo 4. Pour un PC gaming Diablo 4, nous recommandons une NVIDIA GeForce RTX 3060 ou une AMD Radeon RX 6600. Ainsi, tu seras bien équipé pour profiter de Diablo 4 avec des paramètres élevés. Si tu veux jouer avec ton PC gaming Diablo 4 en 4K UHD (3840x2160), tu peux commencer avec une NVIDIA GeForce RTX 3080 ou une AMD Radeon RX 6800 XT. Si tu veux être prêt pour l'avenir et profiter de fonctionnalités comme le DLSS 3 et le Raytracing, nous te recommandons une carte graphique NVIDIA GeForce RTX de la série 40.
              </p>


              <h4> Combien de RAM un PC gaming Diablo 4 a-t-il besoin ?
              </h4>

              <p>8 Go de RAM sont indiqués comme exigence minimale ici. Cependant, nous recommandons déjà 16 Go de RAM pour un PC gaming Diablo 4, et même 32 Go de RAM si tu envisages de jouer en mode Ultra avec une résolution 4K.

              </p>

              <h4>Est-ce qu'un SSD est judicieux pour Diablo 4 ?
              </h4>

              <p>Comme mentionné précédemment, Diablo, grâce à son vaste monde ouvert, n'aura guère de temps de chargement. Cependant, cela signifie aussi que le monde du jeu doit être préchargé en grande partie au démarrage. Pour réduire les temps de chargement, il est donc judicieux d'installer Diablo 4 sur un SSD NVMe. Tu devrais prévoir au moins 90 Go d'espace de stockage disponible.</p>




              <h2><span> Configuration système </span> de Diablo 4 :
              </h2>

              <h6> Configuration système recommandée officielle de Diablo 4 :</h6>

              <ul>
                <li> Processeur (CPU) : Intel Core i5 4670K / AMD Ryzen 3 1300X</li>
                <li> Mémoire vive (RAM) : 16 Go </li>
                <li> Carte graphique (GPU) : NVIDIA GeForce RTX 970 / AMD Radeon RX 470
                </li>
                <li>Système d'exploitation : Windows 10 version 1909 ou ultérieure
                </li>
                <li> Espace de stockage : SSD avec 90 Go d'espace libre
                </li>
              </ul>

              <h6>Configuration système officielle de Diablo 4 pour une résolution 4K Ultra :</h6>

              <ul>
                <li>Processeur (CPU) : Intel Core i7 8700K / AMD Ryzen 7 2700X</li>
                <li> Mémoire vive (RAM) : 32 Go
                </li>
                <li> Carte graphique (GPU) : NVIDIA GeForce RTX 3080 / AMD Radeon RX 6800 XT
                  <ul>
                    <li>NVIDIA GeForce RTX 40 pour une prise en charge complète de DLSS3
                    </li>
                  </ul>
                </li>
                <li> Système d'exploitation : Windows 10 version 1909 ou ultérieure
                </li>
                <li>Espace de stockage : SSD avec 90 Go d'espace libre
                </li>
              </ul>


              <h4> <span> Joue à Diablo 4 - </span> Découvre les PC gaming Diablo de Megaport</h4>


              <p>En résumé, Diablo IV est un jeu très divertissant et exigeant, parfait pour jouer seul ou avec des amis pendant de nombreuses heures. En plus de son statut de RPG en ligne en constante évolution, il poursuit également la saga épique du monde de Diablo, qui a plus de 25 ans, et montre déjà, avec plusieurs millions de précommandes lors de son lancement, un potentiel incroyable pour devenir aussi populaire et durable que son prédécesseur.</p>

              <p>Chez Megaport, tu peux acheter un PC gaming Diablo 4 à un prix abordable. Grâce à notre configurateur de PC, tu peux aussi personnaliser ton PC Diablo selon tes préférences. Nos systèmes Diablo 4 conviennent bien sûr également à d'autres titres précédents comme Diablo 3. Que tu veuilles jouer en Full HD ou que tu recherches un PC gaming haut de gamme pour Diablo 4, nous avons certainement l'ordinateur qui te convient. Tu trouveras ici le meilleur PC gaming Diablo 4 pour tes besoins et ton budget.</p>



            </div>
          </div>
        </div>










        <div className='container ' >


          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1> Acheter un   <span>PC Gamer Diablo 4 </span>  chez Megaport </h1>
          </div>

        </div>



        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>


        <div className='container ' >


          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1><span> FAQ Diablo 4 - </span> Questions fréquemment posées </h1>
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
