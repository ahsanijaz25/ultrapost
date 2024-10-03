import React from "react";
import "./PCgamercomplet.css";
import Card from "../Card/Card";

const productCardData = [
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    rating: 4.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
  {
    id: 2,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    rating: 3.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
  {
    id: 3,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    rating: 3.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
];

export default function PCgamercomplet() {
  return (
    <>
      <div className="container pops">
        <div className="d-flex mt-4 font-8">
          <p>
            Accueil <span className="ps-2">&gt;</span>
          </p>
          <p className="ps-2 ">
            PC Gamer <span>&gt;</span>
          </p>
          <p className="ps-2 ">
            PC gamer complet 
          </p>

         
        
        </div>

        <p className="text-end"><img src="../assets/Windows11.png" alt="" /></p>

        <h3>PC gamer complet avec moniteur gaming, souris et clavier gamer</h3>
        <p className="font-8 mb-4">
        Avec nos PC gamer all-in-one, vous recevez un ordinateur tout-en-un high-tech ! En plus d'un ordinateur de bureau, vous recevez immédiatement un moniteur gaming ainsi qu'un ensemble de clavier et de souris gamer. Vous n'avez plus qu'à connecter votre PC fixe et vous pouvez immédiatement lancer vos jeux vidéo ! Découvrez nos offres complètes aux meilleurs prix !
        </p>

        <div className="container-fluid filter-bar">
          <div className="row p-3 I5">
            {/* Trier Dropdown */}
            <div className="col-lg-2 ">
              <div className="dropdown w-100 IDrop">
                <button
                  className="btn dropdown-toggle w-100"
                  type="button"
                  id="sortDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Trier
                </button>
                <ul className="dropdown-menu " aria-labelledby="sortDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Prix Dropdown */}
            <div className="col-lg-2">
              <div className="dropdown w-100 IDrop">
                <button
                  className="btn dropdown-toggle w-100"
                  type="button"
                  id="priceDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Prix
                </button>
                <ul className="dropdown-menu" aria-labelledby="priceDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Processor Dropdown */}
            <div className="col-lg-2">
              <div className="dropdown w-100 PDrop">
                <button
                  className="btn dropdown-toggle w-100"
                  type="button"
                  id="priceDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Processor
                </button>
                <ul className="dropdown-menu" aria-labelledby="priceDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Carte Graphique Dropdown */}
            <div className="col-lg-2">
              <div className="dropdown IDrop">
                <button
                  className="btn dropdown-toggle w-100"
                  type="button"
                  id="gpuDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Carte Graphique
                </button>
                <ul className="dropdown-menu" aria-labelledby="gpuDropdown">
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu1"
                      />
                      <label className="form-check-label" htmlFor="gpu1">
                        Nvidia GeForce RTX 3050 (3)
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu2"
                      />
                      <label className="form-check-label" htmlFor="gpu2">
                        Nvidia GeForce RTX 3060 (3)
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu3"
                      />
                      <label className="form-check-label" htmlFor="gpu3">
                        Nvidia GeForce RTX 4060 Ti (3)
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu4"
                      />
                      <label className="form-check-label" htmlFor="gpu4">
                        Nvidia GeForce RTX 4070 Super (1)
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* SSD Dropdown */}
            <div className="col-lg-2">
              <div className="dropdown IDrop">
                <button
                  className="btn dropdown-toggle w-100"
                  type="button"
                  id="ssdDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SSD
                </button>
                <ul className="dropdown-menu" aria-labelledby="ssdDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      512GB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      1TB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2TB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* RAM Dropdown */}
            <div className="col-lg-2">
              <div className="dropdown IDrop">
                <button
                  className="btn dropdown-toggle w-100"
                  type="button"
                  id="ramDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RAM
                </button>
                <ul className="dropdown-menu" aria-labelledby="ramDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      16GB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      32GB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      64GB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Card productCardData={productCardData} />
      </div>

      <div className="I5-back py-5">
        <div className="container pops">
          <div className=" text-white">
            <h4>Acheter un PC gamer complet Megaport et être parfaitement équipé pour les jeux vidéo</h4>
            <p className="gray ">Avec un ensemble PC gamer complet de Megaport, tous les accessoires nécessaires pour le gaming sont déjà inclus. Nous assemblons pour vous le meilleur PC complet avec un rapport qualité-prix optimal. Vous pouvez donc acheter en toute simplicité votre ordinateur tout-en-un et recevoir tout le matériel livré chez vous sans complication. Découvrez notre large gamme d'ensembles de </p>
       


            <h4>PC gamer AiO avec moniteur gaming, souris et clavier gamer</h4>

          <p className="gray">Lors de l'achat d'un PC de bureau tout-en-un, vous recevez déjà tous les accessoires requis pour commencer à utiliser votre nouvelle configuration gaming immédiatement. Choisissez parmi notre vaste gamme d'accessoires de souris et de clavier RGB pour trouver celui qui convient à votre style. Vous recevrez également un moniteur PC gamer adapté avec lequel vous pourrez profiter immédiatement de votre nouvel ordinateur tout-en-un. Des temps de réponse rapides et des contrastes élevés caractérisent notre sélection de moniteurs gaming de marque de fabricants de qualité tels que Samsung, ASUS, MSI, BenQ et Philips. Découvrez la qualité de nos PC gaming tout-en-un aux meilleurs prix !</p>
        
            
          <h4>Tout ordinateur gamer a besoin d'une carte graphique puissante</h4>
          <p className="gray">En général, une carte graphique NVIDIA rapide est recommandée pour un PC fixe AiO. Vous devriez choisir au moins une carte graphique NVIDIA GeForce GTX 1660 avec 6 Go de mémoire vidéo pour votre ordinateur tout-en-un. Pour obtenir encore plus de performances et de puissance pour votre PC gaming, une NVIDIA GeForce RTX 3060 avec 12 Go de VRAM ou une RTX 3070 avec 8 Go de mémoire vidéo est recommandée. Pour une sécurité future maximale dans votre ensemble PC gamer complet, vous devriez choisir la GeForce RTX 3080 exceptionnelle et pour le coup de pouce ultime de haute gamme, la RTX 3090. Votre ordinateur de bureau AiO est donc prêt pour le gaming pour les années à venir. Ceux qui veulent le meilleur PC pour le gaming optent pour une carte graphique de la série GeForce RTX 30.</p>
        
          <p className="gray">
          La reproduction d'image parfaite des cartes graphiques NVIDIA résulte d'une architecture GPU moderne, d'une liaison mémoire généreuse (256 bits) et d'une excellente mémoire graphique (+ de 8 Go). Associé à la dernière interface logicielle DirectX 12, cela représente une symbiose harmonieuse de la technologie la plus moderne pour une reproduction d'image brillante pour votre PC gamer all-in-one. Lorsque vous achetez un ordinateur tout-en-un, un moniteur adapté est inclus pour que vous puissiez commencer immédiatement et profiter de la qualité graphique complète.
          </p>

          <h4 className=" mt-4">L'achat d'un PC gamer complet vaut toujours le coup !</h4>
          
         
          <p className="gray">En 2022, la compétition pour la meilleure qualité graphique ne s'arrête pas dans le monde des jeux vidéo. Les célèbres éditeurs de jeux Electronic Arts, Ubisoft, Bethesda, Capcom et Activision Blizzard ont déjà publié des hits et en ont encore beaucoup d'autres en réserve. Avec des titres phares tels que Cyberpunk 2077, Metro: Exodus, Horizon Zero Dawn, Anno 1800 et Assasin's Creed Valhalla, vous et votre nouveau PC de bureau AiO serez bien occupés. Vous allez pouvoir vous plonger pleinement dans des jeux vidéo comme Doom Eternal, GTA V, Tomb Raider, Tokyo Ghostwire. Bien sûr, l'achat d'un PC gamer tout-en-un est également rentable si vous souhaitez profiter des nouvelles mises à jour de Call of Duty ou de Battlefield. Les incontournables en ligne tels que Fortnite, Playerunknown's Battlegrounds (PUBG), Overwatch, Rainbow Six Siege et Minecraft sont aussi toujours très demandés, ce qui justifie l'achat d'un ordinateur tailllé pour le gaming.</p>

          <p className="gray">Pour profiter du meilleur PC, nous nous fournissons uniquement auprès de fabricants de marque de qualité. Chaque composant de votre ordinateur tout-en-un est officiel, tel que la carte graphique, le processeur Intel Core, la mémoire vive et la carte mère. Ainsi, vous apprécierez votre nouvel ensemble de PC de jeu pendant très longtemps.</p>

          <h4 className=" mt-4">Performance maximale du processeur pour des calculs complexes</h4>

          <p className="gray">Cependant, la meilleure carte graphique ne sert à rien sans un processeur puissant dans votre <span className="green underline">PC gamer</span>. L'équilibre est nécessaire avec, par exemple, un Intel Core i5 pour continuer à profiter des futurs blockbusters de jeux durant de nombreuses années. L'Intel Core i5 contient six cœurs jusqu'à 4,1 GHz (4,8 GHz en mode Turbo). Donc, si vous avez besoin de quelques fps supplémentaires, optez pour une variante à fréquence plus élevée, comme celle d'un Intel Core i7. Ici, les spécifications sont similaires, une fréquence d'horloge de 3,8 GHz en mode normal et même 5,2 GHz en mode Turbo apportent encore plus de puissance gaming pour votre nouveau PC gamer complet. Ainsi, vos jeux fonctionneront parfaitement. Les derniers processeurs Intel Core i7 de la génération Alder Lake ont même 12 cœurs et 20 threads en tout. Avec un PC gaming complet aussi puissant, vous pourrez profiter des prochains monstres graphiques du gaming. Intel continue d'améliorer ses processeurs. La 12ᵉ génération de processeurs Intel Core Alder Lake-S est déjà disponible et augmente encore le nombre de cœurs, améliorant les performances de jeu de votre ordinateur tout-en-un d'environ 40 %.</p>
        
        <p className="gray">AMD continue également à développer sa technologie de processeurs. La gamme actuelle Ryzen 5 et Ryzen 7 d'AMD offre une excellente performance grâce à ses 6, 8 ou 12 cœurs de processeur, malgré une fréquence de base inférieure. Cependant, la fréquence d'horloge devient de moins en moins importante, car les programmes sont de mieux en mieux optimisés pour les processeurs multithread et peuvent donc tirer parti de nombreux cœurs de processeur. Les processeurs d'AMD sont de ce fait aussi une excellente option pour votre futur ordinateur de bureau complet.</p>

        <h4 className=" mt-4">Complétez votre ordinateur gamer tout-en-un</h4>

        <p className="gray">Megaport vous donne la possibilité de compléter votre PC de bureau AiO. Vous pouvez ajouter un disque dur SSD, ou un disque dur HDD dans votre PC fixe. Vous pouvez même équiper votre ordinateur d'un disque dur M.2 NVMe. Si vous choisissez Windows 11 dans la catégorie système d'exploitation, nous installons la version de Windows 11 que vous avez choisie sur le disque dur principal de votre ordinateur. Megaport est un partenaire officiel de Microsoft. Chez nous vous êtes certain de recevoir un système d'exploitation Windows 11 officiel. Pensez-également à inclure une carte Wi-Fi dans votre PC gamer. La carte Wi-Fi vous permet de vous connecter à Internet sans avoir besoin de tirer un long câble entre votre routeur et votre ordinateur.</p>

        <h4 className=" mt-4">Résumé : Matériel parfait pour un ordinateur parfaitement configuré</h4>

        <p className="gray">
        Pour profiter pleinement des nouveautés à venir en 2022 et au-delà, il est important de choisir les composants avec soin lors de la configuration d'un ordinateur complet.
        </p>

        <ul className="gray font-8">
            <li>Système d'exploitation : Windows 11 Home</li>
            <li>Carte graphique : Nvidia GeForce RTX 3070 / RTX 3080 ou AMD Radeon RX 6700 XT</li>
            <li>Processeur : au moins un Intel Core i5 ou AMD Ryzen 5 pour une expérience de jeu optimale, un processeur Intel Core i7 ou AMD Ryzen 7</li>
            <li>RAM : 16 Go DDR4 d'un fabricant de marque</li>
            <li>Carte mère : fabricants de marque tels qu'ASUS, MSI ou Gigabyte</li>
            <li>Écran de 24 pouces en Full HD 1920x1080 d'ASUS, MSI ou Samsung</li>
            <li>Souris, clavier et casque gamer</li>
        </ul>

        <p className="gray">
        En prenant en compte ces éléments, vous êtes bien équipé pour les années à venir et pouvez vous concentrer totalement sur les jeux. Lorsque vous achetez un ordinateur tout-en-un configuré par Megaport, vous obtenez un matériel informatique de qualité exceptionnelle. À vous de jouer avec votre <span className="green underline">PC gamer</span> De UltraPort!
        </p>
        
         
          </div>
         

          


        </div>
      </div>
    </>
  );
}
