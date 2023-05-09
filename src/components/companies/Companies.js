import React from 'react'
import './Companies.css'
import prologis from '../imgs/prologis.png'
import tower from '../imgs/tower.png'
import equinix from '../imgs/equinix.png'
import realty from '../imgs/realty.png'

const Companies = () => {
  return (
    <div className="paddings innerWidth flexCenter main imgs">
        <div className="flexCenter imgs-container">
            <img src={prologis} alt="" />
            <img src={tower} alt="" />
            <img src={equinix} alt="" />
            <img src={realty} alt="" />
        </div>
    </div>
  )
}

export default Companies