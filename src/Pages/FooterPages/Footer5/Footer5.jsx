import React, { useState } from 'react';
import "./Footer5.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer5() {

  const imgURL = ASSET_PATHS.IMG_URL;




  return (
    <>

      <div className='Footer5'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>

            <div className='d-flex justify-content-center align-items-center p5'>
              <h1> Désolé, le contenu que vous recherchiez n'a pas été trouvé </h1>

            </div>


            <h2> L'URL demandée n'existe pas - nous affichons donc cette page</h2>
            <p>Malheureusement, la page demandée n'a pu être trouvée, apparemment une URL incorrecte a été saisie.
            </p>

            <h4> Boutique informatique Megaport</h4>

            <p>Megaport offre une large gamme de produits de PC gamer. Nous sommes spécialisés dans les PC gamer de bureau. Jetez un coup d'oeil à nos offres : Des PC gamer d'entrée de gamme bon marché aux ordinateurs haut de gamme absolus, vous trouverez la configuration qui vous convient.</p>


            <ul>
              <li><a href="#">tous les PC gamer</a> </li>
              <li><a href="#">PC gamer AMD</a></li>
              <li><a href="#">PC gamer Intel</a></li>
              <li><a href="#">PC gamer NVIDIA RTX</a></li>

            </ul>

            <div className='image-container'>
              <img src={`${imgURL}/footerPc-5-1.jpg`} className='w-100' />
            </div>



            <h4>Ordinateur de bureau</h4>

            <p>Que ce soit pour les affaires, le télétravail, l'enseignement à domicile, le streaming ou l'utilisation multimédia, Megaport a l'ordinateur approprié en stock dans le magasin.</p>


            <ul>
              <li><a href="#">tous les ordinateurs de bureau</a> </li>
              <li><a href="#">PC de bureau</a></li>
              <li><a href="#">PC de streaming</a></li>
              <li><a href="#">PC multimédia</a></li>
            </ul>

            <div className='image-container'>
              <img src={`${imgURL}/footerPc-5-2.jpg`} className='w-100' />
            </div>


            <h4> Configurateur de PC Megaport</h4>
            <p>Il n'y a rien de plus individuel : le configurateur de PC vous offre une liberté absolue dans le choix des composants de votre configuration matérielle parfaite.</p>

            <ul>
              <li><a href="#">Configurateur de PC</a> </li>
              <li><a href="#">Assemblez un PC gamer</a></li>
              <li><a href="#">Configurateur de PC multimédia</a></li>
              <li><a href="#">Configurateur de PC de bureau</a></li>

            </ul>

            <div className='image-container'>
              <img src={`${imgURL}/footerPc-5-3.jpg`} className='w-100' />
            </div>

            <p>Pour plus de contenu, utilisez la barre de recherche ou allez sur notre page d'accueil pour parcourir notre vaste gamme.
            </p>

            <div className=' card-container  '>

              <div className='card-image-container'>
                <img src={`${imgURL}/footerPc-5-4.jpg`} className='w-100' />
              </div>

              <div className='card-image-container'>
                <img src={`${imgURL}/footerPc-5-5.jpg`} className='w-100' />
              </div>

              <div className='card-image-container'>
                <img src={`${imgURL}/footerPc-5-6.jpg`} className='w-100' />
              </div>

            </div>


          </div>


        </div>





      </div>



    </>
  );
}
