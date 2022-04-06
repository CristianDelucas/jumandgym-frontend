import React  from 'react';
import Contact from './@pages/Contact/Contact';
import Description from './@pages/Description/Description';
import Home from './@pages/Home/Home';
import Methodology from './@pages/Methodology/Methodology';
import Plans from './@pages/Plans/Plans';
import logo from './assets/img/logo.png';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <a href="#home"><img className="img-fluid logo-static" src={logo} alt="logo"/></a>
    
    <Home/>
    <Description/>
    <Methodology/>
    <Plans/>
    <Contact/>
    </div>
  );
}

export default App;
