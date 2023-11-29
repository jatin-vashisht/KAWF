import React from 'react';
import adopt from './adopt.png';
import donate from './donate.png';
import volunteer from './volunteer.png';
import './Content.css';

export default function Content() {
  return (
    <>
      <h1>Header Title</h1>
      <div className="main">
        <div>
          <img src={adopt} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={donate} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={volunteer} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
}
