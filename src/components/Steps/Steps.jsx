import React from 'react'
import "./steps.css"

const Steps = ({steps,etapa}) => {

 
  return (
    <div className='d-flex'>
        <div className='d-flex justify-content-center align-items-center contenedor-circulo-steps'>
           <div className={`circulo-steps ubuntu-bold ${steps.numero === etapa && 'active'}`}>
              {steps.numero}
           </div>
        </div>
        <div className='d-flex flex-column'>
           <p className='ubuntu-regular lblue steps_titulo ls2'>{steps.titulo}</p>
           <p className='ubuntu-bold blanco steps_texto ls2'>   {steps.texto}</p>
        </div>
    </div>
  )
}

export default Steps