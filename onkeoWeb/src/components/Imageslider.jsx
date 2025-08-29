import React, { useEffect, useState } from 'react'
import "./Imageslider.css"

const images = [
  {
    image: '/homeslide1.jpg',
    text: <>Your journey to a new home <br /> starts here</>
  },
  {
    image: '/homeslide2.jpg',
    text: <>We help you find the <br /> perfect neighborhood</>
  },
  {
    image: '/homeslide3.jpg',
    text: "Modern architecture and reliable agents"
  },
  {
    image: '/homeslide4.jpg',
    text: <>Spacious, elegant, <br/> affordable living</>
  },
  {
    image: '/homeslide5.jpg',
    text: <>Discover your dream home <br /> with OnkeoWeb</>
  }
];

function Imageslider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000); // change every 5 seconds
    return () => clearTimeout(timer);
  }, [current, length]);

  return (
    <div className="slider">
      <div key={current} className="slide-container">
        <img
          src={images[current].image}
          alt="Slide"
          className="slide-image animate-image"
        />
        <div className="caption animate-text">
          {images[current].text}
        </div>
      </div>
    </div>
  )
}

export default Imageslider
