import React from 'react'
import { Link } from 'react-router-dom'

const HyperLink = ({href, text, className}) => {
  return (
    <>
        {/* <a href={href} className={className}>{text}</a> */}
        <Link href={href} className={className}>{text}</Link>
    </>
  )
}

export default HyperLink