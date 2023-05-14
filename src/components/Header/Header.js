import React, {useState} from 'react';
import logo1 from '../imgs/logo.png'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import './Header.css'

const Header = () => {
  const [className, setClassName] = useState('hidden');

  const changePosition = () => {
    if(className == 'hidden'){
      setClassName('displayed')
    }else{
      setClassName('hidden')
    }
  }
  return (
    <section className="main-header">
      <div className="paddings innerWidth flexCenter header-container">
        <img src={logo1} alt="logo"/>
        <OutsideClickHandler onOutsideClick={()=> {setClassName('hidden')}}>
          <div className={`flexCenter menu ${className}`}>
            <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Use</a>
            <a href="#">Get Started</a>
            <button className='button'>
              <a href="#">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => changePosition()}>
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </section>
  )
}

export default Header