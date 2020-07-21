import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Logo_mpt from './components/Logo_mpt';
import Inicio_mpt from './components/Inicio_mpt';
import Contenido from './components/Contenido';
import Items from './components/Items';
import Login from './Login/Login';
import Ejercicios_1 from './Ejercicios/Ejercicios_1';
function App() {
  return (
    <div className="App">
     
      <Navigation></Navigation>
      <Login></Login> 
      <Contenido></Contenido>
      <Inicio_mpt></Inicio_mpt>
      <Items></Items>
      <Logo_mpt></Logo_mpt>
      

    </div>
  );
}

export default App;
