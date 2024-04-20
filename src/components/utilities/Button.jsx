import React from 'react'
import HyperLink from './HyperLink'

const Button = ({href, className, text}) => {
  return (
    <>
        <HyperLink href={href} className={className} text={text} />
    </>
  )
}

export default Button