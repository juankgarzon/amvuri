import React, { useState, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";
import { getFichaById } from '../../../components/pages/services/index';
import './UbicacionModal.css';

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

const UbicacionModal = ({ show, handleClose, idficha }: DetailsModalProps) => {

    const [fichaDetails, setFichaDetails] = useState<FichaData | null>(null);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    
useEffect(() => {
 
        const fetchData = async () => {         
            try {
                const response = await getFichaById(idficha);
                
                if (response && response.data) {     
                    setFichaDetails(response.data.fichas || null);   
                    const fichaData = response.data.fichas || null;                    
              
                    if (fichaData) {
                      const lat = parseFloat(fichaData.coord_este);
                      const long = parseFloat(fichaData.coord_noorte);
              
                      if (!isNaN(lat) && !isNaN(long)) {                      
                        setLatitude(lat);
                        setLongitude(long);
                      } else {
                        console.error('Valores de coordenadas inválidos:', lat, long);
                      }
                    } else {
                      console.error('Datos de la ficha no encontrados');
                    }
                }
            } catch (error) {
                console.error('Error al obtener detalles de la ficha:', error);
            }
        };

        if (show) {
            fetchData();                        
        }
    
    }, [show, idficha]);

    useEffect(() => {
        if (latitude !== null && longitude !== null && window.google) {
            const mapElement = document.getElementById('map');
            if (mapElement) {
               const myLatLng = new window.google.maps.LatLng(latitude, longitude);
                const mapOptions = {
                    zoom: 12,
                    center: myLatLng,
                };
                const map = new window.google.maps.Map(mapElement, mapOptions);
            }
        }
    }, [latitude, longitude]);

  
  return (
    
        <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="text-center font-weight-bold" >Ubicación Predio Ficha No.  {idficha}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {fichaDetails && (
                    <div>                        
                        <div className="label-input-container">
                            <label>Coordenada Este: </label>
                            <input type="text" value={fichaDetails.coord_este} readOnly />
                        </div>
                        <div className="label-input-container">
                            <label>Coordenada Norte: </label>
                            <input type="text" value={fichaDetails.coord_noorte} readOnly />
                        </div>              
                    </div>                    
                )}        

                <div>
                    <Modal.Title className="text-center font-weight-bold" >Localización del Predio</Modal.Title>                    
                    <div id="map" style={{ width: '100%', height: '400px' }}></div>                    
                </div>       
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>              
            </Modal.Footer>
        </Modal>
    
  )
}

export default UbicacionModal;
