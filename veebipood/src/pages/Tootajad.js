import React from 'react'

function Tootajad() {
  const tootajad = ["Pille", "Kalle", "Malle", "Sille"];

  // 8. E 12.00-14.15   3ak/h
  // 9. R 13.00-16.15   4ak/h

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
  return (
    <div>
      {tootajad.map(element => <button>{element}</button>)}

      {/* <button>Pille</button>
      <button>Kalle</button>
      <button>Malle</button>
      <button>Sille</button> */}
    </div>
  )
}

export default Tootajad