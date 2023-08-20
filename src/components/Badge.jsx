import React from 'react'

const Badge = ({text}) => {
  return (
    <button className={`py-2 px-6 bg-black text-white font-dm font-bold text-sm absolute top-5 left-5`}>{text}</button>
  )
}

export default Badge