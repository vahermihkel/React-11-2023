import React, { useRef, useState } from 'react'

function Tootajad() {
  const [tootajad, uuendaTootajad] = useState(["Pille", "Kalle", "Malle", "Sille"]);
  const tootajaRef = useRef();

  const kustuta = (i) => {
    tootajad.splice(i,1); // i - järjekorranumber, 1 - 1tk kustutan
    uuendaTootajad(tootajad.slice());
  }

  const lisa = () => {
    // mingid oma vabalt valitud kontrollid
    tootajad.push(tootajaRef.current.value);
    uuendaTootajad(tootajad.slice());
  }

  return (
    <div>
      <label>Töötaja nimi</label> <br />
      <input ref={tootajaRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      {tootajad.map((element, ix) => <button onClick={() => kustuta(ix)}>{element}</button>)}
    </div>
  )
}

export default Tootajad

      // {/* <button>Pille</button>
      // <button>Kalle</button>
      // <button>Malle</button>
      // <button>Sille</button> */}

  // Array (Massiiv, List) väljakuvamiseks on vaja see muutuja, mille sees on Array
  // (tema väärtus on kandilisest sulust kandilise suluni)
  // .map() abil, mille panen muutuja lõppu, loogeliste sulgude sisse
  // {MUUTUJA.map()}
  // .map() on tsükkel ehk käiakse ükshaaval läbi kõik väärtused mis asuvad Array sees
  // .map(muutuja => )
  // muutuja sisse tekib ükshaaval Array ühe elemendi väärtus
  // 
  // {tootajad.map(element => <button>{element}</button>)}
  // ["Pille", "Kalle", "Malle", "Sille"].map("Pille" => <button>Pille</button> )
  // ["Pille", "Kalle", "Malle", "Sille"].map("Kalle" => <button>Kalle</button> )
  // ["Pille", "Kalle", "Malle", "Sille"].map("Malle" => <button>Malle</button> )
  // ["Pille", "Kalle", "Malle", "Sille"].map("Sille" => <button>Sille</button> )