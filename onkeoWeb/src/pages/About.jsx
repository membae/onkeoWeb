import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      
      <style>
  {`
    .about-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
      font-family: Arial, sans-serif;
      margin-top:80px;
    }

    .about-section {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      gap: 20px;
    }

    .about-section img {
      width: 45%;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .about-section p {
      width: 55%;
      font-size: 1.1rem;
      line-height: 1.6;
      color: #333;
    }

    h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 30px;
      color: #222;
    }

    /* Alternate layout for large screens */
    .about-section:nth-child(even) {
      flex-direction: row-reverse;
    }

    /* ✅ Mobile responsiveness */
    @media (max-width: 768px) {
      .about-section {
        flex-direction: column; /* stack text and image */
        text-align: center;
      }

      .about-section:nth-child(even) {
        flex-direction: column; /* prevent row-reverse on mobile */
      }

      .about-section img,
      .about-section p {
        width: 100%; /* take full width */
      }

      .about-section img {
        margin-top: 15px; /* space between text and image */
      }
    }
  `}
</style>

      <Navbar/>

      <div className="about-container">
        <h2>About Us</h2>

        <div className="about-section">
          <img src="/homeslide1.jpg" alt="Architecture" />
          <p>
            We are the home of extraordinary properties. We are a customer-focused company specialising in all things property:designing, building and tending to the most unique, exquisite and beautiful homes.
          </p>
        </div>

        <div className="about-section">
          <img src="/homeslide2.jpg" alt="Construction" />
          <p>
            We bring together skilled architects, engineers, and builders to
            deliver end-to-end solutions — from concept design to project
            completion. Our expertise bridges creativity with practicality.
          </p>
        </div>

        <div className="about-section">
          <img src="/homeslide3.jpg" alt="Sustainability" />
          <p>
            As a forward-looking company, we embrace technology and sustainable
            construction practices to build spaces that not only meet today’s
            needs but also stand the test of time.
          </p>
        </div>
        <div className="team">
            <h2>Who we are</h2>
            <p>We are a specialist team of architects, designers and luxury property developers working across Kenya.</p>
        </div>
        <div className="about-section">
            <img src="/homeslide2.jpg" alt="" />
            <p>We pride ourselves on working in close collaboration with our clients, providing support and advice on a whole variety of property requirements. Specialists in architecture, building and interiors our diverse and friendly team will be with you from start to finish, with the vision and the knowledge to make your dream home a reality.</p>
        </div>
        <h2>The Onkeo story</h2>
        <div className="about-section">
            
            <img src="/homeslide1.jpg" alt="" />
            <p> Founded in 2025 by <strong>Eric Onkeo</strong>, our company is built
            on a passion for design, innovation, and excellence in architecture
            and construction. We are committed to transforming ideas into
            reality with modern, sustainable, and functional spaces. <br /> <button>See our projects</button> </p> 
                      
        </div>
        
      </div>
      <Footer/>
    </div>
    
  );
}

export default About;
