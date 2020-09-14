import React from 'react';

function Bike(props) {

    let rodados = [26, 27.5, 29];

    return (
        <div>
            <h3>Bicicleta</h3>
            <p>Color: {props.color}</p>
            <p>Rodados:</p>
            <ul>
                { rodados.map( rodado => <li>{rodado}</li> )}
            </ul>
        </div>
    );
  }

export default Bike;