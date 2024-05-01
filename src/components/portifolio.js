import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardExpande from "../layout/cardExpande";


export default function Portifolio (){
    return(
        <Container className="portBody">
            <Row>
                <Col>
                <h1 className="portTitle">
                    Meus projetos
                </h1>
                <CardExpande />
                </Col>
            </Row>
        </Container>
    )
}