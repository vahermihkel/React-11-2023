import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import hinnadFailist from "../data/hinnad.json"


function Hinnad() {
  const [hinnad, uuendaHinnad] = useState(hinnadFailist);

  const hindKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice());
  }

  const hindKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    uuendaHinnad(hinnad.slice());
  }

  const hindNaguSonaAZ = () => {
    hinnad.sort((a, b) => a.toString().localeCompare(b.toString()));
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriVah50 = () => {
    const vastus = hinnad.filter(hind => hind >= 50);
    uuendaHinnad(vastus);
  }

  const filtreeriKesSisaldab5 = () => {
    const vastus = hinnad.filter(hind => hind.toString().includes("5"));
    uuendaHinnad(vastus);
  }

  const filtreeriKesAlgab1ga = () => {
    const vastus = hinnad.filter(hind => hind.toString().startsWith("1"));
    uuendaHinnad(vastus);
  }

  const arvutaNumbridKokku = () => {
    let summa = 0;
    hinnad.forEach(element => summa = summa + element);
    return summa;
  }


  return (
    <div>
      <button onClick={hindKasvavalt}>Hind kasvavalt</button>
      <button onClick={hindKahanevalt}>Hind kahanevalt</button>
      <button onClick={hindNaguSonaAZ}>Hind A-Z</button>
      <button onClick={filtreeriVah50}>Jäta alles väh 50</button>
      <button onClick={filtreeriKesSisaldab5}>Jäta alles kellel 5</button>
      <button onClick={filtreeriKesAlgab1ga}>Jäta alles kes algab 1ga</button>
      {hinnad.map((hind, index) => 
        <div key={index}>
          <Link to={"/hind/" + index + "/test/" + hind + "/test2"}>
            {hind}
          </Link>
        </div>)}
    </div>
  )
}

export default Hinnad