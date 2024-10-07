import React from "react";
import "./Review.css";
import ReviewCard from "./ReviewCard";

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
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
