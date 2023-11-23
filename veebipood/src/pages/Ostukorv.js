import { Link } from "react-router-dom";

function Ostukorv() {
  // Coca, Fanta, Sprite

  // kuvage HTMLs
  return (
    <div>
      <div>Ostukorv on tühi</div>
      
      <Link to="/">
        <button>Avalehele</button>
      </Link>
    </div>
  )
}

export default Ostukorv