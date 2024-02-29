import React from 'react';
import C1 from './C1.jpeg'
import C2 from './C2.jpg'
import C3 from './C3.jpg'
import './Carousel.css'

export default function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={C1} className="d-block img-fluid" alt="..." />
          <p className='carousel-caption'>"Love for all living beings is the noblest quality of man." - Charles Darwin</p>
        </div>
        <div className="carousel-item">
          <img src={C2} className="d-block img-fluid" alt="..." />
          <p className='carousel-caption'>Our mission to improve stray lives and make the streets of kashmir stray-friendly</p>
        </div>
        <div className="carousel-item">
          <img src={C3} className="d-block img-fluid" alt="..." />
          <p className='carousel-caption'>5 years & counting…</p>
        </div>
      </div>
    </div>
  );
}
