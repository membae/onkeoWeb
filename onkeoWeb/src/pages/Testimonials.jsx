import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Testimonials() {
    const[testimonials, setTestimonials]=useState([])

    useEffect(()=>{
        fetch('/db.json')
        .then((res)=>res.json())
        .then((data)=>setTestimonials(data.testimonials))
        .catch((error)=>console.error("error fetching testimonials",error))
    },[ ])
  return (
    <div>
      <style>
        {`
          img {
            width: 100%;
            height: 80vh;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          .testHead {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
            color: black;
          }
          .testHead h2 {
            margin-bottom: 4rem;
          }
          .testHead p {
            max-width: 800px;
            margin-bottom: 4rem;
            font-size: 20px;
          }
          .testHead button {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 8px;
            background: gray;
            color: black;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s ease;
          }
          .testHead button:hover {
            background: #f5f5f5;
          }
            .testimonials-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
            padding: 1rem;
          }
          .testimonial-card {
            padding: 1.5rem;
            border-radius: 10px;
            background: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: left;
          }
          .testimonial-card p {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 1rem;
          }
          .testimonial-card h3 {
            font-size: 16px;
            font-weight: bold;
          }

          /* Responsive: single column on small screens */
          @media (max-width: 768px) {
            .testimonials-grid {
              grid-template-columns: 1fr;
            }
        }
        `}
      </style>
      <Navbar/>

      <div>
        <img src="/src/assets/homeslide3.jpg" alt="" />
      </div>

      <section className="testHead">
        <h2>WHAT OUR CLIENTS SAY</h2>
        <p>
          Testimonials are invaluable because they tell the story of our business
          from the client’s perspective, confirming that we are providing the personal
          service we strive to deliver. Feedback is vital in ensuring we continue
          to improve our service wherever possible.
        </p>
        <button>LEAVE A REVIEW</button>
      </section>
      <section>
        <div className="testimonials-grid">
            {
                testimonials.map((t)=>(
                    <div key={t.id} className='testimonials-card'>
                        <h3>{t.title}</h3>
                        <p>"{t.feedback}"</p>

                    </div>
                ))
            }
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Testimonials
