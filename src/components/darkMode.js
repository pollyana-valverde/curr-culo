import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/darkMode.css';


export default function DarkMode() {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute("data-theme", 'dark');
        localStorage.setItem('selectedTheme', 'dark')
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute("data-theme", 'light');
        localStorage.setItem('selectedTheme', 'light')
    };

    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme === 'dark') {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (


        <Container>
            <Row>
                <Col lg={12}>
                    <label className="switch-container">
                        <input
                            type="checkbox"
                            onChange={toggleTheme}
                            defaultChecked={selectedTheme === 'dark'}
                        ></input>
                        <span className="slider" id="btn-dark-mode-toggle"></span>
                    </label>
                </Col>
            </Row>
        </Container>
    )
}