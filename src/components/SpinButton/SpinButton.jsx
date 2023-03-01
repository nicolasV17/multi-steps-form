import React from 'react'
import "./spinButton.css"

const SpinButton = ({ time, setTime }) => {


  // console.log(seleccionActiva , planCardData)

  const handleClick = () => {
   
    setTime(!time);
   
  }
  return (
      <div className="contenedor-btns-spin" onClick={handleClick} >
          <button className={`${time && 'derecha'}`}></button>
      </div>
  )
}

export default SpinButton