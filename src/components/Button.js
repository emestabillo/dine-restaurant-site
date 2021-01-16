import React from "react"
import { Link } from "react-router-dom"

export default function Button({link, btnType, btnText}) {
  return (
    <Link to={link} className={`btn ${btnType}`}>{btnText}</Link>
  )
}