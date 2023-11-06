import React, { useEffect, useRef } from 'react';
import { Container, Row, Col }from 'react-bootstrap';
import Navigation from '../navigation/NavGeneral';

export const Contacto = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
     
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
 

  return (
    <>
      <Navigation />
      <Container>
        <h1>Contactenos</h1>
        <Row>
          <Col>
            <p>Si tiene alguna pregunta o comentario, no dude en contactarnos:</p>
            <address>
              <strong>Información de Contacto:</strong><br />
              Correo: contact@example.com<br />
              Teléfono: (57) 3052675508<br />
              Dirección: Huila, Colombia
            </address>
          </Col>
          <Col>
            <form>
              <h2>Formulario de Contacto</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombres</label>
                <input type="text" className="form-control" id="name" ref={inputRef} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensage</label>
                <textarea className="form-control" id="message" rows={5} ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </Col>
        </Row>
      </Container>
    </>    
  );
}
