import { useState } from 'react';

function CambiadorColor() {
  const [color, setColor] = useState('#ffcccb');

  const cambiarColor = () => {
    const colores = ['#ffcccb', '#add8e6', '#90ee90', '#fff176', '#d1c4e9'];
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    setColor(nuevoColor);
  };

  return (
    <div style={{ ...estilos.caja, backgroundColor: color }}>
      <p style={estilos.texto}>Color actual: {color}</p>
      <button onClick={cambiarColor} style={estilos.boton}>
        Cambiar color
      </button>
    </div>
  );
}

const estilos = {
  caja: {
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    textAlign: 'center',
    color: '#333'
  },
  boton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: 'white',
    cursor: 'pointer',
    marginTop: '10px'
  },
  texto: {
    fontSize: '16px',
    marginBottom: '10px'
  }
};

export default CambiadorColor;
