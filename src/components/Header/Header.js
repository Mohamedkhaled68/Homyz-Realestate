import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-container paddings innerWidth flexCenter">
        <img src="./imgs/logo.png" alt="logo" width={100}/>
        <div className="flexCenter menu">
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Use</a>
          <a href="#">Get Started</a>
          <button className='button'>
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header