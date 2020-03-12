import React from "react";
import {slides} from './../../globals/globalConstants'

const Slideshow = _ => {
    const length = slides.length
    const baseUnit = 100/(length)
    const totalWidth = 100*(length)

    const [active, setActive] = React.useState(0)

    const leftClick = () => {
        if(active === 0) 
            return;
        setActive(active-1)
    }

    const rightClick = () => {
        if(active === length-1)
            return;
        setActive(active+1)
    }

    return (
        <div className='slideshow_parent flex-center-space-between'>
            <div className='arrow left flex-center-center' onClick={leftClick}>
                <i className='fa fa-chevron-left'></i>
            </div>

            <div className='slideshow'>
                <div className='slides' 
                    style={{ width: `${totalWidth}%`, left: `-${100*active}%` }}
                >
                    {
                        slides.map((slide, index) => {
                            return (
                                <div key={slide.id} className='slide' 
                                    style={{width: `${baseUnit}%`, left: `${index*baseUnit}%` }}
                                >
                                    <div className='image'>
                                        <img src = {slide.image} alt={slide.heading}/>
                                    </div>
                                    <div className='info'>
                                        <div className='heading'>{slide.heading}</div>
                                        <div className='subHeading'>{slide.subHeading}</div>
                                        <div className='text'>{slide.text}</div>
                                    </div>
                                </div>
                            )
                             
                        })
                    }
                </div>
            </div>

            <div className='arrow right flex-center-center' onClick={rightClick}>
                <i className='fa fa-chevron-right'></i>
            </div>
        </div>
    )
}

export default Slideshow;