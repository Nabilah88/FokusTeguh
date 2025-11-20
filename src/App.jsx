import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Hero from './Components/Hero/Hero';
import Mission from './Components/Mission/Mission';
import Company from './Components/Company/Company';
import Expertise from './Components/Expertise/Expertise';
import About from './Components/About/About';
import Selling from './Components/Selling/Selling';
import './Components/Selling/Selling.css'
import Project_card from './Components/Project_card/Project_card';
import Clients from './Components/Clients/Clients';
import Certificate from './Components/Certification/Ceritificate';
import Contact from './Components/Contact/Contact';
import CallAction from './Components/CallAction/CallAction'

import Vision from './Pages/Visionmission'; 
import HeroTeam from './Pages/Team/Team';

import Certified from './Pages/Credentials/Certification'
import Construction from './Pages/Construction/Construction'
import Maintenance from './Pages/Maintenance/Maintenance'
import Project from './Pages/Project/Management'
import Gallery from './Pages/Gallery/Gallery'
import Featured from './Pages/Featured/Featured'
import Project_Client from './Pages/Client/Project_Client'
import ContactUs from './Pages/Contacts/Contact'
import GetAquote from './Pages/Quotes/GetAquote'
const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <br />
                <div className="container">
                  <About />
                </div>
                <Company />
                <div className="container">
                  <Expertise />
                </div>
                <div className="container">
                  <Project_card />
                </div>
                <div className="container">
                  <CallAction />
                </div>
               
              </>
            }
          />
          <Route path="/" element={<App />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/team" element={<HeroTeam />} />
          <Route path="/certification" element={<Certified />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Maintenance" element={<Maintenance />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Client" element={<Project_Client />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/GetAquote" element={<GetAquote />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
