import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SliderForma from "../layout/SliderForma";
import SliderExpe from "../layout/SliderExpe";

import '../assets/css/slider.css';

export default function Resumo (){
    return(
        <Container className="resumeBody">
            <Row>
                <Col>
                <SliderForma />
                </Col>
                <Col>
                <SliderExpe />
                </Col>
            </Row>
        </Container>
    )
}