import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import DarkMode from './darkMode';

import ImgPerfil from '../assets/imagens/foto-perfil.png';



export default function Cabecalho() {

  //mudar cor ao sroll
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)



  return (
    <>
      <Navbar className={color ? 'bg-body-tertiary cabecalho  fixed-top' : ' bg-body-tertiary cabecalho cabecalho-bg fixed-to '}>
        <Container>
          <Row >
            <div className="d-flex" >
              <Col lg={9} className="d-flex">

                <Navbar.Brand href="#home" className="d-flex marca" >

                  <img
                    alt=""
                    src={ImgPerfil}
                    width="40"
                    height="40"
                    className="d-inline-block align-top perfil"

                  />{' '}
                  <h5>Pollyana Valverde</h5>
                </Navbar.Brand>
              </Col>

              <Col lg={3} className=" textoBtn d-flex">
                <ul className="navegacaoNavbar " >
                  <li className="p-2">Home</li>
                  <li className="p-2">Sobre</li>
                  <li className="p-2">Skills</li>
                  <li className="p-2">Home</li>
                </ul>
                <Col md={5}><DarkMode /></Col>
              </Col>

            </div>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

