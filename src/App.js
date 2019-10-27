import React from 'react';
import './App.css';
import sound1 from './sounds/bubbles.mp3';
import sound2 from './sounds/clay.mp3'
import sound3 from './sounds/confetti.mp3';
import sound4 from './sounds/glimmer.mp3';
import sound5 from './sounds/moon.mp3';
import sound6 from './sounds/ufo.mp3';

function App() {
  const colors = ['#ef5350', '#7e57c2', '#26a69a', '#8bc34a', '#ff7043', '#9c27b0'];
  return (
    <div className="App">
      <h1>Tap Music</h1>
      <p>Make music with only one tap</p>
      <div className='Visuals'></div>

      <div className='music'>
        {colors.map((color, index) => (
          <div style={{ backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
