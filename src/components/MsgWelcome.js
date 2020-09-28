import React from 'react';
import Welcome from './Welcome.js';

function MsgWelcome() {
    return (
      <div>
          <p>Este es el mensaje de...</p>
          <Welcome />
          <img src='./img/7513.jpg' style={{width: "100%"}} />
          <a href='https://www.freepik.es/fotos/viajes'>Foto de Viajes creado por jcomp - www.freepik.es</a>
      </div>
    );
  }

export default MsgWelcome;