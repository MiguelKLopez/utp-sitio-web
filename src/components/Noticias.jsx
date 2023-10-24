import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Noticias.css';

function Noticias() {
  return (
    <Container className='contenedor-noticias'>
      <Row>
        <Col className='items-noticias' xs>Agricultura</Col>
        <Col className='items-noticias' xs={{ order: 12 }}>Desarrollo de Negocios</Col>
        <Col className='items-noticias' xs={{ order: 1 }}>Tecnologías de la Información</Col>
      </Row>
    </Container>
  );
}

export default Noticias;