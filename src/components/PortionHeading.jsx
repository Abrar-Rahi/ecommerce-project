import React from 'react'

const PortionHeading = ({text,className}) => {
  return (
    <h5 className={`font-db font-bold text-base ${className}`}>{text}</h5>
  )
}

export default PortionHeading