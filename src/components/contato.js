import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from "../layout/formulario";
import CardInfo from "../layout/cardInfo";


export default function Contato() {
    return (
        <>
            <Container className="contatoBody">
                <Row>
                    <Col lg={5}>
                    <CardInfo />
                    </Col>
                    <Col lg={7}>
                       <Formulario />
                    </Col>
                </Row>


            </Container>
        </>
    );
}

