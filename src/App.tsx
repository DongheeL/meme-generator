import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meme_gen from './meme_gen'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Meme_Generator
      </header>
      <div style={{margin:'10px'}}>
        <Meme_gen />
      </div>
    </div>
  );
}

export default App;
