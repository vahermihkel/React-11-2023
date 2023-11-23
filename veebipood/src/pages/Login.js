import React, { useRef, useState } from 'react'

function Login() {
  const isikukoodRef = useRef();
  const telefonRef = useRef();
  const [isikukoodKorrektne, setIsikukoodKorrektne] = useState(true);
  const [telefonKorrektne, setTelefonKorrektne] = useState(true);

  const isikukoodiKontroll = () => {   //       012345678910
  //  alert(isikukoodRef.current.value);        69901019905
    if (isikukoodRef.current.value.length === 11 && isikukoodRef.current.value[0] < 7) {
      setIsikukoodKorrektne(true);
    } else {
      setIsikukoodKorrektne(false);
    }
  }

  const telefoniKontroll = () => {  
      // startsWith +372
      // .length 12 tähemärki 
      if (telefonRef.current.value.startsWith("+372") && telefonRef.current.value.length === 12) {
        setTelefonKorrektne(true);
      } else {
        setTelefonKorrektne(false);
      }
    }

  return (
    <div>
      <label>Isikukood</label> <br />
      <input className={isikukoodKorrektne === false ? "red" : undefined} ref={isikukoodRef} onChange={isikukoodiKontroll} type="text" /> <br />
      {isikukoodKorrektne === false && <div className="error">Isikukood on sisestatud valel kujul</div>}
      <label>Telefoninumber</label> <br />
      <input className={telefonKorrektne === false ? "red" : undefined} ref={telefonRef} onChange={telefoniKontroll} type="text" /> <br />
      {telefonKorrektne === false && <div className="error">Sisestatud telefoninumbri formaadis on viga. Telefoninumber peab olema kujul +372XXXXXXXX.</div>}
      <button disabled={telefonKorrektne === false || isikukoodKorrektne === false}>Logi sisse</button>
    </div>
  )
}

export default Login