import React from 'react'

const Heading = ({children,Heading, className, text}) => {
  return (
    <Heading className={className}>
      {text}
      {children}
    </Heading>
  )
}

export default Heading