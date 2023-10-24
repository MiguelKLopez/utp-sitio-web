import React from "react";
import '../css/Carrera.css'
import agricultura from '../img/agricultura.png';
import marketing from '../img/digital-marketing.png';
import realidadvirtual from '../img/augmented-reality.png'
import Image from 'react-bootstrap/Image';

function Mercadotecnia(){
    return(
      <div className="carrera-contenedor">
        <p>
          Agricultura Sutentable y Protegida
        </p>
          <div className="img-contenedor">
            <Image className='img' src={agricultura} thumbnail />
          </div>
        <br />
        <p>
          Desarrollo de Negocios Área de Mercadotecnia
        </p>
          <div className="img-contenedor">
            <Image className='img' src={marketing} thumbnail />
          </div>
        <br />
        <p>
          Tecnologías de la Información Área de Entornos Virtuales y Negocios Digitales
        </p>
          <div className="img-contenedor">
            <Image className='img' src={realidadvirtual} thumbnail />
          </div>
        <br />
      </div>
    )
}

export default Mercadotecnia;