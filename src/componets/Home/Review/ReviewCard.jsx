import React, { useState } from "react";
// import "./ReviewCard.css"; // Ensure you have necessary styles

const reviewData = [
  {
    imgSrc: "../assets/gamer1.jpg",
    title: "Grande satisfaction des clients",
    description: `Nous sommes entièrement convaincus par nos PC gamer, 
                    tout comme de nombreux clients qui nous ont fait confiance, 
                    à travers toute l'Europe. Cela nous motive à toujours développer 
                    de nouveaux PC optimaux, tout aussi uniques que vous l’êtes.`,
  },
  {
    imgSrc: "../assets/gamer2.jpg",
    title: "Assemblage professionnel",
    description: `Nous effectuons un assemblage minutieux et professionnel de nos systèmes. L'installation du système d'exploitation, y compris les pilotes, ainsi qu'un test de résistance intensif font bien entendu partie de nos prestations.`,
  },
  {
    imgSrc: "../assets/gamer3.jpg",
    title: "Expédition suivie et rapide",
    description: `Nous sommes entièrement convaincus par nos PC gamer, 
                    tout comme de nombreux clients qui nous ont fait confiance, 
                    à travers toute l'Europe. Cela nous motive à toujours développer 
                    de nouveaux PC optimaux, tout aussi uniques que vous l’êtes.`,
  },

  {
    imgSrc: "../assets/gamer1.jpg",
    title: "Grande satisfaction des clients",
    description: `Nous sommes entièrement convaincus par nos PC gamer, 
                    tout comme de nombreux clients qui nous ont fait confiance, 
                    à travers toute l'Europe. Cela nous motive à toujours développer 
                    de nouveaux PC optimaux, tout aussi uniques que vous l’êtes.`,
  },
  {
    imgSrc: "../assets/gamer2.jpg",
    title: "Assemblage professionnel",
    description: `Nous effectuons un assemblage minutieux et professionnel de nos systèmes. L'installation du système d'exploitation, y compris les pilotes, ainsi qu'un test de résistance intensif font bien entendu partie de nos prestations.`,
  },
  {
    imgSrc: "../assets/gamer3.jpg",
    title: "Expédition suivie et rapide",
    description: `Nous sommes entièrement convaincus par nos PC gamer, 
                    tout comme de nombreux clients qui nous ont fait confiance, 
                    à travers toute l'Europe. Cela nous motive à toujours développer 
                    de nouveaux PC optimaux, tout aussi uniques que vous l’êtes.`,
  },
  // Add more reviews as needed
];

export default function ReviewCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3; // Show 1 card per slide

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < Math.ceil(reviewData.length / itemsPerSlide) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container-fluid">
      <div className="carousel slide" id="reviewCarousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Array.from(
            { length: Math.ceil(reviewData.length / itemsPerSlide) },
            (_, slideIndex) => (
              <div
                className={`carousel-item ${slideIndex === currentIndex ? 'active' : ''}`}
                key={slideIndex}
              >
                <div className="row">
                  {reviewData
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="d-flex flex-column mt-992">
                          <div>
                            <img src={item.imgSrc} alt="" className="w-100" />
                          </div>
                          <div className="d-flex justify-content-center bg-black p-3 flex-column align-items-center">
                            <h2 className="text-white text-center">{item.title}</h2>
                            <p className="gray text-center gamer-para">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
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
          className={`carousel-control-next ${currentIndex === Math.ceil(reviewData.length / itemsPerSlide) - 1 ? '' : 'show'}`}
          type="button"
          onClick={handleNext}
          disabled={currentIndex === Math.ceil(reviewData.length / itemsPerSlide) - 1}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
