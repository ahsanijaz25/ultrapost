import React from "react";

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
];

export default function InfluencersCard() {
  return (
    <div className="container">
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-lg-4 mt-992" key={index}>
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
                <button className="influencer-btn">Voir sur YouTube ›</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
