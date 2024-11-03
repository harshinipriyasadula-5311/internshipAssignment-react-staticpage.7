import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import footer from './components/Footer'
import Services from './pages/Services/Services';
// import Design from './pages/Services/Design';
// import Development from './pages/Services/Development';
import DataScience from './pages/Services/DataScience';
import WebDevelopment from './pages/Services/WebDevelopment';
import NotFound from './components/NotFound';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />}>
        <Route path="datascience" element={<DataScience/>}/>
          <Route path="digitalmarketing" element={<DigitalMarketing />} />
          <Route path="webdevelopment" element={<WebDevelopment />} />
          <Route path="footer" element={<Footer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
