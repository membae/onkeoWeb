import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Imageslider from "../components/Imageslider";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Imageslider />
      <section className="main">
        <div>
          <h3>Construction works</h3>
        <h1>We build spaces you dream of</h1>
        <h2>About Arqmat Builders Limited</h2>
        <p>
          Customers are at the centre of everything we do and that is reflected in our company’s vision and values. While our vision defines our destination, our core values serve as our roadmap, guiding our actions for the benefit of all our customers.
        </p>
        <Link to="/about">
        <button> About Us</button>
        </Link>
        </div>

        <div>
          <img src="/src/assets/homeslide2.jpg" alt="" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
