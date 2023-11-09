import React, { useState } from 'react'

// div ja span on tühjused, aga div teeb uue rea, span ei tee

// tumesinine - JavaScriptis sissekirjutatud sõnad: function, const, false, true, undefined
//  Liigitus     HTMLs elementide tagi nimetused: div, img, button, input, label
// tavaline sinine - muutujad JS + HTMLs. Need on meie poolt välja mõeldud sõnad
// helesinine - omadus JS + HTMLs. className, src, alt, onClick, disabled
//              JavaScriptis: .current.value
// kollane - funktsioonid, JS + HTMLs
// roheline - kommentaar
// lilla - käsklus. import, export, return, if / else
// valge - märgid, HTMLs väljakuvatav tekst
// oranž - tekst
// heleroheline - number
// {{{{{{{{{{{{{{[[[(((())))]]]}}}}}}}}}}}}}}


function Avaleht() {
  const [kogus, uuendaKogus] = useState(7);
  const [laigitud, muudaLaigitud] = useState(false); // 0 - mittelaigitud, 1 - laigitud
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

  // const kogus = 7
  // kogus = 8 xxxxxxxxxx

  // kasOnDisabled = kogus === 0;
  // document.getElementById("nupp").disabled = kasOnDisabled

  // function nulli() { // Echmascript5 ja madalamal (JavaScripti erinevad versioonid)
  // }

  const nulli = () => { // Echmascript6
    uuendaKogus(0);
    uuendaSonum("Nullitud!");
  }

  const vahenda = () => {
    uuendaKogus( kogus - 1  );
    uuendaSonum("Vähendatud!");
  }

  const suurenda = () => {
    uuendaKogus( kogus + 1  );
    uuendaSonum("Suurendatud!");
  }

  return (
    <div>
      <div>{sonum}</div>
      {/* <span>{laigitud}</span> */}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {kogus > 10 && <img src="/kuldne.svg" alt="" />}
      <button onClick={() => muudaLaigitud(true)}>Pane laigituks</button>
      <button onClick={() => muudaLaigitud(false)}>Pane mittelaigituks</button>

      <br /><br />
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht