import React from "react"
import { Link } from "gatsby"

export default props => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/om-os/">Om Os</Link>
        </li>
        <li>
          <Link to="/undervisning/">Undervisning</Link>
        </li>
        <li>
          <Link to="/information/">Information</Link>
        </li>
      </ul>
    </nav>
  </>
)
