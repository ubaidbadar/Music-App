import React, { useRef } from 'react';
import './App.css';
import sound1 from './sounds/bubbles.mp3';
import sound2 from './sounds/clay.mp3'
import sound3 from './sounds/confetti.mp3';
import sound4 from './sounds/glimmer.mp3';
import sound5 from './sounds/moon.mp3';
import sound6 from './sounds/ufo.mp3';

function App() {
  const visual = useRef();
  const colors = ['#ef5350', '#7e57c2', '#26a69a', '#8bc34a', '#ff7043', '#9c27b0'];
  const sounds = [sound1, sound2, sound3, sound4, sound5, sound6]

  const runMusic = (e, i) => {
    const music = e.target.childNodes[0];
    music.currentTime = 0;
    music.play();

    let ball = document.createElement('div');
    visual.current.appendChild(ball);
    ball.style.background = colors[i];
    ball.addEventListener('animationend', (event) => {
      visual.current.removeChild(event.target);
    })
  }
  return (
    <div className="App">
      <div>
        <h1>Tap Music</h1>
        <p>Make music with only one tap</p>
      </div>

      <div className='Visuals' ref={visual} ></div>

      <div className='music'>
        {colors.map((color, i) => (
          <div style={{ backgroundColor: color }} onClick={(e) => { runMusic(e, i) }} key={color}>
            <audio src={sounds[i]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
