import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../css/Menu.css'

function Menu() {
  return (
    <div >
      <Navbar bg="dark" datas-bs-theme="dark" expand="lg" className="navbar bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className='items' as={Link} to="/inicio">Inicio</Nav.Link>
              <Nav.Link className='items' as={Link} to="/form">Vinculaciòn</Nav.Link>
              <Nav.Link className='items' as={Link} to="/card">Noticias</Nav.Link>
              <Nav.Link className='items' as={Link} to="/table">Convocatorias</Nav.Link>
              <Nav.Link className='items' as={Link} to="/table">Carreras</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
        <svg className='under-line' xmlns="http://www.w3.org/2000/svg" width="1000" height="7" viewBox="0 0 1258 7" fill="none">
          <path d="M0 3L1257.5 4.5" stroke="#218838" stroke-width="5"/>
        </svg>
    </div>  
  );
}

export default Menu;
