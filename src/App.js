import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header'; //no colocar extensión js
//traeme el componente Header desde ruta para llegar al JS 
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

import Homepage from './paginas/Homepage';
// importame el componente Homepage del archivo Homepage
import Ejemplo1 from './paginas/Ejemplo1';
import Ejemplo2 from './paginas/Ejemplo2';
import Ejemplo3 from './paginas/Ejemplo3';
import CargaJson from './paginas/Ejemplo4';
import DatosApi from './paginas/Ejemplo5';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/ejemplo1' element={<Ejemplo1 />} />
          <Route path='/ejemplo2' element={<Ejemplo2 />} />
          <Route path='/ejemplo3' element={<Ejemplo3 />} />
          <Route path='/ejemplo4' element={<CargaJson />} />
          <Route path='/ejemplo5' element={<DatosApi />} />
          {/* aca van los links */}
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
