import React, { useState } from 'react';
import "./Footer4.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer4() {

  const imgURL = ASSET_PATHS.IMG_URL;




  return (
    <>

      <div className='Footer4'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>
            <h1> Informations sur le cryptage ssl:
            </h1>

            <p>Notre boutique en ligne est cryptée par SSL (Secure Sockets Layer). Cette méthode permet de transférer des données en toute sécurité sur le World Wide Web. SSL rend possible la sécurisation de transactions de paiement électronique dans les boutiques en ligne. Tout accès non autorisé aux informations relatives à la sécurité est ainsi bloqué.</p>

            <p>Tout ce dont vous avez besoin pour bénéficier du cryptage est un navigateur standard avec une fonction de sécurité. Un cadenas ou un symbole de clé dans la barre d'adresse ou le "https" devant le site Web signale que vos informations personnelles sont transmises sous forme cryptée, tout en sécurité.</p>


          </div>



        </div>





      </div>



    </>
  );
}
