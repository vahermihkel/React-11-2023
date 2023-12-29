import { useState } from "react";
import tootedFailist from "../data/tooted.json";
import { Link } from "react-router-dom";
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
            <div className={element.aktiivne === true ? "aktiivne" : "mitte-aktiivne"} key={indeks}>
              <img className="pilt" src={element.pilt} alt="" />
              <div>{element.nimi}</div>
              <div>{element.hind}</div>
              <div>{element.pilt}</div>
              <button onClick={() => kustuta(indeks)}>x</button>
              <Link to={"/muuda/" + indeks}>
                <button>Muuda</button>
              </Link>
            </div>
          )}
      </div>
  )
}

export default HaldaTooted