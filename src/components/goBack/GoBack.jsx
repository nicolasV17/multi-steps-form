import React from 'react'
import "./goBack.css"

const GoBack = ({etapa , setEtapa}) => {
  return (
      <p onClick={() => setEtapa(etapa - 1)} className='ubuntu-medium go-back'>Go Back</p>
  )
}

export default GoBack