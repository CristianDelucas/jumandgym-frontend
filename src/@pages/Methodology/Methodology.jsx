import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import img_methodology from "../../assets/img/img_methodology.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Methodology() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="c-methodology" id="methodology">
        <div className="c-methodology__methodologyContent">
          <Row className="align-items-center">
            <Col
              xs={12}
              md={12}
              lg={12}
              xl="6"
              className="p-5"
              data-aos="fade-right"
            >
            
              <img
                className="img-fluid img-section"
                src={img_methodology}
                alt="methodology"
              />
            </Col>
            <Col
              xs={12}
              md={12}
              lg={12}
              xl="6"
              className=" p-5 text-methodology"
              data-aos="fade-up"
            >
              <div className="title-section">¿COMO TRABAJAMOS?</div>
              <p>
                Ofrecemos decenas de clases todos los días, desde peso muerto y
                HIIT hasta yoga y pilates. También tenemos diferentes clases
                para diferentes niveles de habilidad. Echa un vistazo a nuestras
                páginas de clases individuales para ver qué hay y cuándo, y
                visítanos para charlar si quieres ver cómo hacemos las cosas.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
