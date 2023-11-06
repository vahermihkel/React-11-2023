import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h3>Lehte ei leitud</h3>

      <Link to="/avaleht">
        <button>Avalehele</button>
      </Link>

    </div>
  )
}

export default NotFound