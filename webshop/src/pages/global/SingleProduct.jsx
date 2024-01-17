import React from 'react'
// import { useParams } from 'react-router-dom'

function SingleProduct() {
  // const { MINGI_MUUTUJA } = useParams();
  // see MINGI_MUUTUJA peab olema sama, mis App.js sees :MINGI_MUUTUJA nimetus
  // KUIDAS ÜLES OTSIDA:
  // VALE: const leitud = tootedFailist[index];
  // ÕIGE: const leitud = tootedFailist.find(toode => toode.id === Number(MINGI_MUUTUJA));
  // MIKS-> sest eesti keelsel saatsime URLi järjekorranumbri, mitmes ta on
  //        praegu saadame ID, mis on toote omadus, mille järgi saame teda üle otsida .find() abil
  // Ülejäänud eesti keelse järgi

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct