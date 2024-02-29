import React from 'react';
import newLogo from './newLogo.png';
import './NewsLetter.css';

export default function Footer() {
  return (
    <div id='contact' className="footer">
      <div className="first">
        <img className="footer-logo" src={newLogo} alt="" />
        <p>
          KAWF is a registered (Reg. No. 2354168) Not-for-Profit self-funded,
          volunteer-based organization in Kashmir Valley, which aims to help 
          and improve the life of abused & starving strays of the valley.
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
