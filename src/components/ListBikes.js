import React from 'react';
import Bike from './Bike.js';

function ListBikes() {
    return (
      <div>
          <Bike
            color= "rojo"
          />
          <Bike
            color= "negro"
          />
          <Bike
            color= "amarillo"
          />
      </div>
    );
  }

export default ListBikes;