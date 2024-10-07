import React, { useState } from 'react';
import "./Footer2.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer2() {

  const imgURL = ASSET_PATHS.IMG_URL;




  return (
    <>

      <div className='Footer2'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>
            <h1> Détails sur nos délais de livraison :            </h1>


            <p>Sauf indication contraire dans la description de l’article, la livraison de la marchandise s’effectue dans un 5 jours ouvrés vers la France, après la confirmation de la commande. Veuillez noter que les livraisons le dimanche et jours fériés ne sont pas possibles. Si vous avez commandé des articles avec des délais de livraison différents, nous expédions l’ensemble de votre commande en un seul envoi commun (sauf si nous en avons convenu autrement avec vous). Dans ce cas, le délai de livraison est déterminé par l'article que vous avez commandé dont le délai de livraison est le plus long.</p>



          </div>


        </div>





      </div>



    </>
  );
}
