import React, { useEffect } from 'react'
import "./finish.css"

const Finish = ({setEtapa , nombre_usuario}) => {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center tarjeta-blanca'>
        <img src="images/icon-thank-you.svg" alt="icono gracias" className='img-fluid' />
          <p className='azul02 thank-you ubuntu-bold'>Thank you!</p>
          <p className='gris9  ubuntu-regular text-center sub-thanks-you'>Thanks {nombre_usuario} for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Finish