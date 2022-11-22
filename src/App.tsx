import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meme_list from './meme_list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Meme_Generator
      </header>
      <div>
      <Meme_list />
      </div>
    </div>
  );
}

export default App;
