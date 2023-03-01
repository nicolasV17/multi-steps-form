import React from 'react'
import PlanCard from '../PlanCard/PlanCard'
import SpinButton from '../SpinButton/SpinButton'

import "./selectPlan.css"

const SelectPlan = ({ planCardData, time, setTime , seleccion , setSeleccion , setSeleccionActiva, seleccionActiva}) => {





  return (
      <div className='contenedor-info-container'>
          <p className='azul02 personal-info ubuntu-bold'>Select your plan</p>
          <p className='gris9 please-provide ubuntu-regular'>You have the option of monthly or yearly billing.</p>

           <div className="" id='contenedor-cards'>
        {
          planCardData.map(dataCard => {
            return <PlanCard seleccionActiva={seleccionActiva}  setSeleccionActiva={setSeleccionActiva} setSeleccion={setSeleccion} seleccion={seleccion}  key={dataCard.id} dataCard={dataCard} />
          })
         
        }
           </div>

           <div className='contenedor-spin-button'>
        <p className={`please-provide ubuntu-regular ${!time ? 'azul02 fw-bold' : 'gris9'}`}>Monthly</p>
        <SpinButton time={time} setTime={setTime} />
        <p className={`please-provide ubuntu-regular ${time ? 'azul02 fw-bold' : 'gris9'}`}>Yearly</p>
           </div>
         
      </div>
  )
}

export default SelectPlan