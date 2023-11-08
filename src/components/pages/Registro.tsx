import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { FaPlus, FaEdit, FaSearch, FaTrash, FaBook } from "react-icons/fa";
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiImages } from "react-icons/bi";

import NavGeneral from '../navigation/NavGeneral';
import './Pages.css';
export const Registro = () => {

  return (
    <>
      <NavGeneral />

      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="primary" size="sm" className="custom-button">
              <div className="button-content">
                <div className="icon">
                  <FaPlus />
                </div>
                <div className="text">
                  Nueva Ficha
                </div>
              </div>
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="secondary" size="sm" className="custom-button">
              <div className="button-content">
                <div className="icon">
                  <FaSearch />
                </div>
                <div className="text">
                  Buscar Ficha
                </div>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="container-sm  text-center py-3">
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
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-cell">
                    <FaBook title="Ver Información Ficha" className="action-icons delete-icon" />
                    <FaEdit title="Editar Ficha" className="action-icons edit-icon" />
                    <FaTrash title="Eliminar Ficha" className="action-icons delete-icon" />
                    <BiImages title="Ver Imágenes" className="action-icons delete-icon" />
                    <AiOutlineEnvironment title="Ubicación del Predio" className="action-icons delete-icon" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

    </>
  )
}
