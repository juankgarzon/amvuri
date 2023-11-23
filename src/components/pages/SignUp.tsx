import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';

import './Pages.css';
<<<<<<< HEAD
=======

>>>>>>> bf85814bb32d78804317d147a96904722803173b
import NavRegistro from '../navigation/NavRegistro'

export const SignUp = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <NavRegistro />

      <div className="estiloDeMarco  h-auto w-auto">

        <Container>
          <Row className="justify-content-center w-60 wh-50">
            <Col md={5} >
              <Card className="cardStyle">
                <Card.Header as="h5" className="text-center">REGISTRO DE USUARIO</Card.Header>
                <Card.Body>

                  <div className='login template d-flex justify-content-center align-items-center 100-w  vh-100  '>
                    <div className='30-w p-5 rounded bg-white '  >

                      <Figure className="d-flex justify-content-center">
                        <Figure.Image width={171} height={130} alt="141x140" src="login-icon.svg" /> </Figure>

                      <Form>
                        <Form.Group className="mb-3  fw-bold" controlId="formBasicName">
                          <Form.Label>Nombres</Form.Label>
                          <Form.Control type="text" ref={inputRef} />
                        </Form.Group>

                        <Form.Group className="mb-3  fw-bold" controlId="formBasicEmail">
                          <Form.Label>Correo Electrónico</Form.Label>
                          <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>

                        <div className="d-grid gap-2">
                          <Link to="/home">
                            <Button variant="success" type="submit" size="lg">
                              Registrar
                            </Button>
                          </Link>
                        </div>

                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>

      </div>


    </>
  )
}
