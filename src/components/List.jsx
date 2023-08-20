import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`font-dm font-normal text-sm list-none ${className}`}>{text}</li>
  )
}

export default List