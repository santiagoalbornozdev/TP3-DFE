import { useState } from 'react';

const EmojisAleatorios = () => {
  const emojis = ['😂', '🤩', '🔥', '🚀', '🎉', '🤖', '🐱', '🌎', '🦄', '❤️'];
  const [emoji, setEmoji] = useState(emojis[0]);

  const cambiarEmoji = () => {
    const indiceAleatorio = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[indiceAleatorio]);
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '50px' }}>
      <p>{emoji}</p>
      <button onClick={cambiarEmoji}>🎲 Cambiar Emoji</button>
    </div>
  );
};

export default EmojisAleatorios;