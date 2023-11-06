// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import NotFound from "./pages/NotFound";
// kui impordin node_modules sees siis, kirjutan kohe kausta nime, kust võtan
// kui impordin meie failide seast (src kaustas olevatest), pean kirjutama algusesse "./" või "../"
//   .js failidele ei pea lõppu panema laiendit .js
//   teistele peab: .css   .svg    .json

function App() {
  return (
    <div className="App">
      <Link to="/avaleht">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupu-stiil">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupu-stiil">Toodet lisama</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
    {/* <Route path="ostukorv/avaleht" element={ <div>SIIA SUUNAS</div> } /> */}
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>

      <div>FOOTER</div>

    </div>
  );
}

export default App;

// BAAS URL:    telia.ee    err.ee     localhost:3000
// path="" <-- mis järgneb baas url-le, 
// element loogeliste sulgude sees on kirjas mida näidatakse
