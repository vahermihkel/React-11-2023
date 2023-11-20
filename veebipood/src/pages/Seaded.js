import { useState } from 'react'

// ()         -   funktsionaalsuste jaoks (käivitatakse midagi)
//     muutuja -> sees on väärtus  5 või sõna "est"
//  funktsioon -> käivitamiseks
// = () =>    - anna väärtus, et on võimalik käivitada 
// =          - anna väärtust
//   () =>    - võimalik käivitada
// {} JS      - koodiblokk, funktsiooni sisu, if () {} else {}
// {} HTML    - koodiblokk, JavaScriptitamisega   {sonum}    {=== && div }  onClick={}
// {} import  - võtan sealt seest tüki
//     võtan React-router-dom seest Link, Route, Routes, aga ei võta muid
//                                BrowserRouterit nt ei võta
//     võtan React kausta seest node_modules-st useState, aga ei võta muid   useRef
// kui ei ole {}, siis võtan kõik sealt seest
// by default kui ei kirjuta midagi lõppu, siis arvatakse, et tegemist on .js failiga
// kõikidele teistele tuleb faililaiend kirjutada: .css , .svg
// .css-i importides läheb see fail kõikidele lehtedele
// [] - useState võrdusmärgist vasakul, täpselt 2 asja võtan kasutusele
// === - vasak pool ja parem pool on identsed -> true, kui ei ole -> false
// !== - vasak pool ja parem poole pole identsed -> true, kui on -> false
// > - suurem    >=  suurem/võrdne    <     <=  väiksem võrdne
// ?  :   -   if (kasTrue) {KUI_TRUE} else {KUI_EI_OLE_TRUE}
//              kasTrue ? KUI_TRUE   : KUI_EI_OLE_TRUE
// &&  -  välja näitamiseks, kui vasakul on tõde, siis näita välja parem poolne
// ||  -  varuvariandiks,    kui vasakul on tühjus, siis võta parem poolne
// ;   - rea lõpetamiseks, hea kasutada kui kood on korduvalt mitme rea peal
//        semikoolonit ei panda kui rida lõppeb loogelise suluga
// ,  sulgude sees, koma sulgude sees on mitme asja saatmine käivitamise hetkel
// null - tühjus, tean kust tuli ja mis ta on
// undefined - ka tühjus, aga määratlemata
// . punkt on mingi muutuja seest millegi välja kutsumiseks
// localStorage.getItem või localStorage.setItem <-- localStorage sees eksisteerib selline funktsioon
// console.log() <--- console sees eksisteerib .log() funktsioon
// inputiLuger.current.value <--- useRef muutuja sees eksisteerib .current ja selle sees omakorda .value

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel"));

  const muudaKeelEst = () => {
    uuendaKeel("est");
    // <--- siin panna ka localStorage-sse
    localStorage.setItem("keel","est");
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel","eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel","rus");
  }

  return (
    <div>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницaтa e на английски</div>}
      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>To English</button>
      <button onClick={muudaKeelRus}>Pycckuj</button>
    </div>
  )
}

export default Seaded