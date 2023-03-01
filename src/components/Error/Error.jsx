import React from 'react'
import "./error.css"

const Error = ({texto}) => {
  return (
      <span className='error ubuntu-bold'>{texto}</span>
  )
}

export default Error