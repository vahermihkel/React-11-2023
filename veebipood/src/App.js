// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import NotFound from "./pages/NotFound";
import Seaded from './pages/Seaded';
import { useState } from 'react';
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
    <div className={kasTume === "true" ? "tume": "App"}>
      {/* .css failis:    .ikoon {width: 30px;} */}
      {/* <img className="ikoon" src="/hele.png" alt="" /> */}
      { kasTume === "false" && <img style={{"width": "30px"}} onClick={muudaTumedaks} src="/tume.png" alt="" />}
      { kasTume === "true" && <img style={{"width": "30px"}} onClick={muudaHeledaks} src="/hele.png" alt="" />}

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

      {/* siin on valiidsete URLde nimistu, path="" jutumärkide sees */}
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="cart" element={ <Ostukorv /> } />
    {/* <Route path="ostukorv/avaleht" element={ <div>SIIA SUUNAS</div> } /> */}
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="*" element={ <NotFound /> } />
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
