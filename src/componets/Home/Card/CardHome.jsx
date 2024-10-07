import React, { useState } from "react";
import "./Card.css";

export default function CardHome({ productCardData }) { // Accept the data as props

  const [hoveredId, setHoveredId] = useState(null); // State to track which card is hovered

  // StarRating component to render stars based on rating
  function StarRating({ rating }) {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-star ${i <= rating ? 'fas' : 'far'}`}
          style={{ color: '#89c600' }} // Set star color to green
        ></i>
      );
    }

    return <div className="star-rating">{stars}</div>;
  }

  return (
    <div className="container">
      <div className="row mt-4">
        {productCardData.map(product => (
          <div className=" col-md-12 border-right mb-5 product-card" key={product.id}>
            <div
              className="p-3"
              onMouseEnter={() => setHoveredId(product.id)} // Set hovered ID
              onMouseLeave={() => setHoveredId(null)} // Clear hovered ID
            >
              <div className="card_img mb-2 w-100">
                <img
                  src={hoveredId === product.id ? `../assets/image/${product.hoverImgURL}` : `../assets/image/${product.imgURL}`}
                  alt={product.title}
                  className="img-fluid"
                />
              </div>

              <StarRating rating={product.rating} /> {/* Render the star rating */}

              <h5>{product.title}</h5>
              <ul className="plus-sign-list mt-3">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="d-flex card-font align-items-center green">
                <i className="fa-regular fa-clock"></i>
                <span className="ps-1">
                  {product.deliveryTime}
                </span>
              </div>

              <div className="d-flex mt-3 justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <p className="m-0 old-price">{product.oldPrice}</p>
                  <span className="new-price">{product.newPrice}</span>
                </div>
                <div>
                  <button className="cart-btn"><i className="fas fa-shopping-cart" /></button>
                  <button className="plus-btn">plus</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
