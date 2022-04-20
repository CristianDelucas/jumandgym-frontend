import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import img_description from '../../assets/img/img_description.png';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Description(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <><div className="c-description" id="description">
            <div className="c-description__descriptionContent">
                <Row>
                <div className="title-section">¿QUIENES SOMOS?</div>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={12} lg={12} xl="6" className=" p-5 text-description" data-aos="fade-up">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis odio turpis, ac laoreet felis venenatis ut. Sed eu tellus et libero tempor consectetur a in dui. Duis sollicitudin nec risus ut accumsan. Proin varius eleifend aliquet. Integer condimentum fringilla dui, fermentum varius urna gravida mattis. Nam efficitur blandit mi et elementum. In accumsan vitae risus sit amet pellentesque. Integer et dignissim elit. Ut tincidunt sapien ut diam consectetur, vel ultrices enim mollis.

                        Vestibulum a metus id felis iaculis efficitur ac eu enim. Donec a malesuada est. In venenatis, erat sit amet venenatis vulputate, dui sapien aliquam massa, sed tempor tellus nisl mattis lectus. Cras non tellus arcu. Aliquam erat volutpat. Cras mattis suscipit dui, sit amet interdum mauris. Nulla et risus vitae neque dignissim convallis. Aenean placerat arcu arcu, ut rhoncus ex mattis at. Sed dictum tempus nunc, quis aliquet libero placerat non. Fusce id mi eget arcu auctor facilisis et non quam.

                        sit amet interdum mauris. Nulla et risus vitae neque dignissim convallis. Aenean placerat arcu arcu, ut rhoncus ex mattis at. Sed dictum tempus nunc, quis aliquet libero placerat non. Fusce id mi eget arcu auctor facilisis et non quam.
                        </p>
                    </Col>
                    <Col xs={12} md={12} lg={12} xl="6"  className="p-5" data-aos="fade-up">
                        <img className="img-fluid img-section" src={img_description} alt="Description"/>
                    </Col>
                </Row>
            </div>
        </div></>
    )
}