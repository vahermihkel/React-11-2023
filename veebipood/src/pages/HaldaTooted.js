import { useState } from "react";
import tootedFailist from "../data/tooted.json";
// kui on ../ siis läheb kausta võrra ülespoole
// kui on ./ võtab samast kaustast
// kui ei ole kumbagi, läheb node_modules sisse võtma

// see on Toodete haldamise leht
// saab kustutada, muutma minna

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (indeks) => {
    tootedFailist.splice(indeks, 1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
      <div>
          {tooted.map((element, indeks) => 
            <div>
              <span>{element}</span>
              <button onClick={() => kustuta(indeks)}>x</button>
            </div>
          )}
      </div>
  )
}

export default HaldaTooted