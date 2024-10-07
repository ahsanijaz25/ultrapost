import React, { useState } from "react";
import "./Influencers.css";
import InfluencersCard from "./InfluencersCard"; // Assuming you still need this for individual card layout

const videos = [
  {
    id: "VIDEO_ID_1",
    title: "Aypierre",
    description:
      "Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau design et plus encore",
  },
  {
    id: "VIDEO_ID_2",
    title: "Aypierre",
    description:
      "Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau design et plus encore",
  },
  {
    id: "VIDEO_ID_3",
    title: "Aypierre",
    description:
      "Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau design et plus encore",
  },
  {
    id: "VIDEO_ID_3",
    title: "Aypierre",
    description:
      "Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau design et plus encore",
  },
  {
    id: "VIDEO_ID_3",
    title: "Aypierre",
    description:
      "Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau design et plus encore",
  },
  
  // Add more video objects as needed
];

export default function Influencers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3; // Show 3 cards per slide

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < Math.ceil(videos.length / itemsPerSlide) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="influenceurs-background pops">
        <div className="container">
          <div className="d-flex justify-content-center flex-column align-items-center py-5">
            <h1>
              <span className="green">Influencers</span> sur UltraPort
            </h1>
            <p className="influencer-para mb-5">
              Nous mettons des PC de jeu de qualité à la disposition des{" "}
              <br className="none-768" /> influenceurs. Vous pouvez voir les
              vidéos de présentation de chaque <br className="none-768" />{" "}
              produit sur YouTube.
            </p>

            {/* CAROUSEL STARTS */}
            <div className="container-fluid">
              <div
                id="influencersCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {Array.from(
                    { length: Math.ceil(videos.length / itemsPerSlide) },
                    (_, slideIndex) => (
                      <div
                        className={`carousel-item ${
                          slideIndex === currentIndex ? "active" : ""
                        }`}
                        key={slideIndex}
                      >
                        <div className="row">
                          {videos
                            .slice(
                              slideIndex * itemsPerSlide,
                              (slideIndex + 1) * itemsPerSlide
                            )
                            .map((video, index) => (
                              <div className="col-md-4" key={video.id}>
                                <div className="d-flex flex-column">
                                  <div className="youtube-player">
                                    <iframe
                                      width="100%"
                                      height="310"
                                      src={`https://www.youtube.com/embed/${video.id}`}
                                      title="YouTube video player"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>

                                  <div className="d-flex justify-content-center bg-black mt-neg p-3 flex-column align-items-center">
                                    <h2 className="text-white">{video.title}</h2>
                                    <p className="gray text-center youtube-para">
                                      {video.description}
                                    </p>
                                    <button className="influencer-btn">
                                      Voir sur YouTube ›
                                    </button>
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
                  className={`carousel-control-prev ${
                    currentIndex === 0 ? "" : "show"
                  }`}
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>

                {/* Right Control */}
                <button
                  className={`carousel-control-next ${
                    currentIndex === Math.ceil(videos.length / itemsPerSlide) - 1
                      ? ""
                      : "show"
                  }`}
                  type="button"
                  onClick={handleNext}
                  disabled={
                    currentIndex === Math.ceil(videos.length / itemsPerSlide) - 1
                  }
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* CAROUSEL ENDS */}
          </div>
        </div>
      </div>
    </>
  );
}
