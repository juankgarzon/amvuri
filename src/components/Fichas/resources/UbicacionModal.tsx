import React, { useState, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";
import { getFichaById } from '../../../components/pages/services/index';
//import { Map } from 'googlemaps';

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

      
const latitude = 2.44; 
const longitude = -76.61; 

if (window.google) {
    // Verifica si la API de Google Maps está disponible
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Crea un objeto LatLng con las coordenadas
        const myLatLng = new window.google.maps.LatLng(latitude, longitude);

        // Opciones del mapa con el centro en las coordenadas especificadas
        const mapOptions = {
            zoom: 12,
            center: myLatLng, // Centra el mapa en las coordenadas
        };

        // Crea un nuevo mapa con las opciones
        const map = new window.google.maps.Map(mapElement, mapOptions);
    }
}


    }, [show, idficha]);

   
  return (
    
        <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="text-center font-weight-bold" >Ubicación Predio Ficha No.  {idficha}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {fichaDetails && (
                    <div>                        
                        <div>
                            <label>Coordenada Este: </label>
                            <input type="text" value={fichaDetails.coord_este} readOnly />
                        </div>
                        <div>
                            <label>Coordenada Norte: </label>
                            <input type="text" value={fichaDetails.coord_noorte} readOnly />
                        </div>              
                    </div>                    
                )}        

                <div>
                    <h3>Localización del Predio</h3>
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
