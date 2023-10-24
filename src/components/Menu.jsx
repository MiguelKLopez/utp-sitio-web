import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import '../css/Menu.css'
import logo from '../img/logoUTP.png';

function Menu() {
  return (
    <div >
      <Navbar bg="dark" datas-bs-theme="dark" expand="lg" className="navbar bg-body-tertiary">
      <Image className='img-logo' src={logo} thumbnail />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className='items' as={Link} to="/inicio">Inicio</Nav.Link>
              <Nav.Link className='items' as={Link} to="/vinculacion">Vinculaciòn</Nav.Link>
              <Nav.Link className='items' as={Link} to="/noticias">Noticias</Nav.Link>
              <Nav.Link className='items' as={Link} to="/convocatorias">Convocatorias</Nav.Link>
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
