import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button } from "react-bootstrap";
import { getFichaById, saveImagen } from '../../../components/pages/services/index';

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

const ImagesModal = ({ show, handleClose, idficha }: DetailsModalProps) => {

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

    const inputFileRef = useRef<HTMLInputElement | null>(null);

    const handleGuardarImagen = async () => {
        try {
            if (inputFileRef.current && inputFileRef.current.files && inputFileRef.current.files.length > 0) {
                const imagen = inputFileRef.current.files[0]; 
                const idFicha = idficha;

                const imagenData = {
                    idFicha: idFicha,
                    imagen:   imagen.name 
                };

                console.log('prueba de envio', imagenData.idFicha, imagenData);
                const response = await saveImagen(imagenData.idFicha, imagenData);
    
                if (response && response.status === 200) {
                    console.log('Imagen guardada exitosamente');                    
                } else {
                    console.error('Error al guardar la imagen:', response?.data?.message || 'Ocurrió un error');
                }
            } else {
                console.error('No se ha seleccionado ningún archivo.');
            }
        } catch (error) {
            console.error('Error al guardar la imagen:', error);
        }
    };
    
  return (
    
        <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="text-center font-weight-bold" >Imágenes del Predio Ficha No.  {idficha}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {fichaDetails && (
                    <div>  
                        <Form>
                            <Form.Group controlId="imagen" className="mb-3">
                                <Form.Label>Relaccionar Imagen</Form.Label>
                                <Form.Control type="file" ref={inputFileRef} />
                            </Form.Group>
                        </Form>     
                    </div>
                )}               
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleGuardarImagen}>
                Guardar Imagen
            </Button>  
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>              
            </Modal.Footer>
        </Modal>
    
  )
}

export default ImagesModal;
