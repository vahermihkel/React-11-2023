import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadFailist from "../data/hinnad.json"

function YksikHind() {
  const { jrknr } = useParams();
  const leitud = hinnadFailist[jrknr];

  if (leitud === undefined) {
    return <img src="https://hiiumaa.ecoop.ee/assets/img/icon-sad-empty-cart.svg" alt="" />
  }

  return (
    <div>
      {/* <div>Jrknr: {jrknr}</div> */}
      <div>Hind: {leitud}</div>
    </div>
  )
}

export default YksikHind