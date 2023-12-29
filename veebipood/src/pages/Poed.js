import React, { useState } from 'react'
import poedFailist from "../data/poed.json";
import { Link } from 'react-router-dom';

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);
    
    const originaali = () => {
      uuendaPoed(poedFailist);
    }

    const sorteeriAZ = () => {
      // poed.sort();
      poed.sort((a, b) => a.nimi.localeCompare(b.nimi)); // a võrdle b-ga
      uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
      poed.sort((a, b) => b.nimi.localeCompare(a.nimi));
      uuendaPoed(poed.slice());
    }

    const sorteeriTahedKasvavalt = () => {
      poed.sort((a, b) => a.nimi.length - b.nimi.length);
      uuendaPoed(poed.slice());
    }

    const sorteeriTahedKahanevalt = () => {
      poed.sort((a, b) => b.nimi.length - a.nimi.length);
      uuendaPoed(poed.slice());
    }

    const sorteeriKolmandaTaheJargi = () => {                      //   012
      poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));               //   Kristiine
      uuendaPoed(poed.slice());
    }

    const filtreeriEgaLoppevad = () => {  
      const vastus = poed.filter(yksPood => yksPood.nimi.endsWith("e"));
      uuendaPoed(vastus);
    }

    const filtreeriIsSisaldavad = () => {  
      const vastus = poed.filter(yksPood => yksPood.nimi.includes("is"));
      uuendaPoed(vastus);
    }

    const filtreeriKellelOn9Tahte = () => {  
      const vastus = poed.filter(yksPood => yksPood.nimi.length === 9);
      uuendaPoed(vastus);
    }

    const filtreeriKellelVah7Tahte = () => {  
      const vastus = poed.filter(yksPood => yksPood.nimi.length >= 7);
      uuendaPoed(vastus);
    }

    const filtreeriKellelKolmasTahtI = () => {  
      const vastus = poed.filter(yksPood => yksPood.nimi[2] === "i");
      //      const vastus = poed.filter(yksPood => yksPood.charAt(2) === "i"); // character At
      uuendaPoed(vastus);
    }

    const arvutaTahedKokku = () => {
      let summa = 0;
      poed.forEach(element => summa = summa + element.nimi.length);
      return summa;
    }
    

    return (
        <div>
            <button onClick={originaali}>Filtrid maha</button>
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
            {poed.map((element, index) => 
              <div key={index}>
                {element.nimi} - {element.aadress}
                <Link to={"/pood/" + index}>
                  <button>Vaata lähemalt</button>
                </Link>
              </div>
            )}
        </div>
    )
}

export default Poed;