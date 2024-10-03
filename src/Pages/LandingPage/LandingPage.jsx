import React from 'react';
import "./LandingPage.css";
import Card from '../../componets/Card/Card';
import ASSET_PATHS from '../../utils/constant';

export default function LandingPage() {

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

      <div className='landing-page'>

        <div className='container '>
          <div className='image-container'>
            <img src={`${imgURL}/landing_image_1.jpg`} className='w-100' />
          </div>

          <div className='image-container'>
            <img src={`${imgURL}/landing_image_2.jpg`} className='w-100' />
          </div>

          <div className='image-container'>
            <img src={`${imgURL}/landing_image_3.jpg`} className='w-100' />
          </div>

          <div className='video-container'>

            <iframe width="100%" height="861" src="https://www.youtube.com/embed/EaiFTjjtgWs" title="Star Wars™ Outlaws | Official Game Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>


          <div className='image-container '>
            <img src={`${imgURL}/landing_image_5.jpg`} className='w-100' />
          </div>


          <div className='video-container'>


            <iframe width="100%" height="861" src="https://www.youtube.com/embed/TV0JSoqelNU" title="Star Wars™ Outlaws | DLSS 3.5 World Premiere" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>


          <div className='image-container '>
            <img src={`${imgURL}/landing_image_7.jpg`} className='w-100' />
          </div>



          <Card productCardData={productCardData} />




          <div className='image-container '>
            <img src={`${imgURL}/landing_image_8.jpg`} className='w-100' />
          </div>



        </div>


      </div>




    </>
  );
}
