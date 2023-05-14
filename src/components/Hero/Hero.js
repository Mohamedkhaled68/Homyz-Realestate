import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import './Hero.css'
import HeroImg from '../imgs/hero-image.png'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <section className="main-hero">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className = 'orangeI'/>
            <motion.h1
            initial={{y: '2rem', opacity: 0}}
            animate={{y: '0', opacity: 1}}
            transition={{
              duration: 3,
              type: 'spring'
            }}
            >Discover<br/>Most Suitable<br/>Property</motion.h1>
          </div>
          <div className="hero-des flexColStart">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="hero-search flexCenter">
            <HiLocationMarker color='var(--blue)' size={25}/>
            <input type="text" placeholder='Search Location Here...'/>
            <button>Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span className="flexCenter">
                <CountUp start={8000} end={9000} duration={6}/>
                <span className='orangeText '>+</span>
              </span>
              <span className='secondaryText'>Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span className="flexCenter">
                <CountUp start={1950} end={2000} duration={6}/>
                <span className='orangeText '>+</span>
              </span>
              <span className='secondaryText'>Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span className="flexCenter">
                <CountUp end={28}/>
                <span className='orangeText '>+</span>
              </span>
              <span className='secondaryText'>Awards Winning</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div
          className="img-container"
          initial={{x: '7rem', opacity: 0}}
          animate={{x: '0', opacity: 1}}
          transition={{
            duration: 4,
            type: 'spring'
          }}
          >
            <img src={HeroImg} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero