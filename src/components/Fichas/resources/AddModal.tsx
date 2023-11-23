import React, { useState } from 'react';
import { Modal, Form , Button, Row, Col, Card } from "react-bootstrap";
import { saveFichas } from '../../../components/pages/services/index';

interface AddModalProps {
    show: boolean;
    handleClose: () => void;
    handleSave: () => void;
  }
function AddModal({ show, handleClose, handleSave } : AddModalProps) {
  
      const [idficha, setficha] = useState('');
      const handlefichaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setficha(e.target.value);
      }
    
      const [hora, sethora] = useState('');
      const handlehoraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          sethora(e.target.value);
      }
    
      const [fecha, setfecha] = useState('');
      const handlefechaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setfecha(e.target.value);
      }
    
      const [departamento, setdepto] = useState('');
      const handledeptoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setdepto(e.target.value);
      }
    
      const [ciudad, setciudad] = useState('');
      const handleciudadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setciudad(e.target.value);
      }
    
      const [barrio, setbarrio] = useState('');
      const handlebarrioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setbarrio(e.target.value);
      }
    
      const [direccion, setdireccion] = useState('');
      const handledireccionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setdireccion(e.target.value);
      }
    
      const [coord_este, seteste] = useState('');
      const handleesteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          seteste(e.target.value);
      }
    
      const [coord_noorte, setnorte] = useState('');
      const handlenorteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setnorte(e.target.value);
      }
    
      const [coord_cota, setcota] = useState('');
      const handlecotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setcota(e.target.value);
      }
    
      const [responsable, setresponsable] = useState('');
      const handleresponsableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setresponsable(e.target.value);
      }

    interface FichasData {
    idficha: string;
    fecha: string;
    hora: string;
    departamento: string;
    ciudad: string;
    barrio: string;
    direccion: string;
    coord_este: string;
    coord_noorte: string;
    coord_cota: string;
    responsable: string;
  }

   const handleSubmit = () => {
  const dataToSave: FichasData = {
    idficha: idficha,
    fecha: fecha,
    hora: hora,
    departamento: departamento,
    ciudad: ciudad,
    barrio: barrio, 
    direccion: direccion,
    coord_este: coord_este,
    coord_noorte: coord_noorte,
    coord_cota: coord_cota,
    responsable: responsable
  };

  saveFichas(dataToSave)
    .then((response) => {
      handleClose();
      window.location.reload();
    });
};
     
      return (        
          <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="text-center font-weight-bold" >Información de Ficha Nueva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Card className="cardStyle">
                <Card.Header as="h5" className="text-center bg-info"> IDENTIFICACION DE REGISTRO</Card.Header>

                <Card.Body> 

                <Row>
                    <Col>
                      <Form.Group controlId="idficha">
                        <Form.Label>Número de Ficha</Form.Label>
                        <Form.Control
                          type="text"
                          name="idficha"
                          value={idficha}
                          onChange={handlefichaChange} 
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="hora">
                        <Form.Label>Hora de visita</Form.Label>
                        <Form.Control
                          type="text"
                          name="hora"
                          value={hora}
                          onChange={handlehoraChange} 
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="fecha">
                        <Form.Label>Fecha de visita</Form.Label>
                        <Form.Control
                          type="date"
                          name="fecha"
                          value={fecha}
                          onChange={handlefechaChange} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>  
              </Card>

              <div className="mt-4"></div>

          <Card className="cardStyle">
            <Card.Header as="h5" className="text-center bg-info"> IDENTIFICACION DE LA EDIFICACION</Card.Header>
              <Card.Body> 
                  <Row>
                    <Col>                
                      <Form.Group controlId="departamento">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control
                          type="text"
                          name="departamento"
                          value={departamento}
                          onChange={handledeptoChange} 
                        />
                      </Form.Group>
                    </Col>

                    <Col>                
                    <Form.Group controlId="ciudad">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                          type="text"
                          name="ciudad"
                          value={ciudad}
                          onChange={handleciudadChange} 
                        />
                      </Form.Group>
                    </Col>

                    <Col>                
                    <Form.Group controlId="barrio">
                        <Form.Label>Barrio</Form.Label>
                        <Form.Control
                          type="text"
                          name="barrio"
                          value={barrio}
                          onChange={handlebarrioChange} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                
              <div className="mt-4"></div>

              <Form.Group controlId="direccion">
                  <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      type="text"
                      name="direccion"
                      value={direccion}
                      onChange={handledireccionChange} 
                    />
              </Form.Group>

              <div className="mt-4"></div>
              <p className="text-center"> <b>Coordenadas Geográficas</b></p>

              <Row>
                  <Col>
                    <Form.Group controlId="coord_este">
                      <Form.Label>Este</Form.Label>
                      <Form.Control
                        type="text"
                        name="coord_este"
                        value={coord_este}
                        onChange={handleesteChange} 
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="coord_noorte">
                      <Form.Label>Norte</Form.Label>
                      <Form.Control
                        type="text"
                        name="coord_noorte"
                        value={coord_noorte}
                        onChange={handlenorteChange} 
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="coord_cota">
                      <Form.Label>Cota</Form.Label>
                      <Form.Control
                        type="text"
                        name="coord_cota"
                        value={coord_cota}
                        onChange={handlecotaChange} 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="mt-4"></div>

              <Form.Group controlId="responsable">
                  <Form.Label>Responsable de la edificación</Form.Label>
                    <Form.Control
                      type="text"
                      name="responsable"
                      value={responsable}
                      onChange={handleresponsableChange} 
                    />
              </Form.Group>
                
                </Card.Body>  
              </Card>    
            </Form>

              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Guardar
              </Button>
            </Modal.Footer>
          </Modal>        
    )
}

export default AddModal;