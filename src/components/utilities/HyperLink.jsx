import React from 'react'

const HyperLink = ({href, text, className}) => {
  return (
    <>
        <a href={href} className={className}>{text}</a>
    </>
  )
}

export default HyperLink