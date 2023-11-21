import { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

import { Container, Row, Col, Table } from "react-bootstrap";
import { FaPlus, FaEdit, FaSearch, FaTrash, FaBook } from "react-icons/fa";
import { AiOutlineEnvironment } from "react-icons/ai"; 
import { BiImages } from "react-icons/bi";

interface Item {
    idFicha: String,
        fecha: String,
        hora: String,
        departamento: String,
        ciudad: String,
        barrio: String,
        direccion: String,
        coord_este: String,
        coord_noorte: String,
        coord_cota: String,
        responsable: String    
  }

  export const Fichas = () => {

    const [data, setData] = useState<Item[]>([]);

    useEffect(() => {
        console.log("Depuracion");
        console.log({baseUrl});
        axios.get(`${baseUrl}/fichas`).then((response) => {
          setData(response.data);
        });
      }, []);
   

      return ( 
      <Container  className="container-sm  text-center py-3">
        <Row className="justify-content-center">
          <Col md={12}>
            <Table responsive striped bordered hover variant="dark" className="table-auto table-custom">
              <thead>
                <tr className="bg-success p-2 text-white custom-table-header">
                  <th>Número</th>
                  <th>Responsable</th>                  
                  <th>Ciudad</th>                  
                  <th>Dirección</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
              {data.map((item) => (
                    <tr key={String(item.idFicha)} >                  
                    <td>{item.idFicha}</td>
                    <td>{item.responsable}</td>
                    <td>{item.ciudad}</td>
                    <td>{item.direccion}</td>                  
                    <td className="action-cell">                    
                        <FaBook title="Ver Información Ficha" className="action-icons delete-icon"/>
                        <FaEdit title="Editar Ficha"  className="action-icons edit-icon" />                    
                        <FaTrash title="Eliminar Ficha" className="action-icons delete-icon" />  
                        <BiImages title="Ver Imágenes"className="action-icons delete-icon" />
                        <AiOutlineEnvironment title="Ubicación del Predio"  className="action-icons delete-icon"/>                    
                    </td>
                    </tr> 
                ))}               
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

     )


  }