import React from 'react'

function Tootajad() {
  const tootajad = ["Pille", "Kalle", "Malle", "Sille"];

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