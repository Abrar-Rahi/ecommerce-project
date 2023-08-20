import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`font-db font-normal text-base ${className}`}>{text}</p>
  )
}

export default Paragraph