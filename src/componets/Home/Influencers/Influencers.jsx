import React from "react";
import "./Influencers.css";

export default function Influencers() {
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

            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex flex-column">
                    <div className="youtube-player">
                      <iframe
                        width="100%"
                        height="310"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="d-flex justify-content-center bg-black mt-neg p-3 flex-column align-items-center">
                      <h2 className="text-white">Aypierre</h2>
                      <p className="gray text-center youtube-para">
                        Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau
                        design et plus encore
                      </p>
                      <button className="influencer-btn">
                        Voir sur YouTube ›
                      </button>
                    </div>
                  </div>
                </div>

                  <div className="col-lg-4 ">
                  <div className="d-flex flex-column">
                    <div className="youtube-player">
                      <iframe
                        width="100%"
                        height="310"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="d-flex justify-content-center bg-black mt-neg p-3 flex-column align-items-center">
                      <h2 className="text-white">Aypierre</h2>
                      <p className="gray text-center youtube-para ">
                        Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau
                        design et plus encore
                      </p>
                      <button className="influencer-btn">
                        Voir sur YouTube ›
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 ">
                  <div className="d-flex flex-column">
                    <div className="youtube-player">
                      <iframe
                        width="100%"
                        height="310"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="d-flex justify-content-center bg-black mt-neg p-3 flex-column align-items-center">
                      <h2 className="text-white">Aypierre</h2>
                      <p className="gray text-center youtube-para ">
                        Unboxing | Fameux boîtier AZZA Inferno 310 au nouveau
                        design et plus encore
                      </p>
                      <button className="influencer-btn">
                        Voir sur YouTube ›
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
