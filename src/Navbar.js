import React from 'react';
import logo from './logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img className='img-fluid navbar-logo' src={logo} alt="Nav Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feeds">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        <a className='btn btn-primary' href='https://www.impaac.org/fundraisers/support-kawfcares-foundation-to-save-the-voiceless/65575e802d139c5701e923e2?fbclid=PAAaY2GoC899tG2VxYmkSdV1yxuN1PnfExPqk33YOEEzxXsTdef-2A_SAkvqY_aem_ATLWnlgzMiOLp94sivo_hyatFJRIsH6esubKfilcjS8jk3HsOn2Qk0lBZjT_BqDs5kI'>Donate</a>
        </div>
      </div>
    </nav>
  );
}
