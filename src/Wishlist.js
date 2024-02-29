import React from 'react';
import './Wishlist.css'

export default function Wishlist() {
  return (
    <div className='content'> 
      <h2>Our Wishlist</h2>
      <p>
      We accept donations in all forms and not just monetary. 
      We require these items on a daily basis and receiving these 
      directly can help us immensely to achieve our goals.
      </p>
      <div className='tags'>
        <div>
          <h3>Cleaning Supplies</h3>
          <ul className='wishlist-list'>
            <li>Lizol</li>
            <li>Phenyl</li>
          </ul>
        </div>
        <div>
          <h3>Antiseptic</h3>
          <ul className='wishlist-list'>
            <li>Dettol</li>
            <li>Savlon</li>
          </ul>
        </div>
        <div>
          <h3>Food Supplies</h3>
          <ul className='wishlist-list'>
            <li>Dog Food</li>
            <li>Cat Food</li>
            <li>Rice</li>
            <li>Flour</li>
            <li>Egg trays</li>
            <li>Milk Formula for Puppies</li>
          </ul>
        </div>
        <div>
          <h3>Medical Supplies</h3>
          <ul className='wishlist-list'>
            <li>Cotton Rolls</li>
            <li>Bandages</li>
            <li>Syringes (5 ml & 3ml)</li>
            <li>Betadine (liquid)</li>
            <li>Ivermectin</li>
          </ul>
        </div>
        <div>
          <h3>Pet Products</h3>
          <ul className='wishlist-list'>
            <li>Collars</li>
            <li>Leashes Shampoos</li>
            <li>Toys</li>
          </ul>
        </div>
        <div>
          <h3>Old Clothes</h3>
          <ul className='wishlist-list'>
            <li>Woollens</li>
            <li>Towels</li>
            <li>Bedsheets</li>
            <li>Pillows</li>
          </ul>
        </div>
        <div>
          <h3>Old Furniture</h3>
          <ul className='wishlist-list'>
            <li>Office or home use</li>
            <li>Tables</li>
          </ul>
        </div>
        <p>In the short run, we aim to help as many animals as we can through immediate rescues, on-spot treatments, etc. In the long run we need to establish a standardized system where these processes can be made efficient and easier, not only for us but also for those who seek help. 

          Together, we can foster an environment of compassion and ensure an aware audience. Check out our long term goals, <a href='/blog'>here</a>. 
        </p>
      </div>
    </div>
  );
}
