import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="second">
      <div className='copy'>
        Copyright text
      </div>    
      <div className='links'>
        <ul>
          <li>
            <i class="fa-brands fa-x-twitter"></i>
            <a href="">Twitter</a>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
            <a href="">Instagram</a>
          </li>
          <li>
            <i class="fa-brands fa-linkedin-in"></i>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
