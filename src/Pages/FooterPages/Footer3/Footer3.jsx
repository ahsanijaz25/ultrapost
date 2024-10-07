import React, { useState } from 'react';
import "./Footer3.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer3() {

  const imgURL = ASSET_PATHS.IMG_URL;




  return (
    <>

      <div className='Footer3'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>


            <h1> COMMENT PUIS-JE PAYER ?</h1>
            <p> megaport.fr Vote boutique en ligne de PC Gamer configurables, ordinateurs portables, matériel et multimédia vous offre plusieurs possibilités de paiement lors de votre achat sur notre site. Payez votre commande chez Megaport comme vous le souhaitez.
            </p>

            <ul>
              <li><a href="#">Paiement par Virement bancaire</a> </li>
              <li><a href="#">Paiement sur Amazon</a></li>
              <li><a href="#">Paiement par PayPal</a></li>
              <li><a href="#">Paiement par ALMA </a></li>

            </ul>

            <h4> PAIEMENT PAR VIREMENT BANCAIRE / TRANSFERT
            </h4>

            <p>Après avoir finalisé votre commande, vous recevrez un email de Megaport. Dans cet email, vous trouverez le montant total de votre commande, ainsi que nos coordonnées bancaires. Dès la réception de votre paiement sur notre compte, vous en serez automatiquement informé par email. Votre commande sera alors expédiée dès que possible en fonction des disponibilités. Nous ne pouvons réserver votre marchandise que pendant 10 jours, nous vous remercions pour votre compréhension à ce sujet.
            </p>


            <p className='bold'> Nos coordonnées bancaires </p>

            <p> Institut bancaire : Deutsche Bank </p>
            <p>Titulaire du compte: Megaport GmbH</p>
            <p>IBAN : DE68 8607 0000 0016 0770 00</p>
            <p>BIC/SWIFT : DEUTDE8LXXX </p>


            <p>Afin d’améliorer la prise en compte de votre paiement, nous vous prions de bien vouloir indiquer votre numéro de commande dans le champ prévu pour les commentaires lors de votre virement.</p>


            <h4>PAIEMENT PAR AMAZON</h4>
            <p>
              Avec Amazon Payments, vous pouvez utiliser les informations de paiement et d'expédition stockées dans votre compte Amazon pour faire vos achats rapidement et en toute sécurité sur tous les sites Web qui prennent en charge le paiement via Amazon.</p>
            <p>
              Finalisez vos achats rapidement sans avoir à saisir à nouveau vos informations d'expédition ou de paiement à chaque achat. Payez rapidement et en toute sécurité sans quitter le site web du vendeur.</p>


            <h4>PAIEMENT PAR PAYPAL
            </h4>

            <p> Vous pouvez finaliser votre commande par PayPal. PayPal vous assure des paiements simples, rapides et sécurisés lors de vos achats en ligne. Vos numéros de compte bancaire ou de carte de crédit sont conservés en toute sécurité chez PayPal. Vous finalisez votre paiement simplement avec votre adresse email et votre mot de passe. Rien de plus</p>


            <h4>PAIEMENT PAR ALMA</h4>
            <p> Avec Alma, nous vous offrons la possibilité d’étaler votre paiement en payant en plusieurs fois. C’est simple, sécurisé et sans frais ! Si vous ne connaissez pas Alma, rendez-vous sur https://getalma.eu/customers</p>

            <p className='bold'>Comment ça marche ?</p>


            <ul>
              <li>Choisissez Alma au moment de payer. Vous pouvez payer en 2x, 3x et 4x
              </li>
              <li>Entrez simplement vos coordonnées bancaires comme lors d’un paiement classique.
              </li>
              <li>La validation de votre commande est instantanée.
              </li>
              <li>Vous recevrez ensuite un email avec l’échéancier de paiement puis un rappel 3 jours avant chaque échéance.
              </li>

            </ul>

            <p>Conditions d’éligibilité :</p>
            <ul>

              <li>
                Cette facilité de paiement est disponible pour toutes les commandes entre 50€ et 5000€
              </li>
              <li>
                Les cartes acceptées sont les cartes émises en France visa, mastercard et Amex.
              </li>
              <li>
                Les cartes prépayées, virtuelles et à autorisation systématique ne sont pas acceptées.
              </li>

            </ul>



            <p className='bold'>Des questions ?</p>
            <p>
              Si vous rencontrez un problème avec votre commande payée en plusieurs fois avec Alma, vous pouvez vous rendre sur la FAQ client d’Alma en cliquant ici (https://support.getalma.eu/hc/fr) ou envoyer un email au support client d’Alma à support@getalma.eu
            </p>

            <p>
              A ajouter si vous partagez les frais avec vos clients :
            </p>

            <p>Financement :</p>
            <ul>
              <li>
                Pour le paiement en 2x, les frais que vous payez sont de 0,78% du montant de votre commande
              </li>
              <li>
                Pour le paiement en 3x, les frais que vous payez sont de 1,55% du montant de votre commande
              </li>
              <li>
                Pour le paiement en 4x, les frais que vous payez sont de 2,32% du montant de votre commande
              </li>
            </ul>

            <p>Financement consenti sous réserve d’acceptation par ALMA SAS - 176 avenue Charles de Gaulle</p>
            <p>92200 Neuilly-sur-Seine - immatriculée au RCS Nanterre sous le numéro 839 100 575. Vous bénéficiez d’un délai légal de rétractation au titre de la vente à distance.</p>


          </div>


        </div>





      </div>



    </>
  );
}
