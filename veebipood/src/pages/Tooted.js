
function Tooted() {
  const tooted = ["Nobe", "Tesla", "BMW"];

  return (
      <div>
          {tooted.map(element => <div>{element}</div>)}
      </div>
  )
}

export default Tooted