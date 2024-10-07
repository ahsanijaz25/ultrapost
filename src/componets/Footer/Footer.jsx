import React from 'react'
import "./Footer.css"
import ASSET_PATHS from '../../utils/constant'

export default function Footer() {
  const imgURL = ASSET_PATHS.IMG_URL

  return (
    <>

      <div className='footer-container'>

        <div className="container-fluid footer-section-1">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-md-12 left-image p-0">
              <img src={`${imgURL}/newsletter_bg.jpg`} alt="Newsletter Image" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-12 text-white">

              <h3>Abonnez-vous à la newsletter</h3>
              <p>Restez informé de nos nouveautés et des promotions en cours avec la newsletter Megaport.</p>



              <form className="newsletter-form">

                <input type="email" className="input" placeholder="Votre adresse électronique" required />

                <button className="btn" type="submit">Inscription</button>

              </form>



            </div>
          </div>
        </div>


        <div className="container-fluid footer-section-2">
          <div className="container ">
            <div className="row">
              {/* Shop Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">Notre Boutique</h5>
                <ul className="list-unstyled">
                  <li><a href="#">PC Gamer</a></li>
                  <li><a href="#">PC Premium Gaming</a></li>
                  <li><a href="#">Packs PC tout en un</a></li>
                  <li><a href="#">Promotions</a></li>
                  <li><a href="#">Offres</a></li>
                </ul>
              </div>
              {/* Information Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">Informations</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Frais de port</a></li>
                  <li><a href="#">Livraison</a></li>
                  <li><a href="#">Paiement</a></li>
                  <li><a href="#">Cryptage SSL</a></li>
                  <li><a href="#">Paramètres des cookies</a></li>
                </ul>
              </div>
              {/* Tips Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">Trucs et Astuces</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Configurateur PC</a></li>
                  <li><a href="#">Ma config PC gamer</a></li>
                  <li><a href="#">PC pour jouer</a></li>
                  <li><a href="#">Comparatif cartes graphiques</a></li>
                  <li><a href="#">Comparatif processeur</a></li>
                  <li><a href="#">Comparatif SSD</a></li>
                </ul>
              </div>
              {/* About Us Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">À propos de nous</h5>
                <ul className="list-unstyled">
                  <li><a href="#">À propos de nous</a></li>
                  <li><a href="#">Conditions générales</a></li>
                  <li><a href="#">Droit de rétractation</a></li>
                  <li><a href="#">Mentions légales</a></li>
                  <li><a href="#">Protection des données</a></li>
                </ul>
              </div>
              {/* Customer Service Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">À votre service</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Questions fréquentes</a></li>
                  <li><a href="#">Contactez-nous</a></li>
                  <li><a href="#">Avis clients</a></li>
                  <li><a href="#">Formulaire de retour</a></li>
                  <li><a href="#">Batteries usagées</a></li>
                </ul>
              </div>
              {/* Hotline Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">MEGAPORT Hotline</h5>
                <p className="footer-phone">02 49 88 06 17</p>
                <p className="footer-address">Nos conseillers sont à votre écoute du lundi au vendredi, entre 8h–16h.</p>
              </div>
            </div>

            <div> <hr /> </div>

            <div className="row mt-4">
              {/* Payment Icons */}
              <div className="col-6 d-flex flex-column align-items-start">
                <h6>Méthodes de paiement</h6>

                <div>
                  <img src={`${imgURL}/icon-visa.svg`} alt="Visa" className="payment-icon" />
                  <img src={`${imgURL}/icon-mastercard.svg`} alt="MasterCard" className="payment-icon" />
                  <img src={`${imgURL}/icon-paypal.svg`} alt="PayPal" className="payment-icon" />
                  <img src={`${imgURL}/icon-amazon.png`} alt="Amazon Pay" className="payment-icon" />
                </div>



              </div>
              {/* Social Icons */}
              <div className="col-6 d-flex flex-column align-items-end">
                <div className='icons'>
                  <a href="#" className="social-icon"><i className="fab fa-facebook" /></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram" /></a>
                  <a href="#" className="social-icon"><i className="fab fa-youtube" /></a>

                </div>

                <div >
                  <p className="footer-bottom-text text-right">*Tous les prix comprennent la TVA et les frais d'expédition. Copyright © Megaport GmbH</p>
                </div>

              </div>

            </div>



          </div>

        </div>

        <div className='container-fluid footer-section-2-responsive'>
          <div className='container'>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Notre Boutique
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <ul className="list-unstyled">
                      <li><a href="#">PC Gamer</a></li>
                      <li><a href="#">PC Premium Gaming</a></li>
                      <li><a href="#">Packs PC tout en un</a></li>
                      <li><a href="#">Promotions</a></li>
                      <li><a href="#">Offres</a></li>
                    </ul>

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Informations
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li><a href="#">Frais de port</a></li>
                      <li><a href="#">Livraison</a></li>
                      <li><a href="#">Paiement</a></li>
                      <li><a href="#">Cryptage SSL</a></li>
                      <li><a href="#">Paramètres des cookies</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Trucs et Astuces
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li><a href="#">Configurateur PC</a></li>
                      <li><a href="#">Ma config PC gamer</a></li>
                      <li><a href="#">PC pour jouer</a></li>
                      <li><a href="#">Comparatif cartes graphiques</a></li>
                      <li><a href="#">Comparatif processeur</a></li>
                      <li><a href="#">Comparatif SSD</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    À propos de nous
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <ul className="list-unstyled">
                      <li><a href="#">À propos de nous</a></li>
                      <li><a href="#">Conditions générales</a></li>
                      <li><a href="#">Droit de rétractation</a></li>
                      <li><a href="#">Mentions légales</a></li>
                      <li><a href="#">Protection des données</a></li>
                    </ul>

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    À votre service
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <ul className="list-unstyled">
                      <li><a href="#">Questions fréquentes</a></li>
                      <li><a href="#">Contactez-nous</a></li>
                      <li><a href="#">Avis clients</a></li>
                      <li><a href="#">Formulaire de retour</a></li>
                      <li><a href="#">Batteries usagées</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='contact'>
              <h5 className="footer-title">MEGAPORT Hotline</h5>
              <p className="footer-phone">02 49 88 06 17</p>
              <p className="footer-address">Nos conseillers sont à votre écoute du lundi au vendredi, entre 8h–16h.</p>
            </div>


            <div> <hr /> </div>

            <div className="row mt-4 section-3">
              {/* Payment Icons */}
              <div className="col-12 ">
                <h6>Méthodes de paiement</h6>

                <div>
                  <img src={`${imgURL}/icon-visa.svg`} alt="Visa" className="payment-icon" />
                  <img src={`${imgURL}/icon-mastercard.svg`} alt="MasterCard" className="payment-icon" />
                  <img src={`${imgURL}/icon-paypal.svg`} alt="PayPal" className="payment-icon" />
                  <img src={`${imgURL}/icon-amazon.png`} alt="Amazon Pay" className="payment-icon" />
                </div>



              </div>
              {/* Social Icons */}
              <div> <hr /> </div>

              <div className="col-12 ">
                <div className='icons'>
                  <a href="#" className="social-icon"><i className="fab fa-facebook" /></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram" /></a>
                  <a href="#" className="social-icon"><i className="fab fa-youtube" /></a>

                </div>

                <div >
                  <p className="footer-bottom-text text-right">*Tous les prix comprennent la TVA et les frais d'expédition. Copyright © Megaport GmbH</p>
                </div>

              </div>

            </div>


          </div>

        </div>


      </div>

    </>
  )
}
