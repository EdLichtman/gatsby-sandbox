import React from "react"
import { Link } from "gatsby"


const NavMenu = () => {
  var pages =
  [
      {
        url: '/tools/die-generator',
        clientName: 'Die Generator Tool'
      }
    ]

  return pages.map((page, index) => {
    return <Link key={index.toString()} to={page.url}>{page.clientName}</Link>
  })
}

export default NavMenu
