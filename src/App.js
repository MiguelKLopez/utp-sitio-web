import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Menu from './components/Menu';
import Acerca from './components/Acerca';
import Card from './components/Card';
import Form from './components/Form';
import Table from './components/Table';
import Inicio from './components/Inicio';
import Mercadotecnia from './components/Mercadotecnia.tsx';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Menu />      
          <div>
            <Routes>
              <Route path='/inicio' element={<Inicio />} />
              <Route path='/acerca' element={<Acerca />} />
              <Route path='/form' element={<Form />} />
              <Route path='/card' element={<Card />} />
              <Route path='/table' element={<Table />} />
            </Routes>
          </div>
        </BrowserRouter>
        <div className='Carrera'>
          <h1>Nuestras Carreras</h1>
          <Mercadotecnia />
        </div>
    </div>
  );
}

export default App;
