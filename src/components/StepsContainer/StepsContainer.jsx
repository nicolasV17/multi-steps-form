import React from 'react'
import Steps from '../Steps/Steps'
import "./stepsContainer.css"

const StepsContainer = ({stepsData , etapa}) => {

  return (
    <div className='sidebar'>
      <div className='sidebar_contenedor_steps'>
         {
           stepsData.map(steps => {
            return <Steps key={steps.numero} steps={steps} etapa={etapa}/>
           })
         }
      </div>
    </div>
  )
}

export default StepsContainer