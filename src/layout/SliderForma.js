import { useState } from 'react';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import InfoSlider from '../data/infoSliderForma';


export default function SliderForma() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    function getInfoSlider() {
        return InfoSlider.map(sliderInfo => {
            return <Carousel.Item key={sliderInfo.id1} className='sliderCard'>
                <div>
                    <h5>{sliderInfo.sliderTitle1}</h5>
                    <label>{sliderInfo.sliderDate1}</label>
                    <p>{sliderInfo.sliderParagraph1}</p>
                </div>
            </Carousel.Item>
        })
    }



    return (
        <Container className='sliderBody'>
            <Row>
                <h1>Formação</h1>
                <Col className='sliderContent' lg={12}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>

                            {getInfoSlider()}
                    </Carousel>
                </Col>
            </Row>

        </Container>
    );
}

