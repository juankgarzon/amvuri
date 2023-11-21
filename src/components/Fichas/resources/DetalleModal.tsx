import React, { useState, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";
import { getFichaById } from '../../../components/pages/services/index';

import './DetalleModal.css';

interface DetailsModalProps {
    show: boolean;
    handleClose: () => void;    
    idficha: string;
}

interface FichaData {
    idFicha: string;
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

const DetailsModal = ({ show, handleClose, idficha }: DetailsModalProps) => {

    const [fichaDetails, setFichaDetails] = useState<FichaData | null>(null);
    
useEffect(() => {
 
        const fetchData = async () => {         
            try {
                const response = await getFichaById(idficha);
                
                if (response && response.data) {                    
                    setFichaDetails(response.data.fichas || null);                
                } else {
                    console.error('Error al obtener detalles de la ficha: Respuesta incorrecta');
                }
            } catch (error) {
                console.error('Error al obtener detalles de la ficha:', error);
            }
        };

        if (show) {
            fetchData();                        
        }
    }, [show, idficha]);

    console.log(fichaDetails);
  return (
    
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title className="text-center font-weight-bold" >Información de Ficha No.  {idficha}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {fichaDetails && (
                    <div>                        
                        <div className="label-input-container">
                            <label>Fecha: </label>
                            <input type="text" value={fichaDetails.fecha} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Hora: </label>
                            <input type="text" value={fichaDetails.hora} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Departamento:</label>
                            <input type="text" value={fichaDetails.departamento} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Ciudad: </label>
                            <input type="text" value={fichaDetails.ciudad} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Barrio: </label>
                            <input type="text" value={fichaDetails.barrio} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Dirección: </label>
                            <input type="text" value={fichaDetails.direccion} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Coordenada Este: </label>
                            <input type="text" value={fichaDetails.coord_este} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Coordenada Norte: </label>
                            <input type="text" value={fichaDetails.coord_noorte} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Coordenada Cota: </label>
                            <input type="text" value={fichaDetails.coord_cota} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Responsable: </label>
                            <input type="text" value={fichaDetails.responsable} readOnly />
                        </div>
                    </div>
                )}               
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>              
            </Modal.Footer>
        </Modal>
    
  )
}

export default DetailsModal;
