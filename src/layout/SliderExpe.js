import { useState } from 'react';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import InfoSlider from '../data/infoSliderExpe';


export default function SliderForma() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    function getInfoSlider() {
        return InfoSlider.map(sliderInfo2 => {
            return <Carousel.Item key={sliderInfo2.id2} className='sliderCard'>
                <div>
                    <h5>{sliderInfo2.sliderTitle2}</h5>
                    <label>{sliderInfo2.sliderDate2}</label>
                    <p>{sliderInfo2.sliderParagraph2}</p>
                </div>
            </Carousel.Item>
        })
    }



    return (
        <Container className='sliderBody'>
            <Row>
                <h1>Experiência</h1>
                <Col className='sliderContent' lg={12}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>

                            {getInfoSlider()}
                    </Carousel>
                </Col>
            </Row>

        </Container>
    );
}

