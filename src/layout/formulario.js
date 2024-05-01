import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonApre from './ButtonApre';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import '../assets/css/formulario.css';


export default function Formulario() {
    return (
        <>
            <Container className="formBody">
                <Row>
                    <h2>Me envie uma mensagem!</h2>
                    <Col className="contatoInputBody">
                        <FloatingLabel className="contatoInput" controlId="floatingInput" label="Nome completo">
                            <Form.Control type="text" placeholder="Nome completo" />
                        </FloatingLabel>
                    </Col>
                    <Col className="contatoInputBody">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className=" contatoInput "
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="contatoInputBody">
                        <FloatingLabel controlId="floatingTextarea2" label="Mensagem" className="contatoTextarea" >
                            <Form.Control
                                as="textarea"
                                placeholder="Deixe sua mensagem aqui"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="contatoBtn">
                        <ButtonApre />
                    </Col>
                </Row>

            </Container>
        </>
    );
}

