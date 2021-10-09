import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div>
      <Link to="/album">album</Link>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </div>
  )
}

export default Header
