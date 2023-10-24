import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Menu from './components/Menu';
import Vinculacion from './components/Vinculacion';
import Noticias from './components/Noticias';
import Convocatorias from './components/Convocatorias';
import Inicio from './components/Inicio';
import Mercadotecnia from './components/Mercadotecnia.jsx';
import UltimateLanding from './components/UltimateLanding';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function App() {  
  return (
    <div className="App"> 
      <BrowserRouter>
        <Menu />      
          <div>
            <Routes>
              <Route path='/inicio' element={<Inicio />} />
              <Route path='/vinculacion' element={<Vinculacion />} />
              <Route path='/noticias' element={<Noticias />} />
              <Route path='/convocatorias' element={<Convocatorias />} />
            </Routes>
          </div>
        </BrowserRouter>
        <div className='Carrera'>
          <Row>
            <Col className='col-1'><h1>Nuestras Carreras</h1></Col>
          </Row>
          <Mercadotecnia />
        </div>
        <div>
          <UltimateLanding />
        </div>
    </div>
  );
}

export default App;
