import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json";

function PoedHalda() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const poodRef = useRef();

  const lisa = () => {
    // mingid oma vabalt valitud kontrollid
    poedFailist.push(poodRef.current.value);
    uuendaPoed(poedFailist.slice());
  }

  const kustuta = (index) => {
    poedFailist.splice(index,1);
    uuendaPoed(poedFailist.slice());
  }

  return (
    <div>
      <label>Poe nimi</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
       {poed.map((element, index) => 
        <div>
          {element}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)
        }

    </div>
  )
}

export default PoedHalda