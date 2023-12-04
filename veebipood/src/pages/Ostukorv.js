import { useState } from "react";
import { Link } from "react-router-dom";

function Ostukorv() {
  // Coca, Fanta, Sprite
  const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

  const kustuta = () => {
// .splice() on funktsioon kustutamiseks, mis vajab enda sulgude sisse mitmendat me kustutame ja mitu tk kustutame
    ostukorv.splice(0,1); 
    uuendaOstukorv(ostukorv.slice()); // .slice() <- mälukoha kustutamiseks (koopia tegemiseks)
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
      <button onClick={kustuta}>Kustuta esimene</button>

      <button onClick={() => uuendaOstukorv([])}>Tühjenda</button>
      {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} ese(t)</div>}
      
      {ostukorv.map(toode => 
        <div>
          <span>{toode}</span>
          <button>x</button>
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