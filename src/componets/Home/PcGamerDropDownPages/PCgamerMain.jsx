import React from "react";
import "./PCgamerMain.css";
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

export default function PCgamerMain() {
  return (
    <>
      <div className="container pops">
        <div className="d-flex mt-4 font-8">
          <p>
            Accueil <span className="ps-2">&gt;</span>
          </p>
          <p className="ps-2 ">PC Gamer</p>
        </div>

        <p className="text-end">
          <img src="../assets/Windows11.png" alt="" />
        </p>

        <h3 className="bold">
          PC gamer Megaport - Performances haut de gamme à prix mini
        </h3>

        <p className="gray mt-4">
          Chez Megaport, découvre une sélection étendue de PC gaming de qualité
          supérieure avec des composants de MSI, ASUS, Corsair et bien d'autres
          ! Tu peux choisir entre des{" "}
          <span className="green">CPU Intel ou AMD</span> ou si tu préfères
          utiliser des{" "}
          <span className="green">cartes graphiques Nvidia ou AMD</span>.
          Utilise notre configurateur de PC sur megaport.fr pour créer ton pc
          gamer personnel.{" "}
        </p>

        <p className="gray mt-4">
          Depuis plus de 18 ans et dans de nombreux pays, Megaport veille à ce
          que ses clients obtiennent le meilleur PC gamer pas cher ! Avec le
          meilleur service, une qualité élevée et{" "}
          <span className="green"> des années d'expertise</span>, plus rien ne
          peut t'empêcher d'avoir le PC de tes rêves.
        </p>

        <div className="row">
          <div className="col-12">
            <img src="../assets/pcgamer.jpg" alt="" className="w-100" />
          </div>
        </div>

        <div className="container-fluid filter-bar mt-4">
          <div className="py-3 ps-3 d-flex border-pc overflow">
            <div>
              {" "}
              PC Gamer <span className="counter">(97)</span>
            </div>
            <div className="ps-3">
              {" "}
              PC Gamer Intel <span className="counter">(34)</span>
            </div>
            <div className="ps-3">
              {" "}
              PC Gamer AMD <span className="counter">(37)</span>
            </div>
            <div className="ps-3">
              {" "}
              PC gamer complet <span className="counter">(14)</span>
            </div>
            <div className="ps-3">
              {" "}
              PC Gamer fixe <span className="counter">(11)</span>
            </div>
            <div className="ps-3">
              {" "}
              PC gamer pour tout budget <span className="counter">(9)</span>
            </div>
            <div className="ps-3">
              {" "}
              Windows 11 <span className="counter">(0)</span>
            </div>
          </div>
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

      <div className="gray-back">
        <div className="container">
          <div className="py-5 text-center ">
            <h2>
              Simplifie-toi la vie avec <span className="green">Ultraport</span>{" "}
              pour l'achat de ton PC <br /> gamer
            </h2>

            <div className=" d-flex justify-content-center align-items-center flex-column">
              <p className="simple-width">
                Tu cherches un PC gamer pas cher et performant ?
                <span className="green">Ultraport</span> est là pour toi !
                Sélectionne le modèle qui te correspond pour tes futures
                aventures gaming et personnalise-le selon tes envies. Que tu
                optes pour un système gaming pré-assemblé ou que tu le{" "}
                <span className="green"> configures toi-même</span> , chez
                Megaport, tu trouveras toujours le PC parfait à un prix
                compétitif.
              </p>

              <p className="mt-3 simple-width">
                En bref : pour commander en toute simplicité ton tour pc gamer
                idéal en ligne et le recevoir en toute sécurité chez toi,
                Megaport est ton partenaire gaming de confiance{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between py-5 pops">
        <div className="row">
          <div className="col-lg-9">
            <h2>
              Configure toi-même ton PC gamer <br />
              selon tes préférences
            </h2>
            <p className="mt-5 gray">
              Tous les PC gamer de Megaport sont personnalisables, avec des
              composants de qualité supérieure de grandes marques comme MSI,
              Corsair, LianLi et bien d'autres.
            </p>
            <p className="gray">
              Tu peux décider librement si tu veux les meilleures performances
              avec les derniers processeurs Intel Core ou les puissants
              processeurs AMD. Nous avons les processeurs les plus modernes des
              deux fournisseurs et nous t'aidons bien sûr volontiers à choisir
              le processeur de ton Ordinateur gamer !
            </p>

            <p className="gray">
              Le grand choix de pc gamer ne s'arrête pas aux processeurs. Pour
              les cartes graphiques aussi, Megaport propose les derniers
              modèles, comme la série{" "}
              <span className="green underline"> NVIDIA GeForce RTX 4000</span>{" "}
              ou la <span className="green underline">série RX7000 d'AMD</span>,
              pour une expérience visuelle optimale. Nous serons ravis de
              t'aider à choisir le bon composant !
            </p>
          </div>
          <div className="col-lg-3">
            <img src="../assets/g1.jpg" alt="" className="w-100" />
          </div>
        </div>
      </div>

      <div className="gray-back">
        <div className="d-flex justify-content-between py-5 pops">
          <div className="row">
            <div className="col-lg-3">
              <img src="../assets/g2.jpg" alt="" className="w-100" />
            </div>
            <div className="col-lg-9">
              <h2>
                La meilleure sélection de ordinateur gaming <br /> pour tous les
                besoins
              </h2>
              <p className="mt-5 gray">
                Les attentes vis-à-vis d'un Ordinateur Gaming sont variées et
                très personnelles. Certains ont besoin d'un PC Gamer haut de
                gamme pour des applications exigeantes, tandis que d'autres se
                contenteront d'un PC gaming pour débuter dans l'univers du jeu
                vidéo. Cependant, le budget disponible joue souvent un rôle clé.
                C'est pourquoi chez Megaport, nous avons créé des{" "}
                <span className="green underline">
                  PC pour différentes gammes de prix
                </span>
                , capables de répondre à toutes sortes de besoins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between py-5 pops">
        <div className="row">
          <div className="col-lg-3">
            <img src="../assets/g3.jpg" alt="" className="w-100" />
          </div>

          <div className="col-lg-9">
            <h2>
              Utiliser parfaitement son PC gamer - facilement <br /> et sans
              attendre
            </h2>
            <p className="mt-5 gray">
              Acheter un PC gamer parfait chez Megaport n'est pas compliqué et
              se fait rapidement. C'est tout aussi simple une fois que tu as
              reçu ton Ordinateur gamer. Le PC arrive rapidement et en toute
              sécurité chez toi, il est entièrement assemblé et prêt à l'emploi.
              Pour que tu n'aies à t'occuper de rien d'autre, tu peux commander
              tous les <span className="green underline">périphériques</span>{" "}
              chez Megaport. Que tu aies besoin d'un{" "}
              <span className="green underline">Écran gaming</span> de MSI ou
              d'ASUS ou d'une <span className="green underline">souris</span> et
              d'un <span className="green underline">clavier gamer</span> de
              fabricants renommés comme Corsair, Razer ou HyperX. Nous avons un
              grand choix qui répond à toutes les exigences. Nous travaillons
              avec les meilleurs fabricants non seulement pour les composants
              des PC pour joueurs, mais aussi pour les périphériques pour
              joueurs, afin de garantir des performances optimales.
            </p>

            <p className="gray">
              Pour obtenir immédiatement les meilleures performances, il existe
              les{" "}
              <span className="green underline">PC complets de Megaport</span>.
              Ceux-ci sont automatiquement équipés d'un écran, d'une souris et
              d'un clavier et sont directement prêts à l'emploi.
            </p>

            <p className="gray">
              <strong style={{ color: "black" }}>Rien de plus simple :</strong>{" "}
              commande un PC complet, branche-le chez toi et commence à jouer
              immédiatement !
            </p>
          </div>
        </div>
      </div>

      <div className="gray-back">
        <div className="container">
          <div className="py-5 text-center ">
            <h4>
              Trouve le PC gaming parfait avec les toutes dernières cartes
              graphiques
            </h4>

            <div className=" d-flex justify-content-center align-items-center flex-column">
              <p className="trouve-width">
                Pour t'aider à naviguer à travers notre sélection de PC Gamer
                équipés de cartes graphiques spécifiques, voici un{" "}
                <span className="green">guide pratique</span> pour choisir le
                GPU qui te convient le mieux. Cela te permettra d'avoir une
                meilleure compréhension de la gamme de cartes graphiques
                disponibles et de mieux trier les PC en fonction de leurs
                performances graphiques. Utilise les filtres disponibles sur
                notre catalogue pour afficher, par exemple, uniquement les
                modèles équipés d'une carte graphique AMD Radeon ou d'une NVIDIA
                GeForce RTX, te permettant ainsi de trouver plus facilement les
                systèmes PC qui répondent à tes besoins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between py-5 pops">
        <div className="row">
          <div className="col-lg-9">
            <h2>
              Utiliser parfaitement son PC gamer - facilement <br /> et sans
              attendre
            </h2>
            <p className="mt-5 gray">
              Acheter un PC gamer parfait chez Megaport n'est pas compliqué et
              se fait rapidement. C'est tout aussi simple une fois que tu as
              reçu ton Ordinateur gamer. Le PC arrive rapidement et en toute
              sécurité chez toi, il est entièrement assemblé et prêt à l'emploi.
              Pour que tu n'aies à t'occuper de rien d'autre, tu peux commander
              tous les <span className="green underline">périphériques</span>{" "}
              chez Megaport. Que tu aies besoin d'un{" "}
              <span className="green underline">Écran gaming</span> de MSI ou
              d'ASUS ou d'une <span className="green underline">souris</span> et
              d'un <span className="green underline">clavier gamer</span> de
              fabricants renommés comme Corsair, Razer ou HyperX. Nous avons un
              grand choix qui répond à toutes les exigences. Nous travaillons
              avec les meilleurs fabricants non seulement pour les composants
              des PC pour joueurs, mais aussi pour les périphériques pour
              joueurs, afin de garantir des performances optimales.
            </p>

            <p className="gray">
              Pour obtenir immédiatement les meilleures performances, il existe
              les{" "}
              <span className="green underline">PC complets de Megaport</span>.
              Ceux-ci sont automatiquement équipés d'un écran, d'une souris et
              d'un clavier et sont directement prêts à l'emploi.
            </p>

            <p className="gray">
              <strong style={{ color: "black" }}>Rien de plus simple :</strong>{" "}
              commande un PC complet, branche-le chez toi et commence à jouer
              immédiatement !
            </p>
          </div>

          <div className="col-lg-3">
            <img src="../assets/g4.jpg" alt="" className="w-100" />
          </div>
        </div>
      </div>

      <div className="gray-back">
        <div className="d-flex justify-content-between py-5 pops">
          <div className="row">
            <div className="col-lg-9">
              <h2>
                La meilleure sélection de ordinateur gaming <br /> pour tous les
                besoins
              </h2>
              <p className="mt-5 gray">
                Les attentes vis-à-vis d'un Ordinateur Gaming sont variées et
                très personnelles. Certains ont besoin d'un PC Gamer haut de
                gamme pour des applications exigeantes, tandis que d'autres se
                contenteront d'un PC gaming pour débuter dans l'univers du jeu
                vidéo. Cependant, le budget disponible joue souvent un rôle clé.
                C'est pourquoi chez Megaport, nous avons créé des{" "}
                <span className="green underline">
                  PC pour différentes gammes de prix
                </span>
                , capables de répondre à toutes sortes de besoins.
              </p>
            </div>

            <div className="col-lg-3">
              <img src="../assets/g5.jpg" alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="gray-back">
        <div className="d-flex justify-content-between py-5 pops">
          <div className="row">
            <div className="col-lg-3">
              <img src="../assets/g6.jpg" alt="" className="w-100" />
            </div>

            <div className="col-lg-9">
              <h2>
                La meilleure sélection de ordinateur gaming <br /> pour tous les
                besoins
              </h2>
              <p className="mt-5 gray">
                Les attentes vis-à-vis d'un Ordinateur Gaming sont variées et
                très personnelles. Certains ont besoin d'un PC Gamer haut de
                gamme pour des applications exigeantes, tandis que d'autres se
                contenteront d'un PC gaming pour débuter dans l'univers du jeu
                vidéo. Cependant, le budget disponible joue souvent un rôle clé.
                C'est pourquoi chez Megaport, nous avons créé des{" "}
                <span className="green underline">
                  PC pour différentes gammes de prix
                </span>
                , capables de répondre à toutes sortes de besoins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between py-5 pops">
        <div className="row">
          <div className="col-lg-3">
            <img src="../assets/g7.jpg" alt="" className="w-100" />
          </div>

          <div className="col-lg-9">
            <h2>
              La meilleure sélection de ordinateur gaming <br /> pour tous les
              besoins
            </h2>
            <p className="mt-5 gray">
              Les attentes vis-à-vis d'un Ordinateur Gaming sont variées et très
              personnelles. Certains ont besoin d'un PC Gamer haut de gamme pour
              des applications exigeantes, tandis que d'autres se contenteront
              d'un PC gaming pour débuter dans l'univers du jeu vidéo.
              Cependant, le budget disponible joue souvent un rôle clé. C'est
              pourquoi chez Megaport, nous avons créé des{" "}
              <span className="green underline">
                PC pour différentes gammes de prix
              </span>
              , capables de répondre à toutes sortes de besoins.
            </p>
          </div>
        </div>
      </div>

      <div className="gray-back text-center">
        <div className="py-5">
          <h2>
            Découvrez plus de catégories <br />{" "}
            <span className="green">de PC Gaming</span>{" "}
          </h2>
          <div className="container">
            <div className="mt-5 row">
              <div className="col-lg-3">
                <img src="../assets/Amd.png" alt="" className="w-100" />
              </div>
              <div className="col-lg-3">
                <img src="../assets/Amd.png" alt="" className="w-100" />
              </div>
              <div className="col-lg-3">
                <img src="../assets/Amd.png" alt="" className="w-100" />
              </div>
              <div className="col-lg-3">
                <img src="../assets/Amd.png" alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
