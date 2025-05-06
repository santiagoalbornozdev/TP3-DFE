import { useState } from 'react';

const AdivinanzaNumero = () => {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  const [intento, setIntento] = useState('');
  const [mensaje, setMensaje] = useState('¡Adivina el número del 1 al 10!');

  const verificarNumero = () => {
    const numeroUsuario = parseInt(intento, 10);
    if (numeroUsuario === numeroSecreto) {
      setMensaje('🎉 ¡Correcto! Has adivinado el número.');
    } else if (numeroUsuario > numeroSecreto) {
      setMensaje('Muy alto, intenta un número más bajo.');
    } else {
      setMensaje('Muy bajo, intenta un número más alto.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{mensaje}</h2>
      <input
        type="number"
        value={intento}
        onChange={(e) => setIntento(e.target.value)}
      />
      <button onClick={verificarNumero}>✅ Comprobar</button>
    </div>
  );
};

export default AdivinanzaNumero;