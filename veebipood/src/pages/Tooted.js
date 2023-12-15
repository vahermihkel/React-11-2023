import { useState } from "react";
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";

// see on Toodete esitlemise leht
// saab ostukorvi panna

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  // siia toodete sorteerimine
  // A-Z
  // Z-A
  // tähed kasvavalt
  // tähed kahanevalt

  const lisaOstukorvi = (toode) => {
    // fail: ["Coca", "Fanta", "Sprite"]    
    // fail.push("Red Bull") --->  ["Coca", "Fanta", "Sprite", "Red Bull"]   
    ostukorvFailist.push(toode);
  }

  return (
      <div>
          {tooted.map((element, indeks) => 
            <div>
              <span>{element}</span>
              <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
            </div>
          )}
      </div>
  )
}

export default Tooted