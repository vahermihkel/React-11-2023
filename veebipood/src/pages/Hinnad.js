import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([4,6,12,5,45, 321, 55, 77, 8, 9, 111]);

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


  return (
    <div>
      <button onClick={hindKasvavalt}>Hind kasvavalt</button>
      <button onClick={hindKahanevalt}>Hind kahanevalt</button>
      <button onClick={hindNaguSonaAZ}>Hind A-Z</button>
      <button onClick={filtreeriVah50}>Jäta alles väh 50</button>
      <button onClick={filtreeriKesSisaldab5}>Jäta alles kellel 5</button>
      <button onClick={filtreeriKesAlgab1ga}>Jäta alles kes algab 1ga</button>
      {hinnad.map(hind => <div>{hind}</div>)}
    </div>
  )
}

export default Hinnad