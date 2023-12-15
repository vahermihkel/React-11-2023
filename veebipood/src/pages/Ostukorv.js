import { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  // Coca, Fanta, Sprite
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const kustuta = (mitmes) => {
// .splice() on funktsioon kustutamiseks, mis vajab enda sulgude sisse mitmendat me kustutame ja mitu tk kustutame
    ostukorvFailist.splice(mitmes,1); 
    uuendaOstukorv(ostukorvFailist.slice()); // .slice() <- mälukoha kustutamiseks (koopia tegemiseks)
  }

  // kuvage HTMLs
  return (
    <div>
      <button onClick={() => uuendaOstukorv(["Coca", "Fanta", "Sprite"])}>Tagasi originaali</button>
      <button onClick={() => uuendaOstukorv(["Coca", "Fanta"])}>Jäta alles Coca ja Fanta</button>
      <button onClick={() => uuendaOstukorv(["Sprite", "Fanta"])}>Jäta alles Sprite ja Fanta</button>
      <button onClick={() => uuendaOstukorv(["Coca", "Sprite"])}>Jäta alles Coca ja Sprite</button>
      <button onClick={() => uuendaOstukorv(["Coca"])}>Jäta alles Coca</button>
      <button onClick={() => uuendaOstukorv(["Fanta"])}>Jäta alles Fanta</button>
      <button onClick={() => uuendaOstukorv(["Sprite"])}>Jäta alles Sprite</button>
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>

      <button onClick={() => uuendaOstukorv([])}>Tühjenda</button>
      {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} ese(t)</div>}
      
          {/* Tsükkel:
          1.  toode=Coca   jrknr=0
          2.  toode=Fanta  jrknr=1
          3.  toode=Sprite jrknr=2
          */}
      {ostukorv.map((toode, jrknr) => 
        <div>
          <span>{toode}</span>
          <button onClick={() => kustuta(jrknr)}>x</button>
        </div> 
      )}

      {ostukorv.length === 0 && 
        <div>
          <div>Ostukorv on tühi</div>
          <Link to="/">
            <button>Avalehele</button>
          </Link>
        </div>
      }

    </div>
  )
}

export default Ostukorv


// R 13-16.15
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push