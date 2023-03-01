import React from 'react'
import "./buttonAzul.css"

const ButtonAzul = ({texto , etapa , setEtapa , finalizar, setFinalizar , manejarErroresForm}) => {


  return (
    <>
    {
        etapa === 1 ? <button className='button' onClick={() => manejarErroresForm()}>{texto}</button> :
       etapa === 4 ? <button className='button morado' onClick={() => setFinalizar(!finalizar)}>{texto}</button> :
       <button className='button' onClick={() => setEtapa(etapa + 1)}>{texto}</button>
    }
    </> 
  )
}

export default ButtonAzul