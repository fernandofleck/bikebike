import React, {Component} from 'react';
import Bike from './Bike.js';

class ListBikes extends Component {
  
  alerta(){
    alert('Good Choice!!!');
  }

  cambiarAmarillo(){
    document.querySelector('.subtitulo').style.backgroundColor='Yellow';
  }

  cambiarVerde(){
    document.querySelector('.subtitulo').style.backgroundColor='Green';
  }

  render() {return (
      <div onClick={this.alerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarVerde}>
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
}

export default ListBikes;