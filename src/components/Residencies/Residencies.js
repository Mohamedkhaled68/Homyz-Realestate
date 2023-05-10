import React from 'react';
import './Residencies.css';
import {data} from  '../../Data/slider';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { settings } from '../../Data/swiper-settings';
import SliderButtons from './slider-buttons/SliderButtons';

const Residencies = () => {
return (
    <div className="main-residence">
        <div className="paddings innerWidth residence-container">
            <div className="sec-title flexColStart">
                <span className='orangeText'>Best Choiese</span>
                <h2 className='primaryText'>Popular Residencies</h2>
            </div>
            <Swiper {...settings}>
                <SliderButtons/>
                {
                    data.map((card, i)=> (
                            <SwiperSlide key={i} >
                                <div className="flexColStart card-container">
                                    <img src={card.image} alt="" />
                                    <span className="secondaryText price">
                                        <span className='orangeText'>$ </span><span className='secondaryText'>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Residencies