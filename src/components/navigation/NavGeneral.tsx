import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../navigation/NavGeneral.css'

const NavGeneral = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
     <Container>
        <Navbar.Brand  className="brand-highlight" href="home"> AMVURI </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
           <Nav > 
           <Nav.Link href="home">Inicio</Nav.Link>                        
            <Nav.Link href="registro">Registro</Nav.Link>            
            {/* <Nav.Link href="geolocalizacion">Geo-Localización</Nav.Link>
            <Nav.Link href="galeria">Imágenes</Nav.Link> */}
            <Nav.Link href="login">Cerrar sesión</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavGeneral;