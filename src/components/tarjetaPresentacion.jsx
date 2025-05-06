// src/components/TarjetaPresentacion.jsx
function TarjetaPresentacion({ nombre, apellido, profesion, descripcion }) {
  return (
    <div style={estilos.tarjeta}>
      <h2 style={estilos.nombre}>{nombre} {apellido}</h2>
      <h3 style={estilos.profesion}>{profesion}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

const estilos = {
  tarjeta: {
    backgroundColor: '#ffffff',
    color: '#222',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    maxWidth: '300px'
  },
  nombre: {
    margin: 0
  },
  profesion: {
    margin: '5px 0',
    color: '#666'
  }
};

export default TarjetaPresentacion;
