import { useState } from "react";
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";
import { Link } from "react-router-dom";

// see on Toodete esitlemise leht
// saab ostukorvi panna

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const sorteeriAZ = () => {
    tooted.sort((a, b) => b.localeCompare(a)); // a vordle b-ga
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a, b) => a.localeCompare(b)); // a vordle b-ga
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKasvavalt = () => {
    // poed.sort();
    tooted.sort((a, b) => a.length - b.length);
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKahanevalt = () => {
    // poed.sort();
    tooted.sort((a, b) => b.length - a.length);
    uuendaTooted(tooted.slice());
  }

  const lisaOstukorvi = (toode) => {
    // fail: ["Coca", "Fanta", "Sprite"]    
    // fail.push("Red Bull") --->  ["Coca", "Fanta", "Sprite", "Red Bull"]   
    ostukorvFailist.push(toode);
  }

  const filtreeriNgaAlgavad = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
    uuendaTooted(vastus);
  }

  const filtreeriBgaAlgavad = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
    uuendaTooted(vastus);
  }

  const filtreeriTgaAlgavad = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
    uuendaTooted(vastus);
  }

  return (
      <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri kahanevalt</button>
        <br /><br />
        <button onClick={filtreeriNgaAlgavad}>N</button>
        <button onClick={filtreeriBgaAlgavad}>B</button>
        <button onClick={filtreeriTgaAlgavad}>T</button>
          {tooted.map((element, indeks) => 
            <div key={indeks}>
              <img className={element.aktiivne === true ? "pilt" : "pilt-mitteaktiivne"} src={element.pilt} alt="" />
              <span>{element.nimi} - {element.hind} €</span>
              <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
              <Link to={"/toode/" + indeks}>
                <button>Vaata täpsemalt</button>
              </Link>
            </div>
          )}
      </div>
  )
}

export default Tooted