import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div style={estilos.box}>
      <h2>Contador: {contador}</h2>
      <div style={estilos.botones}>
        <button onClick={() => setContador(contador + 1)} style={estilos.boton}>
          Incrementar
        </button>
        <button onClick={() => setContador(contador - 1)} style={estilos.boton}>
          Decrementar
        </button>
      </div>
    </div>
  );
}

const estilos = {
  box: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff',
    color: '#222',
    maxWidth: '300px'
  },
  botones: {
    marginTop: '10px',
    display: 'flex',
    gap: '10px'
  },
  boton: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer'
  }
};

export default Contador;
