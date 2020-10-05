import React from 'react';
import PropTypes from 'prop-types';

function Bike(props) {

    let cuadrosDisponibles;

    if(props.cuadros != null){
        cuadrosDisponibles = <div>
            <p>Cuadros:</p>
            <ul>{ props.cuadros.map( (cuadro, i) => <li key={cuadro + i}>{cuadro}</li> )}</ul>
        </div>;
    } else {
        cuadrosDisponibles = "";
    }

    return (
        <div>
            <h3 className="subtitulo">Bicicleta</h3>
            <p>Color: {props.color}</p>
            <p>Rodados:</p>
            <ul>
                { props.rodados.map( (rodado, i) => <li key={rodado + i}>{rodado}</li> )}
            </ul>
            {cuadrosDisponibles}
        </div>
    );
  }

  Bike.defaultProps={
      color: "Blanco",
      cuadros: null
  }

  Bike.propTypes = {
      color: PropTypes.string,
      rodados: PropTypes.number,
      cuadros: PropTypes.string
  }

export default Bike;