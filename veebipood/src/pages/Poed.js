import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);
    
    const originaali = () => {
      uuendaPoed(poedFailist);
    }

    const sorteeriAZ = () => {
      // poed.sort();
      poed.sort((a, b) => a.localeCompare(b)); // a võrdle b-ga
      uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
      poed.sort((a, b) => b.localeCompare(a));
      uuendaPoed(poed.slice());
    }

    const sorteeriTahedKasvavalt = () => {
      poed.sort((a, b) => a.length - b.length);
      uuendaPoed(poed.slice());
    }

    const sorteeriTahedKahanevalt = () => {
      poed.sort((a, b) => b.length - a.length);
      uuendaPoed(poed.slice());
    }

    const sorteeriKolmandaTaheJargi = () => {                      //   012
      poed.sort((a, b) => a[2].localeCompare(b[2]));               //   Kristiine
      uuendaPoed(poed.slice());
    }

    const filtreeriEgaLoppevad = () => {  
      const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
      uuendaPoed(vastus);
    }

    const filtreeriIsSisaldavad = () => {  
      const vastus = poed.filter(yksPood => yksPood.includes("is"));
      uuendaPoed(vastus);
    }

    const filtreeriKellelOn9Tahte = () => {  
      const vastus = poed.filter(yksPood => yksPood.length === 9);
      uuendaPoed(vastus);
    }

    const filtreeriKellelVah7Tahte = () => {  
      const vastus = poed.filter(yksPood => yksPood.length >= 7);
      uuendaPoed(vastus);
    }

    const filtreeriKellelKolmasTahtI = () => {  
      const vastus = poed.filter(yksPood => yksPood[2] === "i");
      //      const vastus = poed.filter(yksPood => yksPood.charAt(2) === "i"); // character At
      uuendaPoed(vastus);
    }

    const poodRef = useRef();

    const lisa = () => {
      // mingid oma vabalt valitud kontrollid
      poed.push(poodRef.current.value);
      uuendaPoed(poed.slice());
    }

    return (
        <div>
            <button onClick={originaali}>Tagasi originaali</button>
            <br /><br />
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arvu järgi kasvavalt</button>
            <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arvu järgi kahanevalt</button>
            <button onClick={sorteeriKolmandaTaheJargi}>Sorteeri kolmanda tähe järgi</button>
            <br /><br />
            <button onClick={filtreeriEgaLoppevad}>Jäta alles 'e'ga lõppevad</button>
            <button onClick={filtreeriIsSisaldavad}>Jäta alles 'is' sisaldavad</button>
            <button onClick={filtreeriKellelOn9Tahte}>Jäta alles kellel on 9 tähte</button>
            <button onClick={filtreeriKellelVah7Tahte}>Jäta alles kellel on vähemalt 7 tähte</button>
            <button onClick={filtreeriKellelKolmasTahtI}>Jäta alles kellel on kolmas täht 'i'</button>
            {poed.map(element => <div>{element}</div>)}

            <label>Poe nimi</label> <br />
            <input ref={poodRef} type="text" /> <br />
            <button onClick={lisa}>Sisesta</button> <br />
        </div>
    )
}

export default Poed;