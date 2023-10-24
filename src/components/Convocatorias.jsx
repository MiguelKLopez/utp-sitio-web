import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Vinculacion.css'

function Vinculacion() {
  return (
    <ListGroup className='vinculacion-container'>
      <ListGroup.Item className='mb-3 items'>Convocatorias por excelencias</ListGroup.Item>
      <ListGroup.Item className='mb-3 items'>Día de Muertos</ListGroup.Item>
      <ListGroup.Item className='mb-3 items'>100 Mercadólogos</ListGroup.Item>
      <ListGroup.Item className='mb-3 items'>Titulación</ListGroup.Item>
    </ListGroup>
  );
}

export default Vinculacion;