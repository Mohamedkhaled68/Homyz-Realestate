import React from "react";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
    const swipe = useSwiper();
    return(
        <div className="btns">
            <button onClick={()=> swipe.slideNext()}>&lt;</button>
            <button onClick={()=> swipe.slidePrev()}>&gt;</button>
        </div>
    )
}

export default SliderButtons;