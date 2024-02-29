import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="second">
      <div className='copy'>
        &copy; KAWF 2024
      </div>    
      <div className='links'>
        <ul>
          <li>
            <i className="fa-brands fa-x-twitter"></i>
            <a href="https://twitter.com/kawfcares?lang=en">Twitter</a>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/kawfcares/">Instagram</a>
          </li>
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/company/kawfcares/about/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
