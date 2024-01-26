import React, { useEffect, useState } from 'react'

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json || []));
  }, []);

  return (
    <select>
      {parcelMachines.map(pm => <option>{pm.NAME}</option> )}
    </select>
  )
}

export default ParcelMachines