import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header'; //no colocar extensión js
//traeme el componente Header desde ruta para llegar al JS 
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

import Homepage from './paginas/Homepage';
// importame el componente Homepage del archivo Homepage
import Ejemplo1 from './paginas/Ejemplo1';

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
          {/* aca van los links */}
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
