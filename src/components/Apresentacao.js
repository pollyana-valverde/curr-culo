import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonApre from '../layout/ButtonApre';

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Aprensentacao() {
    return (
        <Container className="apre_body">
            <Row className="justify-content-md-center d-flex">

                <Col className="txtApre" lg={6}>
                    <Col lg={2} className="social_icons">
                        <FaGithub />
                        <FaInstagram />
                        <FaLinkedin />
                    </Col>
                   <Col className="d-block">
                   <h2 >Olá, Sou Pollyana Valverde!</h2>
                    <h5 ><span className="article_subtitle"></span>Web developer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan odio lorem, at vehicula justo pretium sit amet. Nam sit amet accumsan magna. Vestibulum imperdiet mi felis, et bibendum lectus rutrum sed.
                    </p>
                    <Col lg={12}><ButtonApre /></Col>
                   </Col>

                </Col>

                <Col lg={5}>
                    <div
                        className=" perfil_aprentacao"
                    /> {''}
                </Col>
            </Row>
        </Container>
    )
}