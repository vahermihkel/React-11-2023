// rfce

import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Profiil() {
  const aadViide = useRef();  // aadRef = useRef();
  const emailViide = useRef(); 
  const telViide = useRef(); 
  const [aadress, setAadress] = useState(localStorage.getItem("aadress") || "Sisestamata");
  const [email, setEmail] = useState(localStorage.getItem("email") || "Sisestamata");
  const [telefon, setTelefon] = useState(localStorage.getItem("telefon") || "Sisestamata");

  // function sisestaAadress() {
  // }   funktsioonid võiksid olla allpool kui muutujad

  const sisestaAadress = () => {
    if (aadViide.current.value === "") {
      // alert("Aadressi sisestamine on kohustuslik");
      toast.error("Aadressi sisestamine on kohustuslik");
      return; 
    }

    // väikseks teisendatud esimene täht      on sama     originaalne esimene täht
    if (aadViide.current.value[0].toLowerCase() === aadViide.current.value[0]) {
      // alert("Peab algama suure algustähega");
      toast.error("Peab algama suure algustähega");
      return; 
    }

    setAadress(aadViide.current.value);
    // NB! Päriselus andmebaasi
    // Aga siin paneme localStoragesse, läbiharjutuse mõtteis
    // localStoragesse ei panda isikuandmeid, sellepärast, et meie ei saa
    // ligipääsu teiste arvutite localStorage-tesse

    // localStorage-sse lähevad päriselus sellised asjad, mida me ei vaja:
    // mis keeles, kas tume toon, kas leheküljevaade või lõputu scrollimine
    // veebisaidi seadistused
    localStorage.setItem("aadress", aadViide.current.value);
    // vasakpoolne on võti mille alusel salvestatakse (selle võtme abil pean võtma)
    // parempoolne on väärtus mida selle võtme taha salvestatakse

    // localStorage-st tuleb alati võtta ja panna, et oleks arendus loogiline
    // kui setItem teen, peab olema kuskil ka getItem
    // kui getItem teen, peab olema kuskil ka setItem
    // eraldiseisvalt neid pole mõtet teha
  }

  const sisestaEmail = () => {
    if (emailViide.current.value === "") {
      // alert("Emaili väli on tühi");
      toast.error("Emaili väli on tühi");
      return; // <--- katkesta funktsioon, early return
    }

    if (emailViide.current.value.includes("@") === false) {
      // alert("Emailis peab olema @ märk");
      toast.error("Emailis peab olema @ märk");
      return; // <--- katkesta funktsioon, early return
    }

    if (emailViide.current.value.includes(".") === false) {
      // alert("Emailis peab olema @ märk");
      toast.error("Emailis peab olema . märk");
      return; // <--- katkesta funktsioon, early return
    }

    setEmail(emailViide.current.value);
    localStorage.setItem("email", emailViide.current.value);
  }

  const sisestaTelefon = () => {
    if (telViide.current.value === "") {
      toast.error("Telefoni sisestamine on kohustuslik!");
      // alert("Telefoni sisestamine on kohustuslik");
      return; 
    }

    if (telViide.current.value.startsWith("+372") === false) {
      // https://fkhadra.github.io/react-toastify/introduction/ <- seadistada siin
      // https://react-hot-toast.com/ <- võite proovida peale panna (uudised)
      toast.error("Pead sisestama algusesse Eesti suunakoodi!");
      // alert("Pead sisestama algusesse Eesti suunakoodi");
      return; 
    }

    setTelefon(telViide.current.value); // muudab HTMLi
    localStorage.setItem("telefon", telViide.current.value); // salvestab brauserisse
  }

  // 1. vaadatakse sama projekti teistesse failidesse
  // 2. vaadatakse enda teistesse projektidesse (iseseisvatesse, tööprojektidesse)
  // 3. googeldamine / chatGPT
  // 4. ise välja mõtlemine (peast)
  // 5. kaastöötaja käest küsimine

  return (
    <div>
      <div>Aadress: {aadress}</div>
      <div>Email: {email}</div>
      <div>Telefon: {telefon}</div>
      
      <label>Aadress</label> <br />
      <input ref={aadViide} type="text" /> <br />
      <button onClick={sisestaAadress}>Sisesta</button> <br />
      <br />

      <label>Email</label> <br />
      <input ref={emailViide} type="text" /> <br />
      <button onClick={sisestaEmail}>Sisesta</button> <br />
      <br />

      <label>Telefon</label> <br />
      <input ref={telViide} type="text" /> <br />
      <button onClick={sisestaTelefon}>Sisesta</button> <br />
      <br />

      <ToastContainer 
        position="bottom-right"
        theme="dark"
      />
    </div>
  )
}

export default Profiil