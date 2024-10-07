import React, { useState } from 'react';
import "./HomeCarosuel.css";
// import ASSET_PATHS from '../../utils/constant';

import { Link } from 'react-router-dom';

export default function HomeCarosuel() {

  const carouselData = [
    { image: 'HomeCarosuel_1.jpg', url: "/landing-page" },
    { image: 'HomeCarosuel_2.jpg', url: "/abc" },
    { image: 'HomeCarosuel_3.jpg', url: "/xyz" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container-fluid HomeCarosuel g-0">
      <div id="gameCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselData.map((data, index) => (
            <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
              <Link to={data.url}>
                <img src={`assets/image/${data.image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </Link>
            </div>
          ))}
        </div>
        {/* Left Control */}
        <button
          className={`carousel-control-prev ${currentIndex === 0 ? '' : 'show'}`}
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Right Control */}
        <button
          className={`carousel-control-next ${currentIndex === carouselData.length - 1 ? '' : 'show'}`}
          type="button"
          onClick={handleNext}
          disabled={currentIndex === carouselData.length - 1}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
