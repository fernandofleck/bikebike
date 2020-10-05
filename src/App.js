import React from 'react';
import './App.css';
import MsgWelcome from './components/MsgWelcome.js';
import ListBikes from './components/ListBikes.js';
import ContenedorPublicidad from './components/ContenedorPublicidad.js';
import Contador from './components/Contador.js';
import Gif from './components/Gif.js';

function App() {
  return (
    <div>
      <main>
        <Gif/>
        <MsgWelcome />
        <Contador inicial={0}/>
        <ContenedorPublicidad>
          <h2>Publicidad!!!</h2>
        </ContenedorPublicidad>
        <ListBikes />
        <ContenedorPublicidad>
          <ul>
            <li>Publicidad 1</li>
            <li>Publicidad 2</li>
            <li>Publicidad 3</li>
          </ul>
        </ContenedorPublicidad>
      </main>
    </div>
  );
}

export default App;
