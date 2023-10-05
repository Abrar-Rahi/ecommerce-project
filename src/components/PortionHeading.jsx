import React from 'react'

const PortionHeading = ({className,text}) => {
  return (
    <h5 className={`font-dm text-base font-bold ${className}`}>{text}</h5>
  )
}

export default PortionHeading