import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import img_description from "../../assets/img/img_description.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Description() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="c-description" id="description">
        <div className="c-description__descriptionContent">
          
          <Row className="align-items-center">
            <Col
              xs={12}
              md={12}
              lg={12}
              xl="6"
              className=" p-5 text-description"
              data-aos="fade-up"
            >
            <div className="title-section">¿QUIENES SOMOS?</div>
              <p>
                No estamos aquí para ponerte en forma, estamos aquí para
                motivarte y que logres tus objetivos. Si no estás seguro de
                cuáles son tus objetivos ó no sabes por dónde empezar en su
                viaje en busca de un físico saludable, venga y hable con uno de
                nuestros entrenadores calificados que puede ayudarle a
                desarrollar un plan.
              </p>
            </Col>
            <Col
              xs={12}
              md={12}
              lg={12}
              xl="6"
              className="p-5"
              data-aos="fade-up"
            >
              <img
                className="img-fluid img-section"
                src={img_description}
                alt="Description"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
