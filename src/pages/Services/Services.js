import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <nav>
        <div>
            <img src="https://i.ytimg.com/vi/OKUFrW40xyI/maxresdefault.jpg" className='datascience-image'/><br></br>
            <h2>NASSCOM Futureskills Prime Certified Advanced Data Science with Python <br></br>Program including Free Internship & 100% Placement Assistance</h2><br></br>
            <p>This advanced NASSCOM FutureSkills Prime Certified Data Science course in Hyderabad guarantees <br></br>career transformation. Here’s a one-time opportunity to learn with the best Data Science training in Hyderabad.<br></br> Gain knowledge of data analytics, tools, and operations for data science certification and<br></br> meet the massive demand for these skills. It is VILT & ILT training!</p>
        
        <NavLink to="data-science">Data Science</NavLink>
        </div>
        <div>
            <img src="https://www.innomatics.in/wp-content/uploads/2024/09/full-stack-internship.jpg" className='datascience-image'/><br></br>
            <h2>Best Full Stack Development course with Job Assistance</h2><br></br>
             <p>A full stack web developer course will teach you how to design and develop complete websites from start to finish.<br></br> You will learn how to work on different web development aspects, including front-end, back-end, databases, debugging,<br></br> and testing. Whether you’re interested in becoming a Frontend Developer or want to work in Backend technologies,<br></br> this course will give you all the skills you need to become a full-stack developer and build a robust portfolio of projects.</p><br></br>
          <br></br>
        <NavLink to="web-development">Web Development</NavLink>

        </div>
        <div>
            <img src="https://i.pinimg.com/736x/ca/c6/b5/cac6b5720d8ffcf8f8c02c5161463ded.jpg" className='datascience-image'/><br></br>
            <h2>Learn Best Digital Marketing course in Hyderabad at <br></br>Innomatics Research Labs with 100% Job Assurance Program</h2><br></br>
            <p>About the Digital Marketing course in Hyderabad
            Marketing isn’t the same thing as it was. Everything has transformed digital,<br></br> and so the marketing is. It is the process of promoting business through various channels online. On average, a person<br></br> spends most of the day checking mobile devices and social media channels. 22% of people check their mobile phones <br></br>every few minutes, while 51% of the users look at them every few hours,</p><br></br>
        <NavLink to="digital-marketing">Digital Marketing</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Services;
