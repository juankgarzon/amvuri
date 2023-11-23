import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';

import './Pages.css';
import Navigation from '../navigation/Navigation';

export const Login = () => { 

  const inputRef = useRef<HTMLInputElement | null>(null);
     
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
 

  return (
    <>
      <Navigation />
      
      <div className="estiloDeMarco">

      <Container>
        <Row >

        <Col md={6} className = "estiloDeColumna" noGutters >
        
        <div className="text-center"  >
              <h4 className='fw-bold fs-4 ' > ESTUDIO DE AMENAZA, VULNERABILIDAD Y RIESGO</h4>
            <div >
                <img src="Portada.jpg" alt="Descripción de la imagen" className="estiloDeImagen  img-fluid w-100" />
              </div>              
              <h4 className='fw-bold fs-4 ' > POR MOVIMIENTO EN MASA</h4>              
            </div>
          </Col>

          <Col md={6} className="estiloDeColumna" noGutters>
              <div className='login template d-flex justify-content-center align-items-center 100-w  vh-100  bg-success'>
                  <div className='30-w p-5 rounded bg-white '  >

                    <Figure className="d-flex justify-content-center">
                      <Figure.Image width={171} height={130} alt="141x140" src="login-icon.svg" /> </Figure>
                    <p className="text-center fw-bold fs-5 ">INICIO DE SESIÓN</p>

                    <Form>
                      <Form.Group className="mb-3  fw-bold" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" ref={inputRef} />
                      </Form.Group>

                      <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password"/>
                      </Form.Group>

                      <div className="d-grid gap-2">
                        <Link to="/home">
                          <Button variant="success" type="submit" size="lg">
                            Acceso
                          </Button>
                        </Link>
                      </div>

                    </Form>
                  </div>
                </div>
            </Col>
          </Row>        
        </Container>
        
    </div>
     
    </>
  )
}

