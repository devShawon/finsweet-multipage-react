import React from 'react'
import { NavLink } from 'react-router-dom'

const HyperLink = ({href, text, className}) => {
  return (
    <>
        <NavLink to={href} className={className}>{text}</NavLink>
    </>
  )
}

export default HyperLink