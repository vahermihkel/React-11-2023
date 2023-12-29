import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, m22raSonum] = useState("");
  const inputiLuger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  function lisa() {
    if (inputiLuger.current.value === "") {
      m22raSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      m22raSonum("Toode lisatud: " + inputiLuger.current.value);
      const uusToode = {
        "nimi": inputiLuger.current.value, 
        "hind": Number(hindRef.current.value), 
        "aktiivne": aktiivneRef.current.checked, 
        "pilt": piltRef.current.value
      }
      tootedFailist.push(uusToode);
    }
    // inputiLuger.current.value === "" ? 
    // m22raSonum("Tühja nimetusega ei saa toodet lisada!") : 
    // m22raSonum("Toode lisatud: " + inputiLuger.current.value);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uus toode</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      {/* <button onClick={() => lisa()}>Sisesta</button> <br /> */}
    </div>
  )
}

// div, p, h1, h2, h3... <-- alati uuel real
// lubavad enda kõrvale: button, img, label, input, span, ....
// kui ma tahan eraldi reale, panen <br />

export default LisaToode