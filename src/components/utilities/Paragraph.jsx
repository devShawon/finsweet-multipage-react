import React from 'react'

const Paragraph = ({children, classname, text}) => {
  return (
    <p className={classname}>
      {text}
      {children}
    </p>
  )
}

export default Paragraph