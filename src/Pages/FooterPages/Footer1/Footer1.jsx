import React, { useState } from 'react';
import "./Footer1.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer1() {

  const imgURL = ASSET_PATHS.IMG_URL;




  return (
    <>

      <div className='Footer1'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>
            <h1> Détails sur les frais de port : </h1>


            <p>Nous expédions toutes les commandes vers la France et la Belgique par UPS.</p>
            <p> En cas d'absence le jour de la livraison, vous pouvez contacter UPS au 0821233877 ou au 0173006661 pour la France, ou au 078 250 877 pour la Belgique</p>

            <p>Nous emballons avec le plus grand soin et vérifions chaque colis à plusieurs reprises avant l’expédition. Les ordinateurs PC et les kits de mise à jour sont emballés dans des suremballages rigides avec des matériaux de remplissage respectueux de l’environnement, garantissant ainsi un transport en toute sécurité. Vous recevrez avec chaque envoi, une facture incluant la TVA. Cette facture fait office de preuve d’achat en cas de garantie, et doit être conservée avec précaution.</p>
            <p>
              Une fois la marchandise expédiée, vous recevrez un email de confirmation de notre part, contenant le numéro de suivi du transporteur. Vous pourrez ainsi suivre votre colis en ligne.</p>

            <p>
              Voici les frais de ports pratiqués pour la livraison dans les pays suivants : </p>


            <ul className='d-flex justify-content-around ' >
              <li>France</li>
              <li>19 €</li>
              <li>Belgique</li>
              <li>15 €</li>
            </ul>



            <p>Veuillez noter que les livraisons le dimanche et jours fériés ne sont pas possibles. Si vous avez commandé des articles avec des délais de livraison différents, nous expédions l’ensemble de votre commande en un seul envoi commun (sauf si nous en avons convenu autrement avec vous). Dans ce cas, le délai de livraison est déterminé par l'article que vous avez commandé dont le délai de livraison est le plus long.</p>


          </div>


        </div>





      </div>



    </>
  );
}
