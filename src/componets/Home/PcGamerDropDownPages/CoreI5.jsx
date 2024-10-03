import React from "react";
import "./CoreI5.css";
import Card from "../Card/Card";

export default function CoreI5() {
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
            PC Gamer Intel <span>&gt;</span>
          </p>
          <p className="ps-2 ">Intel Core I5 </p>
        </div>

        <h3>Opte pour un PC Gamer avec un Intel Core i5 pas cher</h3>
        <p className="font-8">
          Bienvenue dans notre collection variée de PC Gamer équipés de
          processeurs i5 abordables. Les processeurs Intel de milieu de gamme
          offrent une performance de jeu hors pair, et ils sont idéalement
          taillés pour ton futur PC Gamer. Utilise notre configurateur intuitif
          pour personnaliser ton PC i5 en fonction de tes préférences.
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
            <h4>L'association Parfaite : <span className="green">PC Gamer avec processeur Intel Core i5</span></h4>
            <p className="gray ">Nos configurations PC équipées de processeurs Intel offrent une performance hors du commun pour le jeu et bien plus encore. Grâce aux tout derniers processeurs Intel Core i5, associés à des cartes graphiques dernier cri de géants comme NVIDIA et AMD, tu bénéficies d'une puissance de jeu optimale. Que tu préfères une carte graphique GeForce RTX ou RADEON RX, ces machines te propulseront vers de nouvelles aventures dans tes jeux favoris.</p>
          </div>

          <p className="gray">Le processeur Intel i5 brille grâce à un équilibre habile entre puissance et efficacité. La série i5 se distingue par une performance par cœur solide, ce qui en fait une option idéale pour les applications et les jeux qui misent sur une performance individuelle élevée. De plus, les processeurs Intel Core brillent dans de nombreux jeux grâce à des fréquences de base élevées. C'est pourquoi les PC Gamer i5 sont un choix très prisé des joueurs.</p>

          <p className="gray">Grâce à leurs multiples cœurs et threads, les processeurs i5 gèrent aisément les travaux multitâches. Tu peux ainsi travailler simultanément sur plusieurs applications ou profiter d'une performance de jeu fluide. Que tu sois novice ou joueur chevronné, un PC équipé d'un processeur Intel Core i5 te prépare à toutes les éventualités.</p>

          <h4 className="text-white mt-4">PC Gamer i5 : équilibre idéal entre Puissance et coût</h4>
          
          <p className="gray">
          Les processeurs i5 d'Intel se situent dans la catégorie du milieu de gamme. Leur performance exceptionnelle et leur tarif attractif garantissent un rapport qualité-prix solide. Les tâches exigeantes, le streaming et le jeu sont à la portée de ces processeurs. Leur polyvalence en fait le choix parfait pour ton PC Gamer.
          </p>

          <p className="gray">La dernière génération d'Intel se distingue par son architecture hybride sophistiquée. Les processeurs de la série i5 se composent de six cœurs hautes performances associés à huit cœurs plus économes en énergie. Le Thread Director surveille la charge de travail et veille à l'activation des cœurs adéquats. Cette répartition des tâches améliore nettement l'efficacité de ton PC Gamer i5 et booste ses performances.</p>

          <h4 className="text-white">Intel Core i5 13600K pour une  <span className="green">performance exceptionnelle en jeu</span></h4>

          <p className="gray">Le modèle précédent, l'Intel Core i5 12600K, se distingue avec ses dix cœurs et une fréquence de base de 3,7 GHz. En mode turbo, le processeur peut même atteindre les 4,9 GHz. Le i5 12600K offre ainsi une performance globale robuste pour un PC de jeu, et il reste une option tout à fait valable. Les jeux actuels peuvent être savourés en Full HD sans difficulté, avec des taux de FPS élevés.</p>

          <p className="gray">L'Intel Core i5 13600K de la dernière génération propose quant à lui 14 cœurs et 20 threads. Mais ce processeur ne se contente pas d'ajouter des cœurs, il bénéficie également de fréquences plus élevées et d'une mémoire cache plus conséquente. Cela se traduit par une performance ultime tant dans les jeux que dans les applications. Le i5 13600K prend en charge les mémoires RAM DDR4 et DDR5, ce qui élargit encore le choix des composants.</p>

          <p className="gray">Les six cœurs P du processeur à 14 cœurs fonctionnent à des fréquences allant de 3,5 à 5,1 GHz, assurant une puissance de traitement suffisante pour le jeu. Les huit cœurs E additionnels prennent en charge les tâches moins gourmandes en ressources et préviennent les baisses de performance. L'architecture hybride d'Intel, combinée au Thread Director, garantit une efficacité exceptionnelle. Qu'il s'agisse de l'Intel Core i5 13600KF ou du 13600K, ces deux processeurs offrent une puissance de jeu haut de gamme dans la catégorie du milieu de gamme, et ils affichent un rapport qualité-prix très attractif.</p>

          <h4 className="text-white mt-4">Achète dès maintenant ton PC Gamer i5 à prix avantageux chez Megaport</h4>

          <p className="gray">
          Un PC Gamer équipé d'un processeur Intel Core i5 et d'une carte graphique NVIDIA ou AMD actuelle gère aisément les tâches les plus exigeantes. Même en étant un processeur de milieu de gamme, le i5 se prête idéalement aux joueurs, aux streameurs et aux créatifs. Le multitâche et un taux de rafraîchissement élevé garantissent une productivité optimale en travail et en jeu. Chez Megaport, nous te proposons une large sélection de PC équipés de processeurs Intel i5, le tout à un tarif avantageux.
          </p>

          


        </div>
      </div>
    </>
  );
}
