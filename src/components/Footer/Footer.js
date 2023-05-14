import React from 'react';
import logo from '../imgs/logo2.png'
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="paddings innerWidth flexCenter footer-container">
            <div className="flexColStart footer-left">
                <div className="img-con">
                    <img src={logo} />
                </div>
                <span className="flexColStart">
                    <span className="secondaryText">Our vision is to make all people</span>
                    <span className="secondaryText">the best place to live for them.</span>
                </span>
            </div>
            <div className="flexColStart footer-right">
                <div className="flexColStart title">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">145 New York, FL 5467, USA</span>
                </div>
                <ul className='flexCenter'>
                    <li key={1}>Property</li>
                    <li key={2}>Services</li>
                    <li key={3}>Product</li>
                    <li key={4}>About Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer