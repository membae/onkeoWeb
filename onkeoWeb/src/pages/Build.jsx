import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Build() {
  return (
    <div>
      <style>
        {`
          .build-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 40px;
            font-family: Arial, sans-serif;
          }

          .build-container h2 {
            color: #2c3e50;
            margin-bottom: 20px;
          }

          .build-container p {
            max-width: 700px;
            line-height: 1.6;
            color: #555;
            margin-bottom: 20px;
          }

          .build-image {
            margin-top: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            max-width: 80%;
            height: auto;
          }
        `}
      </style>
      
      <Navbar />

      <div className="build-container">
        <h2>Our Building Projects</h2>
        <p>
          We pride ourselves on delivering construction projects with the highest standards of
          quality, precision, and safety. Every project is carefully planned and executed to meet
          both functional and aesthetic needs.
        </p>
        <p>
          From residential homes to commercial complexes, our build team ensures durability,
          sustainability, and beauty are at the core of every structure we create.
        </p>
        <img
          src="/homeslide3.jpg"
          alt="Construction Project"
          className="build-image"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Build;
