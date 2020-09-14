import React from 'react';
import './App.css';
import MsgWelcome from './components/MsgWelcome.js';
import ListBikes from './components/ListBikes.js';

function App() {
  return (
    <div>
      <main>
        <MsgWelcome />
        <ListBikes />
      </main>
    </div>
  );
}

export default App;
