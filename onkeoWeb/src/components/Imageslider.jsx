import React, { useEffect, useState } from 'react'
import "./Imageslider.css"

const images=[
    {
        image: '/src/assets/homeslide1.jpg',
        text:"Your journey to a new home starts here"
    },
    {
        image: '/src/assets/homeslide2.jpg',
        text:"We help you find the perfect neighborhood"
    },
    {
        image: '/src/assets/homeslide3.jpg',
        text:"Modern architecture and reliable agents"
    },
    {
        image: '/src/assets/homeslide4.jpg',
        text:"Spacious, elegant, and affordable living"
    },
    {
        image: '/src/assets/homeslide5.jpg',
        text:"'Discover your dream home with OnkeoWeb"
    }
];



function Imageslider() {
    const[current,setCurrent]=useState(0);
    const length=images.length;

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setCurrent((prev)=>(prev +1) % length);
        }, 5000);
        return ()=>clearTimeout(timer);
    },[current, length]);
    const goToNext=()=>{
        setCurrent((current +1) % length);
    };
    const GoToPrev=()=>{
        setCurrent((current-1 + length) % length);
    };
  return (
    <div className='slider'>
        <img src={images[current].image} alt="Slide"className="slide-image"/>
        <div className='caption'>{images[current].text}</div>
        <button className='prev' onClick={GoToPrev}>  </button>
        <button className='next' onClick={goToNext}>  </button>
      
    </div>
  )
}

export default Imageslider
