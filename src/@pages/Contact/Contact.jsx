import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import { Col, Row } from 'react-bootstrap';
export default function Contact(){


    const {register, handleSubmit, formState: {errors}} = useForm();

    

    const submit = async(data) =>{
        
        
    }

    return(
        <>
            <div className="c-contact" id="contact">
            <div className="c-contact__mainContent">
                <div className="title-section">
                    Formulario de contacto
                </div>
                <p className="description-section">Contactanos si tienes cualquier duda sin ningún problema en jag@jumandgym.com</p>
                <form className="form-contact" onSubmit={handleSubmit(submit)}>
                <Row className="justify-content-center">
                    <Col md={12} lg={4} className="pt-3">
                        <p >Nombre</p>
                        <input className="form-contact__input" id="name" type="text" placeholder="Nombre Completo" {...register("name", {required:{value:true, message:"Es obligatorio"}})}/>
                        {errors.name && <p>{errors.name.message}</p>}
                    </Col>
                    <Col md={12} lg={4} className="pt-3">
                        <p>Email</p>
                        <input className="form-contact__input" id="email" type="text" placeholder="Dirección e-mail" {...register("email", {required:{value:true, message:"Es obligatorio"}})}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    </Col>
                    <Col  md={12} lg={4} className="pt-3">
                        <p>Teléfono</p>
                        <input className="form-contact__input" id="number" type="text" placeholder="Teléfono" {...register("number", {required:{value:true, message:"Es obligatorio"}})}/>
                        {errors.number && <p>{errors.number.message}</p>}
                    </Col>

                    <Col xs={12} className="pt-3">
                        <p>Asunto</p>
                        <input className="form-contact__input input-asunto" id="asunto" type="text" placeholder="Asunto" {...register("asunto", {required:{value:true, message:"Es obligatorio"}})}/>
                        {errors.number && <p>{errors.number.message}</p>}
                    </Col>
                    <Col xs={12} className="pt-3">
                        <p>Mensaje</p>
                        <textarea className="form-contact__input input-asunto" id="mensaje" type="text" placeholder="Rellene aquí su mensaje..." {...register("mensaje", {required:{value:true, message:"Es obligatorio"}})}/>
                        {errors.number && <p>{errors.number.message}</p>}
                    </Col>
                    <Col  className="pt-4">
                    <button className="buttonForm" type="submit" >ENVIAR MENSAJE</button>
                    </Col>
                </Row>
                
                
            </form>
            
            </div>
            </div>
            <div className="hr-contact"></div>
        </>
    )
}