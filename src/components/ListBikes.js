import React from 'react';
import Bike from './Bike.js';

function ListBikes() {
    return (
      <div>
          <Bike
            color= "rojo"
            rodados = {[26, 27.5, 29]}
            cuadros = {["S", "M", "L"]}
          />
          <Bike
            color= "negro"
            rodados = {[27.5, 29]}
          />
          <Bike
            color= "amarillo"
            rodados = {[26, 29]}
            cuadros = {["S", "L"]}
          />
      </div>
    );
  }

export default ListBikes;