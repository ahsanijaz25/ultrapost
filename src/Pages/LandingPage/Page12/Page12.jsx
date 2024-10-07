import React from 'react';
import "./Page12.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';

export default function Page12() {



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

      <div className='page-12'>

        <div className='container '>


          <div className='image-container'>
            <img src={`${imgURL}/page12-1.jpg`} className='w-100' />
          </div>

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1> Sécurité fiable et fonctionnalités modernes d'IA avec <span> Windows 11 </span> </h1>
            <p>Que tu sois dans le gaming, les études ou le boulot, Windows 11 est une pépite de productivité conviviale offrant la sécurité, les performances et les innovations dont t'as besoin.</p>
          </div>

          <div className='content-2 w-100 d-flex  py-5 flex-column'>
            <h1> Être protégé n'a jamais été aussi simple</h1>
            <p>Avant même de lancer ton PC, Windows 11 veille au grain. Le logiciel Windows collabore en tandem avec ton matériel et a été pensé pour protéger tes applis, ton identité, tes infos et ta vie privée. Tu mets du temps et de la passion dans tes projets. C'est pourquoi Windows 11 intègre une sécurité avancée pour mettre tes fichiers à l'abri des menaces, avec la possibilité de t'authentifier par biométrie et un costaud antivirus qui te couvre à tous les niveaux.</p>
          </div>


          {/* section 1  */}
          <div className='row'>

            <div className='col-lg-6 col-md-12 section p-5'>
              <h1>Sécurité Windows</h1>
              <p>La Sécurité Windows (ex-Windows Defender) est un programme de sécurité intégré dans Windows 11 qui met ton PC à l'abri des virus, des malwares et autres menaces. Elle te propose des fonctionnalités de sécurité étendues :</p>

              <ul>

                <li> Protection en temps réel :surveillance constante des fichiers et des programmes pour détecter des activités louches et bloquer ou virer les malwares.</li>
                <li> Protection basée sur le cloud :accès aux dernières infos du cloud Microsoft pour stopper les nouvelles menaces qui pointent le bout de leur nez.</li>
                <li> Pare-feu et protection réseau : sécurisation de la connexion Internet et blocage des accès indésirables de l'extérieur.</li>
                <li> Protection contre les rançongiciels :Windows Defender préserve tes fichiers cruciaux en évitant leur chiffrement par des rançongiciels, avec un dossier spécial nommé "Dossiers protégés" accessible uniquement aux applis de confiance.</li>
                <li> Options familiales et bien plus encore.</li>

              </ul>


            </div>

            <div className='col-lg-6 col-md-12 section'>


              <img src={`${imgURL}/page12-2.png`} className='w-100' />


            </div>

          </div>



          <div className='content w-100 d-flex align-items-center p-5 flex-column'>
            <h1> Se projeter dans <span> l'avenir </span>  avec l'IA de Bing, Edge et Copilot  </h1>
            <p>Que tu sois dans le gaming, les études ou le boulot, Windows 11 est une pépite de productivité conviviale offrant la sécurité, les performances et les innovations dont t'as besoin.</p>
          </div>


          {/* section 2  */}

          <div className='row'>

            <div className='col-lg-6 col-md-12 section'>

              <img src={`${imgURL}/page12-3.jpg`} className='w-100' />

            </div>

            <div className='col-lg-6 col-md-12 section p-5'>
              <h1>Plus malin pour atteindre tes objectifs : recherche Bing avec fonction de chat</h1>
              <p className='mb-3'>Bing, le moteur de recherche de Microsoft, t'aide à trouver rapidement et de manière fiable les infos dont tu as besoin. Bing n'est pas juste un moteur de recherche intelligent, mais depuis 2023, c'est aussi un assistant boosté par l'IA pour Internet.
              </p>
              <p className='mb-3'>La fonction intégrée d'OpenAI est une technologie entraînée pour imiter les conversations humaines, comprenant tes questions ou messages et répondant comme dans une discussion. Intégrée à Bing, le modèle linguistique de nouvelle génération d'OpenAI fonctionne comme un chatbot, te fournissant des réponses adaptées à tes entrées. Plus tes demandes contiennent d'infos et de détails, plus l'IA peut répondre de manière précise.
              </p>
              <p className='mb-3'>Les utilisateurs peuvent également chercher des infos directement dans la barre des tâches de Windows 11, sans ouvrir de navigateur.
              </p>


            </div>




          </div>

          {/* section 3  */}


          <div className='row'>

            <div className='col-lg-6 col-md-12 section p-5'>
              <h1>Plus rapide en déplacement : navigateur Edge avec Copilot</h1>
              <p>Edge, le navigateur de Microsoft, te permet de surfer sur Internet. Edge est rapide, sûr et offre de nombreux avantages, comme une vitesse élevée, une bonne sécurité, une utilisation facile et de nombreuses fonctionnalités utiles, telles que la traduction de pages Web, l'édition de fichiers PDF et la gestion des favoris, entre autres. Copilot dans Edge est une intelligence artificielle qui t'assiste pendant ta navigation sur Internet. Copilot dans Edge peut te faire des suggestions pour améliorer ta recherche, afficher des infos pertinentes et t'aider dans tes tâches :</p>

              <ul>

                <li> Aide à trouver rapidement du contenu sur les pages en suggérant des correspondances et des synonymes connexes.</li>
                <li> L'outil "Composer" t'aide à écrire et à transformer des idées en textes finis.</li>
                <li> L'outil "Composer" t'aide à écrire et à transformer des idées en textes finis.</li>
                <li> Avec la fonction "Lire à haute voix", tu peux faire lire des textes n'importe où dans la langue et à la vitesse de ton choix.</li>
                <li>  La création d'images n'a jamais été aussi simple - le Créateur d'images crée une série d'images en fonction de ta demande.</li>
              </ul>


            </div>

            <div className='col-lg-6 col-md-12 section'>

              <img src={`${imgURL}/page12-4.png`} className='w-100' />

            </div>

          </div>

          <Card productCardData={productCardData} />


        </div>

        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>

            <div className='image-container'>
              <img src={`${imgURL}/page12-5.jpg`} className='w-100' />
            </div>


            <div className='content'>
              <h1>Chez Megaport, uniquement avec une licence authentique de Windows 11</h1>

              <h6>Les appareils équipés de Windows 11 ne sont pas seulement performants, mais aussi sécurisés.

              </h6>

              <p> Qui achète à bon marché, achète deux fois. Surtout en matière de logiciels, la bataille pour le prix le plus bas fait rage sur les boutiques en ligne et diverses plateformes d'enchères. Ce qui semble être un avantage pour les clients est souvent négligé : la plupart de ces offres sont des logiciels contrefaits, falsifiés ou non autorisés ! </p>

              <p>L'utilisation de tels logiciels comporte des risques importants, allant des logiciels malveillants à l'espionnage d'informations et à la perte de données. De plus, les copies illégales ne bénéficient d'aucun support du fabricant, rendant impossible les mises à jour de sécurité et de fonctionnalités. Pour être protégé contre ces dangers, que ce soit dans la vie privée ou professionnelle, nous recommandons d'utiliser exclusivement des logiciels authentiques. </p>

              <span>
                Megaport est partenaire de Microsoft et utilise le système d'exploitation actuel en tant que version authentique.
              </span>

              <p>Ainsi, avec le logiciel authentique de Microsoft, tu bénéficies de mises à jour de sécurité et tu renforces considérablement ta sécurité. Achète dès maintenant ton nouveau PC avec Windows 11 chez Megaport.</p>

            </div>


          </div>

        </div>


        <div className='container p-5'>

          <div className='image-container'>
            <img src={`${imgURL}/page12-6.png`} className='w-100' />
          </div>
        </div>


      </div>



    </>
  );
}
