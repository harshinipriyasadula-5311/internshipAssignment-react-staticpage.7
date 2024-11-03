import React from 'react';
import notFoundImage from '../assets/not-found/404.jpg';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <img src={notFoundImage} alt="404 Not Found" />
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
}

export default NotFound;
