import React from "react";
import "./Review.css";

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
    title: "Assemblage  professionnel",
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
];

export default function Review() {
  return (
    <div className="influenceurs-background pops">
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center py-5">
          <h1 className="text-center review-mt">
            <span className="green">Vos avantages chez </span>
            <br />
            UltraPort
          </h1>

          {/* <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex flex-column">
                  <div>
                    <img src="../assets/gamer1.jpg" alt="" className="w-100" />
                  </div>

                  <div className="d-flex justify-content-center bg-black  p-3 flex-column align-items-center">
                    <h2 className="text-white text-center">
                      Grande satisfaction des clients
                    </h2>
                    <p className="gray text-center gamer-para">
                      Nous sommes entièrement convaincus par nos PC gamer, tout
                      comme de nombreux clients qui nous ont fait confiance, à
                      travers toute l'Europe. Cela nous motive à toujours
                      développer de nouveaux PC optimaux, tout aussi uniques que
                      vous l’êtes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex flex-column">
                  <div>
                    <img src="../assets/gamer2.jpg" alt="" className="w-100" />
                  </div>

                  <div className="d-flex justify-content-center bg-black  p-3 flex-column align-items-center">
                    <h2 className="text-white text-center">
                      Grande satisfaction des clients
                    </h2>
                    <p className="gray text-center gamer-para">
                      Nous sommes entièrement convaincus par nos PC gamer, tout
                      comme de nombreux clients qui nous ont fait confiance, à
                      travers toute l'Europe. Cela nous motive à toujours
                      développer de nouveaux PC optimaux, tout aussi uniques que
                      vous l’êtes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex flex-column">
                  <div>
                    <img src="../assets/gamer3.jpg" alt="" className="w-100" />
                  </div>

                  <div className="d-flex justify-content-center bg-black  p-3 flex-column align-items-center">
                    <h2 className="text-white text-center">
                      Grande satisfaction des clients
                    </h2>
                    <p className="gray text-center gamer-para">
                      Nous sommes entièrement convaincus par nos PC gamer, tout
                      comme de nombreux clients qui nous ont fait confiance, à
                      travers toute l'Europe. Cela nous motive à toujours
                      développer de nouveaux PC optimaux, tout aussi uniques que
                      vous l’êtes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="container">
            <div className="row">
              {reviewData.map((item, index) => (
                <div className="col-lg-4" key={index}>
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
        </div>
      </div>
    </div>
  );
}
