import React from 'react'
import NavGeneral from '../navigation/NavGeneral'
import { Container, Row, Col } from 'react-bootstrap';
import './Pages.css';

export const Home = () => {
  return (
    <>
      <NavGeneral/>

      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col xs={12} md={6} className="text-center">
            <h1>Bienvenido a Nuestra Página de Inicio</h1>
            <p>Registro de información de campo para edificaciones expuestas a la ocurrencia de movimientos en masa</p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img src="Portada.jpg" alt="Imagen de inicio" className="img-fluid" />
          </Col>
        </Row>
      </Container>  



    </>
  )
}
