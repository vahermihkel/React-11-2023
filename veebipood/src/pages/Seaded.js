import React, { useState } from 'react'

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