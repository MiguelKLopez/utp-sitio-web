import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Vinculacion.css'

function Vinculacion() {
  return (
    <ListGroup className='vinculacion-container'>
      <ListGroup.Item className='mb-3 items'>Egresados</ListGroup.Item>
      <ListGroup.Item className='mb-3 items'>PRDODEP</ListGroup.Item>
      <ListGroup.Item className='mb-3 items'>Solicitud CENNI</ListGroup.Item>
      <ListGroup.Item className='mb-3 items'>Agenda Colaborativa</ListGroup.Item>
      <ListGroup.Item className='mb-3 items'>Estadías Profesionales</ListGroup.Item>
    </ListGroup>
  );
}

export default Vinculacion;