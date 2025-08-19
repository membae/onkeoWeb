import React from 'react';
import Navbar from '../components/Navbar';

function Architecture() {
  return (
    <div>
      <style>
        {`
          .architecture-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 40px;
            font-family: Arial, sans-serif;
          }

          .architecture-container h2 {
            color: #2c3e50;
            margin-bottom: 20px;
          }

          .architecture-container p {
            max-width: 700px;
            line-height: 1.6;
            color: #555;
            margin-bottom: 20px;
          }

          .architecture-image {
            margin-top: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            max-width: 80%;
            height: auto;
          }
        `}
      </style>
      <Navbar/>

      <div className="architecture-container">
        <h2>Our Architecture Design</h2>
        <p>
          At our firm, we believe architecture is more than just buildings – it’s about creating
          spaces that inspire, connect, and serve communities. Our team focuses on modern,
          sustainable, and innovative designs.
        </p>
        <p>
          From residential homes to large commercial projects, we ensure every design tells
          a story and blends functionality with beauty.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Architecture Design"
          className="architecture-image"
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Architecture;
