import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="main-get">
        <div className="innerWidth paddings flexColCenter get-container">
            <div className="flexColCenter board">
                <h1 className='title'>Get started with Homyz</h1>
                <span className="flexColCenter secondaryText des">
                    <span>Subscribe and find super attractive price quotes from us</span>
                    <span>Find your residence soon</span>
                </span>
                <button>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted