import React, { useState } from 'react';
import locationImage from '../assets/contact/location.jpg';
import contactImage from '../assets/contact/contact.jpg';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get in touch with you soon.`);
  };

  return (
    <div className="contact">
      <h1 className='heading'>Contact Us</h1>
      {/* <img src={contactImage} alt="Contact" className="contact-image" /> */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <select id='dropdown'
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="Data Science">Data Science</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Fullstack Development">Fullstack Development</option>
        </select>

        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <div className='footer'>
     
 <h1 id='institute-name'>INNOMATICS RESEARCH LABS</h1>
      
<h5>A leading training institute, Innomatics Research Labs offers courses in areas such as NASSCOM Futureskills Prime Certified Data Science, Python, AI, Data Analytics, Full Stack Development, and Digital Marketing. Our practical training is designed meticulously to meet industry needs and provide valuable certification upon completion, empowering individuals to excel in their careers.</h5>
<h2>Courses</h2>
        <h4>
Data Science,
Online Data Science,
Advanced Generative AI,
Full Stack Web Developer,
Digital Marketing,
Placements,
Partner with us,
Privacy Policy</h4><br></br>
<h4 className='footer-para'>© 2024 Innomatics Research Labs. All rights reserved.</h4>
      </div>
      {/* <img src={locationImage} alt="Location" className="location-image" /> */}
    </div>
  );
}

export default Contact;
