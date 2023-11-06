import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../navigation/NavRegistro.css'

const NavRegistro = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
     <Container>
        <Navbar.Brand href="/" className="brand-highlight" > AMVURI </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
           <Nav >             
            <Nav.Link href="/login">Inicio de Sesión</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRegistro;