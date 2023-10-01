import Sobre from './paginas/sobre/sobre';
import Home from './paginas/home/home';
import Sabores from './paginas/sabores/sabores';
import Topo from './default-files/topo/topo';
import Rodape from './default-files/rodape/rodape.js'
import Rotas from './rotas/rotas';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import '../src/scrollReveal'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Topo />
        <Rotas />
        <Rodape />
      </div>
    </BrowserRouter>

  );
}

export default App;
