import React from 'react';
import MsgWelcome from './home/MsgWelcome.js';
import ListBikes from './home/ListBikes.js';
import Contador from './home/Contador.js';
import Gif from './home/Gif.js';
import Nav from './Nav';

function Home() {
    return (
      <div>
        <main>
          <Nav/>
          <Gif/>
          <MsgWelcome />
          <Contador inicial={0}/>
          <ListBikes />
        </main>
      </div>
    );
  }
  
  export default Home;