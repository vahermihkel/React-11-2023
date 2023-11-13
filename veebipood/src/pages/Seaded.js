import React, { useState } from 'react'

function Seaded() {
  const [keel, uuendaKeel] = useState("est");

  const muudaKeelEst = () => {
    uuendaKeel("est");
    // <--- siin panna ka localStorage-sse
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
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