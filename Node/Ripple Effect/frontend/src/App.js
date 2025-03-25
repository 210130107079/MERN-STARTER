import React, { useState } from 'react';
import './App.css';

function App() {
  // Array of ripples, each with id and style properties
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      style: {
        top: y + 'px',
        left: x + 'px',
        width: size + 'px',
        height: size + 'px'
      }
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    // Remove the ripple after the animation (0.6s)
    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 600);
  };

  return (
    <div className="App" onClick={createRipple}>
      {ripples.map((ripple) => (
        <span key={ripple.id} className="ripple" style={ripple.style} />
      ))}
      <div className="content">
        <h1>Click anywhere!</h1>
      </div>
    </div>
  );
}

export default App;
