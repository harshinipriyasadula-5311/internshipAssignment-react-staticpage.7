import React from 'react';
import dataScienceImage from '../../assets/services/data-science.jpg';

function DataScience() {
  return (
    <div className="data-science">
      <h2>Data Science Services</h2>
      <img src={dataScienceImage} alt="Data Science" />
      <p>We offer comprehensive data science training and consulting.</p>
    </div>
  );
}

export default DataScience;
