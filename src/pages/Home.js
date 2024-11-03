import React from 'react';
import heroImage from '../assets/home/hero.jpg';
import innovationImage from '../assets/home/innovation.jpg';

function Home() {
  return (
    <div className="home">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <h1>Welcome to Innomatics Research Labs</h1>

      <h3>We just don’t train,
      We transform the careers</h3>

      <p>Innomatics Research Labs is a pioneer in “Transforming Careers and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM Future skills prime Certified Data Science, Python, Predictive Analytics Modeler, Machine Learning, Artificial Intelligence (AI), Full-stack web development,</p>
      <h4>NASSCOM Futureskills Prime Registered Business Partner</h4>

      <p>As an authorized “Training Partner with NASSCOM Futureskills Prime,” we strive to make individuals learn not just algorithms but also case studies and challenges derived from businesses.</p>
      <h4>Best Edtech company</h4>

      <p>Recognized and rewarded by Times Of India as the Best Training Institute in Hyderabad for Data Science & Digital Marketing Training. With relentless hard work, sophisticated equipment, advanced classrooms, cutting-edge training methodologies, practical training approach, and making individuals skillful. We have trained and placed 10000 students with a track record of 350+ batches, 200+ Hackathons, 150+ Industry Experts, 500+ Webinars, and 500+ Hiring Partners.</p>
      <img src={innovationImage} alt="Innovation" className="innovation-image" />
      <h3>Why People Choose Our Training</h3>
      <p>Innomatics explored all over India to get the best trainers and succeeded with it. We have a pool of trainers working with highly qualified business partners and fortune companies to provide advanced and comprehensive training. 

They curate the course content with an eye on the industry needs and standards to make students skilful and champions in solving the complex challenges of the industry.</p>
    </div>
  );
}

export default Home;
