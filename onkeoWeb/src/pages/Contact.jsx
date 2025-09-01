import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ygj9sb",   // Replace with your EmailJS Service ID
        "template_e5feo4l",  // Replace with your EmailJS Template ID
        form.current,
        "rHMCfjJwQ86mQP0Cp"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          e.target.reset();          
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <style>{`
  .contact-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #f9f9f9;
    font-family: Arial, sans-serif;
    margin-top:100px;
  }
  .contact-container h4 {
    text-align: center;
    margin-bottom: 10px;
    color: #333;
    font-weight: normal;
  }
  .contact-container h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  .contact-form label {
    margin: 10px 0 5px;
    font-weight: bold;
  }
  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .contact-form textarea {
    resize: vertical;
    min-height: 100px;
  }
  .button-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .contact-form button {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 8px;
            background: gray;
            color: black;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s ease;
          }
  .contact-form button:hover {
     background: #161515ff;
  }

  .info-section {
    display: flex;
    justify-content: space-around;
    margin: 40px 0;
    padding: 20px 40px;
    padding-left: 10px;
    background: #f9f9f9;
    gap: 20px;
    flex-wrap: wrap; /* helps when screen shrinks */
  }

  .office, .career {
   flex: 0 1 45%;   /* each card takes ~45% width */
  max-width: 500px;
  padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
  }

  .office h2, .career h2 {
    color: black;
    margin-bottom: 20px;
  }

  .office p, .career p {
    color: black;
    margin-bottom: 20px;
  }

  /* ✅ Responsive fix */
  @media (max-width: 768px) {
    .info-section {
      flex-direction: column;
      align-items: center;
    }
    .office, .career {
      width: 100%;
      max-width: 500px;
    }
  }
`}</style>

      <Navbar/>

      <div className="contact-container">
        
        <h4>WE'RE HERE TO HELP</h4>
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>First Name</label>
          <input type="text" name="firstName" placeholder="Enter your first name" required />

          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Enter your last name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Phone</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" />

          <label>City</label>
          <input type="text" name="city" placeholder="Enter your city" />

          <label>Message</label>
          <textarea name="message" placeholder="Write your message here..." required></textarea>

          <div className="form-group button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
        <section className="info-section">
        <div className="office">
            <h2> Visit our <br /> Office</h2>
            <p>We are located at Kisii town, Daraja mbili road, Building ABC.</p> 
            <p>Our office hours are: <br />8:30 am - 5:00 pm Monday - Friday</p>
        </div>

        <div className="career">
            <h2>Career With Onkeo</h2>
            <p>Join our team! We’re always looking for talented individuals to grow with us.</p>
            <button>Contact Us</button>
        </div>
        </section>
        <Footer/>
    </div>
  );
}

export default Contact;
