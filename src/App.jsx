import React from 'react';
import './App.css';
import BinaryParticles from './components/bg-particles/BinaryParticles';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import CyberSecurity from './pages/services/cyberSecurity/CyberSecurity';
import DigitalForensics from './pages/services/digitalForensics/DigitalForensics';
import Footer from './components/footer/Footer';
import { 
  Routes,
  Route 
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
        <Navbar/>
        <BinaryParticles/>
        <ScrollToTop/>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="/CyberSecurity" element = {<CyberSecurity/>}/>
          <Route path="/DigitalForensics" element = {<DigitalForensics/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path="/ContactUs" element = {<ContactUs/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;
