import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Logo_mpt from './components/Logo_mpt';
import Inicio_mpt from './components/Inicio_mpt';
import Contenido from './components/Contenido';
import Items from './components/Items';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
     
      <Navigation></Navigation>
      <Login></Login>      <a href="http://localhost:3000" target="_blank">Soy tutor/a</a>

      <Contenido></Contenido>
      <Inicio_mpt></Inicio_mpt>
      <Items></Items>
      <Logo_mpt></Logo_mpt>
      

    </div>
  );
}

export default App;
