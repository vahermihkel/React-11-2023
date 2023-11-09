import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, m22raSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

  function lisa() {
    if (inputiLuger.current.value === "") {
      m22raSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      m22raSonum("Toode lisatud: " + inputiLuger.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uus toode</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      {/* <button onClick={() => lisa()}>Sisesta</button> <br /> */}
    </div>
  )
}

// div, p, h1, h2, h3... <-- alati uuel real
// lubavad enda kõrvale: button, img, label, input, span, ....
// kui ma tahan eraldi reale, panen <br />

export default LisaToode