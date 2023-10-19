import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Quincy Vault</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">CDs</Nav.Link>
            <Nav.Link href="#link">Vinilos</Nav.Link>
            <Nav.Link href="#link">Libros</Nav.Link>
            <NavDropdown title="Géneros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rock</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Soul
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Funk</NavDropdown.Item>
              
        
            </NavDropdown>
            <Nav.Link href="#link"> <CartWidget/> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;