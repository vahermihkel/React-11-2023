// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import NotFound from "./pages/NotFound";
import Seaded from './pages/Seaded';
import { useState } from 'react';
import Profiil from './pages/Profiil';
import Login from './pages/Login';
import Tootajad from './pages/Tootajad';
// kui impordin node_modules sees siis, kirjutan kohe kausta nime, kust võtan
// kui impordin meie failide seast (src kaustas olevatest), pean kirjutama algusesse "./" või "../"
//   .js failidele ei pea lõppu panema laiendit .js
//   teistele peab: .css   .svg    .json

function App() {
  const [kasTume, muudaTume] = useState(localStorage.getItem("kasTumeTeema") || "false");

  const muudaTumedaks = () => {
    muudaTume("true");
    localStorage.setItem("kasTumeTeema", "true");
  }

  const muudaHeledaks = () => {
    muudaTume("false");
    localStorage.setItem("kasTumeTeema", "false");
  }

  return (
    <div className={kasTume === "true" ? "tume" : "App"}>
      {/* .css failis:    .ikoon {width: 30px;} */}
      {/* <img style={{"width": "30px"}} src="/hele.png" alt="" /> */}
      {kasTume === "false" && <img className="ikoon" onClick={muudaTumedaks} src="/tume.png" alt="" />}
      {kasTume === "true" && <img className="ikoon" onClick={muudaHeledaks} src="/hele.png" alt="" />}

      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
      </Link>

      {/* Link to="" suunab sinna URL-le mis on to="" jutumärkide sees */}
      <Link to="/cart">
        <button className="nupu-stiil">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupu-stiil">Toodet lisama</button>
      </Link>

      <Link to="/seaded">
        <button className="nupu-stiil">Seaded</button>
      </Link>

      <Link to="/profiil">
        <button className="nupu-stiil">Profiil</button>
      </Link>

      <Link to="/login">
        <button className="nupu-stiil">Logi sisse</button>
      </Link>

      <Link to="/töötajad">
        <button className="nupu-stiil">Töötajad</button>
      </Link>

      {/* siin on valiidsete URLde nimistu, path="" jutumärkide sees */}
      <Routes>
        {/* localhost:3000     siis võta Avaleht seest returnis olev HTML */}
        <Route path="" element={<Avaleht />} />
        {/* localhost:3000/cart  Ostukorv.js return sees olev HTML  */}
        <Route path="cart" element={<Ostukorv />} />
        {/* <Route path="ostukorv/avaleht" element={ <div>SIIA SUUNAS</div> } /> */}
        <Route path="lisa-toode" element={<LisaToode />} />
        <Route path="seaded" element={<Seaded />} />
        <Route path="profiil" element={<Profiil />} />
        <Route path="login" element={<Login />} />
        <Route path="töötajad" element={<Tootajad />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={ <Navigate to="avaleht" /> } /> */}
      </Routes>

      {/* <div>FOOTER</div> */}

    </div>
  );
}

export default App;

// BAAS URL:    telia.ee    err.ee     localhost:3000
// path="" <-- mis järgneb baas url-le, 
// element loogeliste sulgude sees on kirjas mida näidatakse
