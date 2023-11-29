import React from 'react';
import newLogo from './newLogo.png';
import './NewsLetter.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="first">
        <img className="footer-logo" src={newLogo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          quasi nemo debitis autem perferendis libero explicabo maiores
          consectetur animi commodi dolorem itaque expedita, optio at eaque
          eveniet assumenda ipsum quo?
        </p>
      </div>
      <div className="third">
        <h4>Our Address</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem autem maiores quia ab quaerat consequatur itaque ut
          laboriosam fugit dolores veritatis quae, nisi eum repudiandae placeat
          eveniet unde quis inventore!
        </p>
      </div>
    </div>
  );
}
