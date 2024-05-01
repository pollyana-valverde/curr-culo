import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IconTeste from '../assets/imagens/imgPerfil_1.jpg';
import '../assets/css/cardInfo.css';



export default function CardInfo() {
    return (
        <Container>
            <Row className="infosBody">
                <Col className="d-block">
                    <Col className="d-flex infos">
                        <img
                            src={IconTeste}
                            width={40}
                            height={40}
                            alt=""
                        />

                        <div className="d-block">
                            <label>Email</label>
                            <p>pollyana@examplo.com</p>
                        </div>
                    </Col>
                    <Col className="d-flex infos">
                        <img
                            src={IconTeste}
                            width={40}
                            height={40}
                            alt=""
                        />

                        <div className="d-block">
                            <label>Telefone</label>
                            <p>+55 (11) 99999-9999</p>
                        </div>
                    </Col>
                    <Col className="d-flex infos">
                        <img
                            src={IconTeste}
                            width={40}
                            height={40}
                            alt=""
                        />

                        <div className="d-block">
                            <label>Aniversário</label>
                            <p>18 de novembro, 2006</p>
                        </div>
                    </Col>
                    <Col className="d-flex infos">
                        <img
                            src={IconTeste}
                            width={40}
                            height={40}
                            alt=""
                        />

                        <div className="d-block">
                            <label>Localização</label>
                            <p>São Paulo, Brasil</p>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>

    )
}