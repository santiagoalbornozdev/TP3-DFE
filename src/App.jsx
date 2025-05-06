import TarjetaPresentacion from './components/tarjetaPresentacion';
import Contador from './components/Contador';
import CambiadorColor from './components/CambiadorColor';
import EmojisAleatorios from './components/EmojisAleatorios';
import AdivinanzaNumero from './components/AdivinanzaNumero';


function App() {
  return (
    <div style={estilos.fondo}>
      <h1>Trabajo Práctico 3 - React</h1>
      <TarjetaPresentacion 
        nombre="Juan"
        apellido="Pérez"
        profesion="Estudiante de Ingeniería"
        descripcion="Apasionado por la tecnología y el desarrollo web."
      />
      <Contador />
      <CambiadorColor />
      <EmojisAleatorios />
      <AdivinanzaNumero />
    </div>
  );
}

const estilos = {
  fondo: {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#222'
  }
};

export default App;
