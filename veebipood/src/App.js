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
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import Hinnad from './pages/Hinnad';
import HaldaTooted from './pages/HaldaTooted';
import PoedHalda from './pages/PoedHalda';
import YksPood from './pages/YksPood';
import YksToode from './pages/YksToode';
import YksTootaja from './pages/YksTootaja';
import YksikHind from './pages/YksikHind';
import MuudaToode from './pages/MuudaToode';
// kui impordin node_modules sees siis, kirjutan kohe kausta nime, kust võtan
// kui impordin meie failide seast (src kaustas olevatest), pean kirjutama algusesse "./" või "../"
//   .js failidele ei pea lõppu panema laiendit .js
//   teistele peab: .css   .svg    .json

  // 8. E 12.00-14.15   3ak/h
  // 9. R 13.00-16.15   4ak/h
  // 10. 15.12 R  11.00-13.15   3ak/h
  // 11. 18.12 E  12.00-15.15   4ak/h    useParams, URL muutuja, objektid
  // 12. 21.12 N  13.00-16.15   useParams, objektid Tooted, muudaToode, useNavigate()
  // 13. 28.12 N  09.00-12.15   uue ENG projekti
  // 14. 04.01 N  13.00-16.15
  // 15. 08.01 E  13.00-16.15
  // 16. 11.01 N  13.00-16.15
  // 17. 15.01 E  13.00-16.15
  // 18. 22.01 E   poolik päev 1.5h
  // 19. 29.01 E   poolik päev 1.5h

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

      <Link to="/poed">
        <button className="nupu-stiil">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupu-stiil">Tooted</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupu-stiil">Hinnad</button>
      </Link>

      <Link to="/halda">
        <button className="nupu-stiil">Halda tooteid</button>
      </Link>

      <Link to="/halda-poode">
        <button className="nupu-stiil">Halda poode</button>
      </Link>

      {/* <Link to="/jook">
        <button className="nupu-stiil">Jook</button>
      </Link> */}

      {/* siin on valiidsete URLde nimistu, path="" jutumärkide sees */}
      <Routes>
        {/* localhost:3000     siis võta Avaleht seest returnis olev HTML */}
        <Route path="" element={<Avaleht />} />
        {/* <Route path="jook/:number" element={<YksTootaja />} /> */}
        {/* localhost:3000/cart  Ostukorv.js return sees olev HTML  */}
        <Route path="cart" element={<Ostukorv />} />
        {/* <Route path="ostukorv/avaleht" element={ <div>SIIA SUUNAS</div> } /> */}
        <Route path="lisa-toode" element={<LisaToode />} />
        <Route path="seaded" element={<Seaded />} />
        <Route path="profiil" element={<Profiil />} />
        <Route path="login" element={<Login />} />
        <Route path="töötajad" element={<Tootajad />} />
        <Route path="poed" element={<Poed />} />
        <Route path="tooted" element={<Tooted />} />
        <Route path="hinnad" element={<Hinnad />} />
        <Route path="halda" element={<HaldaTooted />} />
        <Route path="halda-poode" element={<PoedHalda />} />
        <Route path="pood/:index" element={<YksPood />} />
        <Route path="toode/:index" element={<YksToode />} />
        <Route path="hind/:jrknr/test/:hind/test2" element={<YksikHind />} />
        <Route path="töötaja" element={<YksTootaja />} />
        <Route path="muuda/:jrknr" element={<MuudaToode />} />
      
        {/* <Route path="et/toode/:id <--- ecoop" element={<YksToode />} />
        <Route path=":name <--- selver" element={<YksToode />} /> */}
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
