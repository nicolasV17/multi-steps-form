import React, { useEffect, useState } from 'react'
import "./infoContainer.css"
import Error from '../Error/Error'

const InfoContainer = ({ setSeleccion, seleccion , errores , setErrores }) => {


const handleChange = (e) => {

  setSeleccion({
       ...seleccion , 
       [e.target.name] : e.target.value
  })
}

const error = (e) => {
  if (seleccion[e.target.name] == "") {
    setErrores({ ...errores, [e.target.name]: false })
  } else {
    setErrores({ ...errores, [e.target.name]: true })
  }
}

  return (
    <div className='contenedor-info-container'>
      <p className='azul02 personal-info ubuntu-bold'>Personal info</p>
      <p className='gris9 please-provide ubuntu-regular'>Please provide your name, email address, and phone number.</p>

      <div className='container-input'>
        <p className='azul02 label-form ubuntu-regular d-flex justify-content-between'>Name {!errores.nombre && <Error texto={'Name is required'} />}</p>
        <input onKeyDown={(e) => error(e)} onKeyUp={(e) => error(e)} type="text" name="nombre" id="input-nombre" className={`input ${!errores.nombre && 'error'}`} placeholder='e.g. Stephen King' value={seleccion.nombre} onChange={(e) => handleChange(e)} />
      </div>
      <div className='container-input'>
        <p className='azul02 label-form ubuntu-regular d-flex justify-content-between'>Email Address {!errores.email && <Error texto={'Email is required'} />}</p>
        <input onKeyDown={(e) => error(e)} onKeyUp={(e) => error(e)} type="text" name="email" id="" className={`input ${!errores.email && 'error'}`} value={seleccion.email} placeholder='e.g. stephenking@lorem.com' onChange={(e) => handleChange(e)} />
      </div>
      <div className='container-input'>
        <p className='azul02 label-form ubuntu-regular d-flex justify-content-between'>Phone Number {!errores.telefono && <Error texto={'Phone is required'} />}</p>
        <input onKeyDown={(e) => error(e)} onKeyUp={(e) => error(e)} type="text" name="telefono" id="" className={`input ${!errores.telefono && 'error'}`} value={seleccion.telefono} placeholder='e.g. +1 234 567 890' onChange={(e) => handleChange(e)} />
      </div>
    </div>
  )
}

export default InfoContainer