import React, { useState, useEffect } from 'react';
import { deleteFichas} from '../pages/services/index';

import { Button, Container, Row, Col, Table } from "react-bootstrap";
<<<<<<< HEAD
import { FaPlus, FaEdit, FaTrash, FaBook } from "react-icons/fa";
import { AiOutlineEnvironment } from "react-icons/ai"; 
=======
import { FaPlus, FaEdit, FaSearch, FaTrash, FaBook } from "react-icons/fa";
import { AiOutlineEnvironment } from "react-icons/ai";
>>>>>>> bf85814bb32d78804317d147a96904722803173b
import { BiImages } from "react-icons/bi";

import NavGeneral from '../navigation/NavGeneral';
import './Pages.css';
<<<<<<< HEAD
import AddModal from '../Fichas/resources/AddModal';
import DetailsModal from '../Fichas/resources/DetalleModal';
import UpdateModal from '../Fichas/resources/UpdateModal';
import UbicacionModal from '../Fichas/resources/UbicacionModal';
import ImagesModal from '../Fichas/resources/ImagesModal';

import { getFichas } from './services/index';

interface Item {  
  idFicha: String;
  fecha: String;
  hora: String;
  departamento: String
  ciudad: String;
  barrio: String;
  direccion: String;
  coord_este: String;
  coord_noorte: String;
  coord_cota: String;
  responsable: String;    
}

=======
>>>>>>> bf85814bb32d78804317d147a96904722803173b
export const Registro = () => {
  const [fichas, setFichas] = useState<Item[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedIdFicha, setSelectedIdFicha] = useState(''); 
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showImagesModal, setShowImagesModal] = useState(false);

  const handleShowAddModal = () => { setShowAddModal(true); };
  const handleCloseAddModal = () => { setShowAddModal(false); };
  const handleCloseDetailsModal = () => { setShowDetailsModal(false); };
  const handleIconClick = (idficha: string) => { setSelectedIdFicha(idficha); setShowDetailsModal(true); };
  const handleIconClickModal = (idficha: string) => { setSelectedIdFicha(idficha); setShowUpdateModal(true); };
  const handleShowUpdateModal = () => { setShowUpdateModal(true); };   
  const handleCloseUpdateModal = () => { setShowUpdateModal(false); };
  const handleShowLocationModal = (idficha: string) => { setSelectedIdFicha(idficha); setShowLocationModal(true); };  
  const handleCloseLocationModal = () => { setShowLocationModal(false); };  
  const handleShowImagesModal = (idficha: string) => { setSelectedIdFicha(idficha); setShowImagesModal(true); };  
  const handleCloseImagesModal = () => { setShowImagesModal(false); };

  useEffect(() => {
      async function cargaFichas() {
                
          try {
            const response = await getFichas();
      
            if (response && response.status === 200) {
               setFichas(response.data.fichas);       
            }
          } catch (error) {
            console.error('Error al cargar datos de MongoDB:', error);
          }
      }
      cargaFichas()
  }, [])

    const handleSaveFunction = () => {
    console.log('Guardar datos en la base de datos');
  };

  const handleDeleteFicha = async (idFicha: string) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta ficha?');
  
    if (confirmDelete) {
      try {
        // Realizar la eliminación
        const response = await deleteFichas(idFicha);
        
        // Si la eliminación es exitosa, recargar la página
        if (response && response.status === 200) {
          window.location.reload(); // Recargar la página
        }
      } catch (error) {
        console.error('Error al eliminar ficha:', error);
      }
    }
  };


  return (
    <>
      <NavGeneral />

      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto">
            <div>  
              <Button variant="primary" size="sm" className="custom-button" onClick={handleShowAddModal} >
                <div className="button-content">
                  <div className="icon">
                    <FaPlus />
                  </div>
                  <div className="text">
                    Nueva Ficha
                  </div>
                </div>
<<<<<<< HEAD
              </Button>
              <AddModal show={showAddModal} handleClose={handleCloseAddModal} handleSave={handleSaveFunction} />
            </div>
          </Col>          
        </Row>        
=======
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
>>>>>>> bf85814bb32d78804317d147a96904722803173b
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
<<<<<<< HEAD
              {fichas.map((Item) => (             
                  <tr key={String(Item.idFicha)}>                  
                    <td>{Item.idFicha}</td>
                    <td>{Item.responsable}</td>
                    <td>{Item.ciudad}</td>
                    <td>{Item.direccion}</td>                  
                    <td className="action-cell">                    
                      <FaBook 
                        title="Ver Información Ficha" 
                        className="action-icons delete-icon"                        
                        onClick={() => handleIconClick(String(Item.idFicha))}
                      />
                      <FaEdit
                        title="Editar Ficha"
                        className="action-icons edit-icon"
                        onClick={() => {
                            handleIconClickModal(String(Item.idFicha));
                            handleShowUpdateModal(); 
                        }}
                      />                   
                      <FaTrash 
                        title="Eliminar Ficha" 
                        className="action-icons delete-icon" 
                        onClick={() => handleDeleteFicha(String(Item.idFicha))}
                      />  
                      <BiImages title="Ver Imágenes"
                        className="action-icons delete-icon" 
                        onClick={() => handleShowImagesModal(String(Item.idFicha))} 
                        />
                      <AiOutlineEnvironment 
                        title="Ubicación del Predio"  
                        className="action-icons delete-icon"                        
                        onClick={() => handleShowLocationModal(String(Item.idFicha))}
                      />                    
                    </td>
                  </tr>                  
                ))} 
=======
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
>>>>>>> bf85814bb32d78804317d147a96904722803173b
              </tbody>
            </Table>

            {showDetailsModal && (
              <DetailsModal show={showDetailsModal} handleClose={handleCloseDetailsModal} idficha={selectedIdFicha} />       
            )}
            {showUpdateModal && (
              <UpdateModal show={showUpdateModal} handleClose={handleCloseUpdateModal} idficha={selectedIdFicha} />
            )}
            {showLocationModal && (
              <UbicacionModal show={showLocationModal} handleClose={handleCloseLocationModal} idficha={selectedIdFicha} />
            )}
            {showImagesModal && (
              <ImagesModal show={showImagesModal} handleClose={handleCloseImagesModal} idficha={selectedIdFicha} />
            )}
          </Col>
        </Row>
      </Container>

    </>
  )
}
