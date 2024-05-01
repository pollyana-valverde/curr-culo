import React from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../assets/css/cardExpande.css';

import InfoCardExpande from "../data/infoCardExpande";

export default function CardExpande() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    function getInfoCardExpande() {
        return InfoCardExpande.map((cardInfo, index) => {
            return (
                <Card key={index} className={`cardExpandeBody ${activeIndex === index ? "cardAtivo" : ""}`} style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={cardInfo.cardImg} onClick={() => handleToggle(index)} />
                    <Card.Body>
                        <Card.Title className="cardExpandeTitle">{cardInfo.cardTitle}</Card.Title>
                        <Card.Text>
                            {cardInfo.cardText}
                        </Card.Text>
                        <Button className="btnPort">{cardInfo.cardBtnLink}</Button>
                    </Card.Body>
                </Card>
            );
        });
    }

    return (
        <Container>
            <Row>
                <Col className="cardExpande">
                    {getInfoCardExpande()}
                </Col>
            </Row>
        </Container>
    );
}