import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Definiciones from "./Pages/Definiciones.js"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./Pages/Inicio.js"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Definiciones" element={<Definiciones />} />
        <Route path="/" element={<Inicio />} />

      
      </Routes>
    </Router>
    <footer className="footer">
          <p className="text-footer">
            Copyright ©-All rights are reserved
          </p>
      </footer>
  </>
  );
}

export default App;
