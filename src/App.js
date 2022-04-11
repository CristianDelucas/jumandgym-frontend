import React, { useEffect, useState } from "react";
import {BrowserRouter as Router} from 'react-router-dom'

import Contact from './@pages/Contact/Contact';
import Description from './@pages/Description/Description';
import Home from './@pages/Home/Home';
import Methodology from './@pages/Methodology/Methodology';
import Plans from './@pages/Plans/Plans';
import Loading from './@pages/Loading/Loading';
import logo from './assets/img/logo.png';
import Sidebar from './components/core/Navbar/Sidebar/Sidebar';
import Navbar from './components/core/Navbar/Navbar';
import Footer from './components/core/Footer/Footer';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

import "./styles/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
     {
        loading ? <Loading loading={loading}/>
        :
      <div className="App">

     

        <a href="#home">
          <img className="img-fluid logo-static" src={logo} alt="logo"/>
        </a>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
      </Router>
      <Home/>
      <Description/>
      <Methodology/>
      <Plans/>
      <Contact/>
      <Footer/>
      <CookieConsent location="bottom" cookieName="myAwesomeCookieName3" expires={999} >
          This website uses cookies to enhance the user experience.
      </CookieConsent>
      
      </div>
    }
    </>
  );
}

export default App;
