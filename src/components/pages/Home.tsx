import React from 'react'
import NavGeneral from '../navigation/NavGeneral'
import { Container, Row, Col } from 'react-bootstrap';
import './Pages.css';

import './Pages.css';

export const Home = () => {
  return (
    <>
      <NavGeneral />

      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col xs={12} md={6} className="text-center">
<<<<<<< HEAD
            
          <h1>Bienvenido a Nuestra Página de Inicio</h1>
=======


            <h1>Bienvenido a Nuestra Página de Inicio</h1>
>>>>>>> bf85814bb32d78804317d147a96904722803173b
            
            <p>Registro de información de campo para edificaciones expuestas a la ocurrencia de movimientos en masa</p>

            <h2> Introducción </h2>

            <p>  Apartir de la expedición de la ley de gestión del riesgo de desastres (Ley
              1523 de 2012), los municipios del país deben hacer estudios de riesgos
              naturales como parte esencial de las políticas de planificación del
              desarrollo seguro y gestión ambiental territorial sostenible.
            </p>

            <h2> Generalidades </h2>

            <p>  Se ha presentado en la Ley 1523 de 2012, la gestión del riesgo es un proceso social que
              enmarca tres componentes principales: el conocimiento del riesgo, la reducción del riesgo y
              el manejo de desastres, cuyo fin es contribuir a la seguridad, el bienestar, la calidad de vida
              de las personas y al desarrollo sostenible. El proceso planteado en esta guía comprende tres
              grandes etapas: 1) análisis del riesgo, 2) evaluación del riesgo, y 3) mitigación y prevención
<<<<<<< HEAD
              del riesgo. Cada una de ellas consta, a su vez, de una serie de elementos y procesos
              que, de acuerdo con el tipo de evaluación que se realice, pueden ser de mayor o menor grado de detalle y complejidad.
            </p>




          </Col>
=======
              del riesgo (figura 1-1). Cada una de ellas consta, a su vez, de una serie de elementos y procesos
              que, de acuerdo con el tipo de evaluación que se realice, pueden ser de mayor o menor grado de detalle y complejidad.
            </p>
       
            
          </Col >
>>>>>>> bf85814bb32d78804317d147a96904722803173b
          <Col xs={12} md={6} className="text-center">
            <img src="Portada.jpg" alt="Imagen de inicio" className="img-fluid" />
          </Col>

        </Row >
      </Container >
    </>
  )
}
