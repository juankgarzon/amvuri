import { BrowserRouter as Router,   Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { SignUp } from "./components/pages/SignUp";
import { Home } from "./components/pages/Home";
import { Contacto } from "./components/pages/Contacto";
// import { Galeria } from "./components/pages/Galeria";
// import { Geolocalizacion } from "./components/pages/Geolocalizacion";
import { Registro } from "./components/pages/Registro";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>  
          <Route path="/" element={<Login />} />   
          <Route path="/login" element={<Login />} />   
          <Route path="/signup" element={<SignUp />} />   
          <Route path="/home" element={<Home />} /> 
          <Route path="/contacto" element={<Contacto />} />  
          {/* <Route path="/galeria" element={<Galeria />} /> 
          <Route path="/geolocalizacion" element={<Geolocalizacion />} />   */}
          <Route path="/registro" element={<Registro />} />  
        </Routes>
      </Router>
    </>
  );
}

export default App;
