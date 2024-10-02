import React from 'react'
import "./HomeCarosuel.css"

export default function HomeCarosuel() {
  return (
<div id="gameCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {/* First Slide */}
    <div className="carousel-item active">
      <img src="../assets/C1.jpg" className="d-block w-100" alt="Slide 1" />
    </div>
    {/* Second Slide */}
    <div className="carousel-item">
      <img src="../assets/C2.jpg" className="d-block w-100" alt="Slide 2" />
    </div>
    {/* Third Slide */}
    <div className="carousel-item">
      <img src="../assets/C3.jpg" className="d-block w-100" alt="Slide 3" />
    </div>
  </div>
  {/* Left and Right controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#gameCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#gameCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  )
}
