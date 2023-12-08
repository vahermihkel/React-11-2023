import { useState } from "react";

function Tooted() {
  const [tooted, uuendaTooted] = useState(["Nobe", "Tesla", "BMW"]);

  const kustuta = (indeks) => {
    tooted.splice(indeks, 1);
    uuendaTooted(tooted.slice());
  }

  return (
      <div>
          {tooted.map((element, indeks) => 
            <div>
              <span>{element}</span>
              <button onClick={() => kustuta(indeks)}>x</button>
            </div>
          )}
      </div>
  )
}

export default Tooted