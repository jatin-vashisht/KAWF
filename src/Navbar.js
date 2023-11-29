import React from 'react';
import logo from './logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className='img-fluid navbar-logo' src={logo} alt="Nav Logo" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        <button className='btn btn-primary'>Donate</button>
        </div>
      </div>
    </nav>
  );
}
