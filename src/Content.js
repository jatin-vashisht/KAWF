import React from 'react';
import adopt from './adopt.png';
import donate from './donate.png';
import volunteer from './volunteer.png';
import './Content.css';

export default function Content() {
  return (
    <>
      <h2 style={{textAlign: 'center'}}>How can you support us?</h2>
      <div className="main" style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', marginBottom: '50px'}}>
        <div>
          <img className='header-image' src={adopt} alt="" />
          <h5>Adopt</h5>
        </div>
        <div>
          <img className='header-image' src={donate} alt="" />
          <h5>Donate</h5>
        </div>
        <div>
          <img className='header-image' src={volunteer} alt="" />
          <h5>Volunteer</h5>
        </div>
      </div>
    </>
  );
}
