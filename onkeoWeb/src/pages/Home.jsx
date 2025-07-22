import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Imageslider from "../components/Imageslider";
import "../index.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Imageslider />
      <section className="main">
        <h1>ONKEO ENGINEERS LTD - Contacting Firm Kenya</h1>
        <p>
          Welcome to Burhani Engineers, one of the best engineering companies in
          Nairobi, Kenya. We are committed to excellence and have been a
          cornerstone of innovation and reliability in the engineering industry
          for many years.
        </p>

        <p>
          We take pride in our client-centric approach, ensuring that each
          project is tailored to meet its unique needs. Our holistic approach
          ensures that clients receive comprehensive and sustainable engineering
          solutions that align with global standards and local regulations.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
