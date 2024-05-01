import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skills from '../layout/skills';


export default function AboutMe() {
    return (
        <Container className="about_body">
            <Row className="about_content">
                <Col lg={5} md={12} className="sobrePartI">
                    <h2>Sobre mim</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan odio lorem, at vehicula justo pretium sit amet. Nam sit amet accumsan magna. Vestibulum imperdiet mi felis, et bibendum lectus rutrum sed.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan odio lorem, at vehicula justo pretium sit amet. Nam sit amet accumsan magna. Vestibulum imperdiet mi felis, et bibendum lectus rutrum sed.
                    </p>
                </Col>
                <Col lg={6}  className="sobrePartII" >
                    <h2>Habilidades</h2>
                    <Skills />
                </Col>
            </Row>
        </Container>
    )
}
