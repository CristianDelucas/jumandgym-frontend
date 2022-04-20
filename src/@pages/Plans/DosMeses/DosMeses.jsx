import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";

export default function DosMeses(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <>
        <Row >
            <Col xs={12} md={6} lg={4} className="card-plan" data-aos="zoom-in">
                <div className="card-plan__content full-height">
                    <div className="card-plan__content--title">
                        Entrenamiento
                        <hr className="hr-green"/>
                    </div>
                    <div className="card-plan__content--description">
                    <p>📓 Este plan incluye entrenamiento personalizado.</p>
                    <p>🔎 Revisión mensual de tú entrenamiento.</p>
                    <p>🏋️‍♀️ Tendrás acceso a un descuento para entrenamientos personales.</p>
                    <p>🧨 Proximamente acceso a la App móvil.</p>
                    </div>
                    <div className="card-plan__content--price-description">
                    <p>Rutina de entrenamiento personalizada</p>
                    <p><span className="number-price">25.00€</span> / MES</p>
                    <p>Total <span className="number-price">50.00€</span> por 2 meses</p>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="card-plan" data-aos="zoom-in">
                <div className="card-plan__content full-height">
                    <div className="card-plan__content--title">
                        Dieta
                        <hr className="hr-green"/>
                    </div>
                    <div className="card-plan__content--description">
                    <p>📓 Este plan incluye una dieta personalizada acorde a tus necesidades.</p>
                    <p>🔎 Revisión mensual de tú dieta.</p>
                    <p>🧨 Proximamente acceso a la App móvil.</p>
                    </div>
                    <div className="card-plan__content--price-description">
                    <p>Rutina de entrenamiento personalizada</p>
                    <p><span className="number-price">25.00€</span> / MES</p>
                    <p>Total <span className="number-price">50.00€</span> por 2 meses</p>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="card-plan" data-aos="zoom-in">
                <div className="card-plan__content full-height">
                    <div className="card-plan__content--title">
                        Entrenamiento + Dieta
                        <hr className="hr-green"/>
                    </div>
                    <div className="card-plan__content--description">
                    <p>📓 Este plan incluye entrenamiento y dieta personalizada acorde a tus necesidades.</p>
                    <p>🔎 Revisión mensual de tú entrenamiento y dieta.</p>
                    <p>🏋️‍♀️ Tendrás acceso a un descuento para entrenamientos personales.</p>
                    <p>🧨 Proximamente acceso a la App móvil.</p>
                    </div>
                    <div className="card-plan__content--price-description">
                    <p>Rutina de entrenamiento personalizada</p>
                    <p><span className="number-price">35.00€</span> / MES</p>
                    <p>Total <span className="number-price">70.00€</span> por 2 meses</p>
                    </div>
                </div>
            </Col>
        </Row>
        </>
    )
}