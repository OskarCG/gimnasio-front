import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Principal from './pages/Principal';
import jwtDecode from 'jwt-decode'
import Clientes from './pages/Clientes';
import Planes from './pages/Planes';
import Suscripciones from './pages/Ingreso';


function App() {

  const [nombre, setNombre] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    if (isLoggedIn) {
      (
        async () => {
          const response = await fetch('http://localhost:8000/api/usuario', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
          });
  
          const content = await response.json();
          setNombre(content.Nombre);
        }
      )();
    }
  }, [isLoggedIn]);
  
  
  

  return (
    <div className="App">
      <BrowserRouter>
        <Nav nombre={nombre} setNombre={setNombre} setIsLoggedIn={setIsLoggedIn}/>
          <main >
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/principal" element={<Principal nombre={nombre} />} /> 
              <Route path="/clientes" element={<Clientes />} /> 
              <Route path="/planes" element={<Planes />} /> 
              <Route path="/ingresos" element={<Suscripciones />} /> 
              <Route path="/login" element={<Login setNombre={setNombre} setIsLoggedIn={setIsLoggedIn}/>} /> 
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
