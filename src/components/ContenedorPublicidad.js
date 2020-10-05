import React from 'react';

function ContenedorPublicidad(props) {
    return (
      <div>
          <p>---Inicio de Publicidad---</p>
          {props.children}
          <p>---Fin de Publicidad---</p>
      </div>
    );
  }

export default ContenedorPublicidad;