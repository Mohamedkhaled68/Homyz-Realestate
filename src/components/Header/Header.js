import React from 'react';
import './Header.css'
import logo1 from '../imgs/logo.png'

const Header = () => {
  return (
    <section className="main-header">
      <div className="paddings innerWidth flexCenter header-container">
        <img src={logo1} alt="logo" width={100}/>
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
    </section>
  )
}

export default Header