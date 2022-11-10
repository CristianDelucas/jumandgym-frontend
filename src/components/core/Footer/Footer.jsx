import "./Footer.scss";
import instagram from '../../../assets/img/instagram.png';
import facebook from '../../../assets/img/facebook.png';
import whatsapp from '../../../assets/img/whatsapp.png';

import { Col, Row } from 'react-bootstrap';
export default function Footer(){
    return(
        <div className="main-footer">
            <div className="container text-center">
                <Row className="row ">
                    <Col xs={12} md={4}>
                        <h4>Redes Sociales</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a className="links" href="https://www.instagram.com/jumandgym/" target="_blank"><img className="img-redes" src={instagram} alt="instagram"/>
                                @jumandgym
                                </a>
                            </li>
                            <li>
                                <a className="links" href="https://www.instagram.com/jumandgym/" target="_blank"><img className="img-redes" src={facebook} alt="facebook"/>
                                @jumandgym</a>
                            </li>
                            <li><a className="links" href="https://web.whatsapp.com/send?phone=34222222222&text=¡Hola JumAndGym!" target="_blank"><img className="img-redes" src={whatsapp} alt="whatsapp"/>
                            +34 222222222
                            </a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>Contacto</h4>
                        <ul className="list-unstyled">
                            <li>jag@jumandgym.com</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>Menu</h4>
                        <ul className="list-unstyled">
                            <li>INICIO</li>
                            <li>QUIENES SOMOS</li>
                            <li>METODOLOGIA</li>
                            <li>PLANES</li>
                            <li>CONTACTO</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row >
                    <Col xs={12}>
                        &copy;{new Date().getFullYear()} jumandgym
                    </Col>
                </Row>
            </div>
        </div>
    )
}