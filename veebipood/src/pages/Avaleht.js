import React from 'react'

// div ja span on tühjused, aga div teeb uue rea, span ei tee

function Avaleht() {
  return (
    <div>
      <img src="/mittelaigitud.svg" alt="" />
      <img src="/laigitud.svg" alt="" />
      <img src="/kuldne.svg" alt="" />
      <button>Pane laigituks</button>
      <button>Pane mittelaigituks</button>

      <br /><br />

      <button>-</button>
      <span>7</span>
      <button>+</button>
    </div>
  )
}

export default Avaleht