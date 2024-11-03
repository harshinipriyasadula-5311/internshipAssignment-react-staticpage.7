import React from 'react';
import webDevelopmentImage from '../../assets/services/web-development.jpg';

function WebDevelopment() {
  return (
    <div className="web-development">
      <h2>Web Development Services</h2>
      <img src={webDevelopmentImage} alt="Web Development" />
      <p>We create modern and responsive web applications tailored to your needs.</p>
    </div>
  );
}

export default WebDevelopment;
