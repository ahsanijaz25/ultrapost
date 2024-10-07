import React from 'react';
import "./Page11.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';

export default function Page11() {



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

      <div className='page-11'>

        <div className='container '>

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1>Corsair iCUE Murals</h1>
            <p>Colorez votre monde</p>

          </div>

          <div className='image-container'>
            <img src={`${imgURL}/page11-1.jpg`} className='w-100' />
          </div>

          <div className='image-container'>
            <img src={`${imgURL}/page11-2.jpg`} className='w-100' />
          </div>

          <div className='image-container '>
            <img src={`${imgURL}/page11-3.jpg`} className='w-100' />
          </div>

          <div className='content-2 w-100 d-flex align-items-center py-5 flex-column'>
            <h1>Produits compatibles iCUE</h1>
            <p>Laissez-vous tenter par ces étonnants composants et périphériques compatibles iCUE.</p>

          </div>



          <Card productCardData={productCardData} />

          <div className='image-container '>
            <img src={`${imgURL}/page11-4.jpg`} className='w-100' />
          </div>

          <div className='image-container '>
            <img src={`${imgURL}/page11-5.jpg`} className='w-100' />
          </div>

          <div className='image-container '>
            <img src={`${imgURL}/page11-6.jpg`} className='w-100' />
          </div>

          <div className='image-container '>
            <img src={`${imgURL}/page11-7.jpg`} className='w-100' />
          </div>





        </div>


      </div>



    </>
  );

  
}
