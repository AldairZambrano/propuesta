import React, { useState } from 'react';
import imagenes from './imagenes';

const App = () => {
  const [btnNoPosition, setBtnNoPosition] = useState({ left: -100, top: -100 });

  const handleMouseOver = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random() * height;

    setBtnNoPosition({ left: newWidth, top: newHeight });
  };

  const handleClick = () => {
    alert('¡Ahora ya somos novios! ❤️');
  };

  return (
    <div style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f3f3f3' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, color: '#333' }}>¿Quieres ser mi novia?</h1>
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={handleClick} style={{ margin: 10, padding: '10px 20px', fontSize: 18, color: '#fff', backgroundColor: '#4CAF50', border: 'none', borderRadius: 5, cursor: 'pointer', transition: 'background-color 0.3s' }}>Sí</button>
        </div>
        <button id="btnNo" onMouseOver={handleMouseOver} style={{ margin: 10, padding: '10px 20px', fontSize: 18, color: '#fff', backgroundColor: '#f44336', border: 'none', borderRadius: 5, cursor: 'pointer', transition: 'background-color 0.3s', position: 'absolute', left: btnNoPosition.left, top: btnNoPosition.top }}>No</button>
        <img src={imagenes.ima} alt="" width="200" style={{ marginTop: 30, maxWidth: '100%', borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
      </div>
    </div>
  );
};

export default App;