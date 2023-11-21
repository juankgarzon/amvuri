import React, {useState, useEffect} from 'react';

import { getFichaById, updateFichas} from '../../pages/services/index';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UpdateModal.css';

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

const UpdateModal = ({ show, handleClose, idficha }: DetailsModalProps) => {    
    const [fichaDetails, setFichaDetails] = useState<FichaData | null>(null);    

    useEffect(() =>{
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

    const handleUpdateResponsable = () => {

    if(fichaDetails){            
        const  newidFicha = fichaDetails.idFicha;
        const  newfecha = fichaDetails.fecha;
        const  newhora = fichaDetails.hora;
        const  newdepartamento = fichaDetails.departamento;
        const  newciudad = fichaDetails.ciudad;
        const  newbarrio = fichaDetails.barrio;
        const  newdireccion = fichaDetails.direccion;
        const  newcoord_este = fichaDetails.coord_este;
        const  newcoord_noorte = fichaDetails.coord_noorte;
        const  newcoord_cota = fichaDetails.coord_cota;
        const  newresponsable = fichaDetails.responsable;

        const datosNuevos = {
            idFicha:newidFicha,
            fecha:newfecha,
            hora:newhora,
            departamento:newdepartamento,
            ciudad:newciudad,
            barrio:newbarrio,
            direccion:newdireccion,
            coord_este:newcoord_este,
            coord_noorte:newcoord_noorte,
            coord_cota:newcoord_cota,
            responsable:newresponsable
        };

        const confirmActualizar = window.confirm(`¿ estás seguro de actualizar la Ficha?`);

        if(confirmActualizar){
            updateFichas(idficha, datosNuevos)
            .then((response) => {
                handleClose()
                window.location.reload()
            } )
        }
    }
        
    }

    return (
    
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title className="text-center font-weight-bold" >Actualización Ficha No.  {idficha}</Modal.Title>
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
                        <div className="form-group">
                            <label htmlFor="responsable" className="form-label">
                                Responsable
                            </label>
                            <div className="form-input">
                                <Form.Control
                                    type="text"
                                    id="responsable"
                                    defaultValue={fichaDetails.responsable}
                                    onChange={(event) => {setFichaDetails({...fichaDetails, responsable: event.target.value})}}                                
                                />
                            </div>
                        </div>                        
                    </div>
                )}               
            </Modal.Body>
            <Modal.Footer>            
                <Button variant="primary" onClick={handleUpdateResponsable}>
                    Actualizar Responsable
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>              
            </Modal.Footer>
        </Modal>
  )
}

export default UpdateModal;