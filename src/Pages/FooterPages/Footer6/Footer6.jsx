import React, { useState } from 'react';
import "./Footer6.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer6() {

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
      question: "De combien de VRAM (mémoire vidéo) ai-je besoin ?",
      answer: `La VRAM, c’est la mémoire vive dédiée aux graphismes. Chaque carte graphique dispose d’une quantité déterminée de VRAM, que l’en mesure en Go (gigaoctets). Pour faire simple : plus il y en a, mieux c’est. La VRAM assure le stockage et l’échange en temps réel de données d’images et de graphismes. C’est un des éléments primordiaux à prendre en compte en jeu. Les paramètres tels que la résolution et la qualité des textures ont un impact significatif sur le besoin en VRAM. Si vous comptez jouer dans des résolutions d’ecran élevées, ou que vous aimez régler la qualité sur Ultra, alors vous devrez bien faire attention à la capacité de VRAM. Voici, par exemple, le niveau de quantité mémoire conseillé en fonction de la résolution de votre écran :

Quantité de mémoire	Résolution	Qualité
2 Go	720p	Bas
4 Go	1080p	Moyen
6-8 Go	1440p	Élevé
8-12 Go	2160p (4K)	Ultra
Source : https://www.malekal.com/la-carte-graphique-et-le-gpu-memoire-vram-definition-et-fonctionnement/#Le_GPU_Graphics_Processing_Unit

Si vous souhaitez simplement pouvoir jouer en Full HD (1920×1080) avec une qualité moyenne, nous vous conseillons d’opter pour une carte graphique d’entrée de gamme actuelle telle que la GeForce GTX 1650 avec 4 Go de VRAM.
Si vous êtes équipé d’un écran 2K ou WQHD (2560×1440), alors vous devez vous concentrer sur des modèles bénéficiant de 6 à 8 Go de VRAM. La GeForce RTX 3050 avec ses 8 Go est un bon choix pour ce type de résolution. Pour encore plus de fluidité en résolution 2K, vous pouvez opter pour une GeForce RTX 3060.
Si vous souhaitez profiter de chaque pixel de votre magnifique écran 4K Ultra HD (3840×2160), il va falloir passer à la gamme supérieure. Les GeForce RTX 3070 et leurs 8 Go optimisés de VRAM vous ouvrent grand les portes vers des graphismes nets et regorgeant de détails. Si vous ne laissez rien au hasard et ne souhaitez faire aucun compromis, alors la GeForce RTX 3080 et ses 12 Go de VRAM n’attend que vous.
Avant de porter votre choix sur un modèle, vous devez donc identifier dans un premier temps sur quel type d’écran vous allez jouer. Identifier la résolution maximale de votre moniteur vous aidera à identifier vos besoins. ASTUCE : Vous pouvez commander votre moniteur chez Megaport soit en passant par notre configurateur, soit en vous rendant sur notre page dédiée aux moniteurs : https://www.megaport.fr/accessoires-pc/moniteur/`
    },
    {
      question: `GDDR ? Qu'est-ce que c'est ?`,
      answer: ` Le terme GDDR correspond au type de mémoire utilisé. Tout comme une barrette de RAM utilise de la mémoire DDR (Double Data Rate), une carte graphique utilise de la mémoire de type GDDR (Graphics Double Data Rate). Le type actuel de GDDR est la GDDR6. Cette nouvelle génération de mémoire graphique permet un plus grand et plus rapide transfert de données que l’ancienne génération GDDR5. La GDDR6 peut gérer entre 14 et 16 Go/s, alors que la GDDR5 pointait à 8 Go/s pour une gestion plus rapide des données. Cela se traduit pour vous par une fluidité en jeu plus importante.`
    },
    {
      question: ` Comprendre le processeur graphique (GPU)`,
      answer: ` Toutes les cartes graphiques disposent d’un processeur graphique, que ce soient des Radeon RX ou des GeForce RTX. Il s’agit du cerveau de ces moteurs à graphismes. Le GPU a pour mission de calculer chaque image et de coordonner les transferts de données le plus rapidement possible afin de vous offrir à tout moment une image la plus détaillée possible, correspondant à vos mouvements en jeu. Contrairement au processeur (CPU) qui va superviser les calculs généraux de votre ordinateur, le processeur graphique (GPU) est spécialisé dans l’élaboration d’images, et dans le traitement de données graphiques. Actuellement, deux fabricants de processeurs graphiques se partagent le marché : Nvidia et AMD. Chacun propose différentes gammes en fonction des utilisations. Pour ce qui est du marché du gaming grand public, Nvidia propose actuellement les GeForce RTX et AMD les Radeon RX.

Chaque GPU fonctionne à une fréquence donnée. La fréquence correspond à la vitesse à laquelle un processeur graphique peut calculer des données. Plus elle est élevée, plus le GPU pourra traiter d’informations en une seconde. Les cartes actuelles bénéficient souvent d’une fréquence turbo. Le processeur graphique est dans ce cas overclocké par le fabricant. Cela signifie qu'il pourra calculer encore plus de données, encore plus vite, si jamais cela est nécessaire lors d’une phase de jeu intense en détails par exemple.

Une autre donnée technique importante du GPU est le nombre d’unités de calcul. Leur type varie en fonction des fabricants et des modèles : cœurs de shaders, cœurs CUDA, cœurs de stream. Là encore, plus il y en a, mieux c’est. Le GPU agit comme un chef d’orchestre et réparti chaque tâche, chaque petite opération de calcul de manière optimale afin de tirer le meilleur parti des possibilités offertes par ces milliers d’opérateurs.`
    },
    {
      question: `Pourquoi le Ray Tracing et l’IA procurent les meilleurs graphismes ?`,
      answer: `Vous avez probablement déjà entendu parler du Ray Tracing, la dernière grosse révolution en termes de graphismes. Les développeurs de jeux vidéos sont toujours à la recherche d’effets de plus en plus réalistes. Le Ray Tracing a permis l’une des plus grosses avancées en termes d’imagerie. Cette technologie est prise en charge nativement par les cartes Nvidia GeForce RTX et les cartes AMD Radeon RX. Comme son nom l'indique, le Ray Tracing est une technologie permettant de simuler le tracé de rayons lumineux. Cela permet de simuler des éclairages et ombrages toujours plus réalistes, ainsi que des effets de reflets se rapprochant de la vie réelle. L’ambiance lumineuse des jeux prenant en charge le Ray Tracing est vraiment bluffante de réalisme. De plus en plus de jeux bénéficient des effets incroyables du Ray Tracing.

Mais ce n’est pas tout. Les cartes actuelles incorporent une technologie innovante basée sur l’intelligence artificielle (IA). Chaque fabricant propose ici sa propre technologie : DLSS (Deep Learning Super Sampling) chez Nvidia et FSR (FidelityFX Super Resolution) chez AMD.

Comme expliqué plus haut, calculer pleinement une image détaillée dans une grande résolution demande énormément de capacités de calcul. Traditionnellement, cela signifiait que votre carte graphique devait mettre plus de temps pour vous fournir une image dans une résolution au top comme la 4K (3840×2160) que dans une résolution moyenne telle que la Full HD (1920×1080). Concrètement, votre carte vidéo délivrait moins d’images par seconde, car demander plus de détails revenait à avoir un impact direct sur la fluidité en jeu. L’intelligence artificielle des technologies DLSS et FSR outrepassent ce problème en un tour de passe-passe plus qu’astucieux. Le GPU calcule vos images dans une résolution moindre (ce qui vous assure un grand nombre d’images par seconde). Pendant ce temps, les unités de calcul dotées d’intelligence artificielle font travailler leurs algorithmes d’amélioration d’image en temps réel pour vous délivrer une image en très haute résolution ultra détaillée. Ce processus nécessite beaucoup moins de calcul, consomme moins d’énergie, et vous permet de profiter du meilleur des deux mondes : détails et fluidité.
Sources : https://www.nvidia.com/fr-fr/geforce/technologies/dlss/ | https://www.amd.com/fr/technologies/fidelityfx-super-resolution`
    },
    {
      question: `Avec quel câble dois-je brancher ma carte graphique à mon écran ?`,
      answer: `Sa fonction principale est d’envoyer des images sur votre écran. Chaque carte vidéo est généralement équipée de plusieurs sorties vidéo. Cela vous permet par exemple de brancher plusieurs écrans et de profiter d’un affichage double ou triple écran. Attention cependant ! Le choix du câble vidéo a une influence directe sur la résolution et la fréquence d’affichage.

La majorité des cartes actuelles disposent d’un assortiment de ports HDMI et Display Port. Certaines cartes peuvent également disposer d’un port vidéo USB-C, ou bien de variantes plus anciennes telles que le DVI ou même le VGA. En quoi ces différents standards diffèrent-ils ? C’est ce que nous allons voir maintenant.

Le Display Port est le standard le plus récent. Si vous êtes équipé d’un moniteur et d’une carte graphique modernes, il y a de grandes chances que ces deux appareils disposent de ce type de prise. Il est directement reconnaissable à sa forme asymétrique spécifique.
Le Display Port est le seul standard qui vous permet de profiter de fréquences d’affichage de 144 Hz de votre moniteur adapté en résolution 3840×2160. Il permet, en plus d’un affichage à une top haute fréquence, de bénéficier de très hautes résolutions, jusqu’à 7680×4320. Si votre moniteur est équipé de haut-parleurs, le Display Port peut également transmettre un signal sonore

Le HDMI (High-Definition Multimedia Interface) est aussi grandement répandu et populaire. Ce standard vidéo bien connu est disponible sur de nombreux appareils. Que votre écran soit un moniteur ou bien même un téléviseur, vous devriez pouvoir le brancher par câble HDMI. Avec sa forme plate et symétrique, le HDMI est immédiatement reconnaissable.
Le HDMI est présent sous différentes versions, dont la plus récente : le HDMI 2.1. Celui-ci peut monter jusqu’à une fréquence d’affichage 120 Hz en résolution 3840×2160. Tout comme le Display Port, le HDMI peut également transmettre des informations sonores. Idéal si vous comptez brancher votre ordinateur sur votre téléviseur par exemple !

Le DVI (Digital Visual Interface) est un format moins récent que l’on trouve encore sur de multiples cartes graphiques et écrans d’ordinateur. On le reconnait à ses broches asymétriques ainsi qu’à ses deux vis assurant le maintien du branchement.
Le DVI-D peut afficher des résolutions allant jusqu’à 2560×1600 avec une fréquence de 60 Hz. Le DVI-D a la particularité de pouvoir monter jusqu’à 144 Hz en Full HD 1920×1080. Cependant, contrairement au Display Port et HDMI, le DVI ne peut pas transmettre de signal sonore. Vous devrez donc brancher des hauts parleurs ou écouteurs sur votre PC gamer.

Et enfin le VGA (Video Graphics Array), le plus ancien des standards vidéos encore en utilisation. Le VGA se caractérise par sa prise généralement bleue aux broches symétriques et dispose également de vis de maintien.

Ce port vidéo devient de plus en plus rare sur le matériel moderne. La plupart des cartes ne le proposent plus, mais on peut le trouver encore sur certaines cartes mères et cartes graphiques d’entrée de gamme. En termes d’affichage, le VGA vous offre des fonctions qui paraissent aujourd’hui basiques. Si vous possédez un vieux moniteur, vous pourrez vous attendre au classique 1920×1080 en 60 Hz.`
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
        <h2 className="green mb-4">Questions fréquentes </h2>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };



  return (
    <>

      <div className='Footer6'>



        <div className='fluid-cotainer'>

          <div className='image-container '>
            <img src={`${imgURL}/footerPc-6-1.jpg`} className='w-100' />
          </div>

        </div>


        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>

            <div className='heading'>
              <h1> <span> Comparatif </span> cartes graphiques </h1>
              <p>Suivez notre guide comparatif de cartes graphiques pour vous aider à faire votre choix
              </p>
            </div>

            <div className='content'>



              <p>La carte graphique est en règle générale le composant phare d’un PC gamer, prévu pour jouer aux jeux vidéo. Choisir parmi les meilleures cartes, au meilleur rapport qualité-prix pour vous est un choix important. </p>

              <p>Elle s’assure de vous fournir un maximum d’images avec un maximum de détails dans vos jeux. Vous avez du mal à vous décider et souhaitez en savoir plus sur les différents modèles disponibles ? Vous êtes perdu dans les spécifications techniques, les tests et les comparatifs et aimeriez y voir plus clair ? Votre PC gamer est un gros investissement et vous souhaitez ne pas vous tromper, afin d’en tirer le meilleur parti. Nous le savons ! C’est pourquoi nous vous proposons ici un guide comparatif des meilleures cartes actuellement disponibles.</p>


              <h1>Comment comparer des cartes graphiques ?</h1>
              <p> Il est facile de se perdre dans la jungle de données techniques telles que VRAM, GDDR, CUDA, Shader, Ray Tracing, AMD, Radeon, PCI-E, bus mémoire, V-Sync, G-Sync, OC, LHR… Il est important de bien comprendre ces critères afin de ne pas se laisser embrouiller par les logiciels benchmark de cartes graphiques disponibles en ligne.  </p>
              <p>Nous allons vous présenter les critères à prendre en compte dans le choix d’une carte graphique. Chaque joueur ayant un profil différent et des attentes particulières, il est important de comprendre les éléments à prendre en compte dans un classement de cartes graphiques. Certains joueurs veulent simplement pouvoir jouer sur un écran standard Full HD aux jeux actuels dans de bonnes conditions similaires à celles des consoles de salon, avec un taux d’images par secondes de 30-60 FPS. D’autres misent tout sur la beauté des graphismes et désirent obtenir les textures les plus détaillées et profiter des tout derniers effets en termes de graphismes, tels que le Ray Tracing, et le DLSS. Les joueurs compétitifs esport, et les gamers online cherchent à obtenir le maximum d’images par secondes (IPS, ou plus communément FPS de l’anglais : Frames Per Second) possibles. Certains utilisateurs veulent simplement se focaliser sur une utilisation silencieuse et s'équiper d'un matériel avec un bon systéme de refroidissement. Et bien sûr il y a ceux pour qui les compromis ne sont pas une option.

              </p>

            </div>


          </div>

        </div>





        <div className="container px-5 ">
          <FAQ />
        </div>





        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>


            <div className='content'>

              <h1>Quelle carte graphique choisir pour quels jeux ?
              </h1>

              <p>
                Que soit soit un modèles Nvidia ou AMD, chaque carte est destinée à un niveau de performances particulier. Les FPS obtenus en jeu peuvent varier énormément d’un jeu à l’autre. Ce type de performance dépend aussi de nombreux paramètres extérieurs à la carte vidéo tels que les autres composants utilisés dans votre PC, le systéme de refroidissement, la qualité de graphismes sélectionnée et la résolution choisie. De ce fait, il n’est malheureusement pas possible de donner des chiffres significatifs, mais il est possible de prendre ces tendances comme base de décision :
              </p>

              <ul>
                <li>entrée de gamme : résolution Full HD et graphismes en qualité moyenne
                </li>
                <li>milieu de gamme : résolution WQHD et graphismes en qualité élevée
                </li>
                <li>haut de gamme : résolution Ultra HD et graphismes en qualité ultra
                </li>
              </ul>

              <p>De nombreux logiciels de benchmark de cartes graphiques sont disponibles en ligne et vous permettront de comparer les modèles actuellement disponibles, et même d’obtenir des estimations de FPS en fonction des jeux et des cartes graphiques en comparaison. Les résultats obtenus sur votre matériel peuvent cependant sensiblement varier en comparaison avec les moyennes indiquées sur ces sites. https://www.gpucheck.com/fr-eur/</p>

              <p>Voici par exemple un tableau comparatif des performances attendues en test sur le jeu Assassin’s Creed Valhalla, entre les meilleures cartes actuellement répandues, Nvidia GeForce RTX 3060, RTX 3070, RTX 3080 et AMD Radeon RX 6600 XT :</p>


              <div className='image-container'>
                <img src={`${imgURL}/footerPc-6-2.jpg`} className='w-100' />
              </div>

              <div className='image-container'>
                <img src={`${imgURL}/footerPc-6-3.png`} className='w-100' />
              </div>

              <div className='image-container'>
                <img src={`${imgURL}/footerPc-6-4.png`} className='w-100' />
              </div>



            </div>
          </div>


        </div>




        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>



      </div>



    </>
  );
}
