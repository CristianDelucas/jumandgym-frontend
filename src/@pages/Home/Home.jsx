import React from 'react'
import { Col, Row } from 'react-bootstrap';


import jumandgym from '../../assets/img/jumandgym.png';
import logo from '../../assets/img/logo.png';
import arrow from '../../assets/img/arrow.svg';
import './Home.scss';



export default function Home(){
    return(
        <><div className='c-home' id="home">
        
            <div className='c-home__bgHome'></div>
            <div className='c-home__mainContent'>
                <div className='mainContent'>
                    <div className='mainContent-logo'>
                        <Row xs={2} md={4} lg={12} className="align-items-center pb-5">
                            <Col xs={12} md={12} lg={4} className="text-lg-end text-center ">
                            <img className="img-fluid logo" src={logo} alt="Logo"/>
                            </Col>
                            <Col xs={12} md={12} lg={8} className="text-lg-start text-center">
                                <Col><img className="img-fluid" src={jumandgym} alt="JUMANDGYM"/></Col>
                            </Col>
                        </Row>
                    </div>
                    <div className='mainContent-options '>
                            <Row xs={1} className="align-items-center pt-5">
                                <a href="#description"><img className="img-fluid arrow" src={arrow} alt="arrow"/></a>
                            </Row>
                    </div>
                </div>
                
            </div>
        </div></>
    )
}