import React from 'react';
import digitalMarketingImage from '../../assets/services/digital-marketing.jpg';

function DigitalMarketing() {
  return (
    <div className="digital-marketing">
      <h2>Digital Marketing Services</h2>
      <img src={digitalMarketingImage} alt="Digital Marketing" />
      <p>Enhance your online presence with our expert digital marketing services.</p>
    </div>
  );
}

export default DigitalMarketing;
