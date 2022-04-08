import React from 'react'
import {FaBars} from 'react-icons/fa'
import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar__container">

                <a className="logo" href='#home'>JUMANDGYM</a>

                <div className="mobileIcon">
                    <FaBars />
                </div>
                
                <ul className="navMenu">
                    <li className="navMenu__item">
                        <a className="navMenu__item--links" href='#home'>Inicio</a>
                    </li>
                    <li className="navMenu__item">
                        <a className="navMenu__item--links" href='#description'>Descripción</a>
                    </li>
                    <li className="navMenu__item">
                        <a className="navMenu__item--links" href='#methodology'>Metodología</a>
                    </li>
                    <li className="navMenu__item">
                        <a className="navMenu__item--links" href='#plans'>Planes</a>
                    </li>
                    <li className="navMenu__item">
                        <a className="navMenu__item--links" href='#contact'>Contacto</a>
                    </li>
                </ul>

                <div className="navBtn">
                    <a className="navBtn__link" href='#'>App</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar