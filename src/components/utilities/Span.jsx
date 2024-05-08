import React from 'react'

const Span = ({children,className, text}) => {
  return (
    <>
        <span className={className}>
          {text}
          {children}
          </span>
    </>
  )
}

export default Span