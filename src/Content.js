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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <img className='header-image' src={donate} alt="" />
          <a style={{color: 'black', fontWeight: 500, fontSize: '1.25rem'}} href='https://www.impaac.org/fundraisers/support-kawfcares-foundation-to-save-the-voiceless/65575e802d139c5701e923e2?fbclid=PAAaY2GoC899tG2VxYmkSdV1yxuN1PnfExPqk33YOEEzxXsTdef-2A_SAkvqY_aem_ATLWnlgzMiOLp94sivo_hyatFJRIsH6esubKfilcjS8jk3HsOn2Qk0lBZjT_BqDs5kI'>Donate</a>
        </div>
        <div>
          <img className='header-image' src={volunteer} alt="" />
          <h5>Volunteer</h5>
        </div>
      </div>
    </>
  );
}
