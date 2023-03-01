import React, { useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils';
import "./planCard.css"

const PlanCard = ({ dataCard, setSeleccion, seleccion , seleccionActiva , setSeleccionActiva }) => {
   
    const {id,icono , titulo , valor , descuento } = dataCard;

    const [esActiva , setEsActiva] = useState(false)

  

    useEffect(() => {
         seleccionActiva.map(s => {
            if (s.id == id) {
                setEsActiva(s.active)
            }
        });
    },[seleccionActiva]);

 
    
 
    
    const handleClick = (id_recibido => {


        setSeleccion({
            ...seleccion,
            plan: {
                "valor": valor,
                "promocion": descuento,
                "nombre" : titulo
            }
        })

        const nuevo_estado = seleccionActiva.map(s => {
          
            if(s.id == id_recibido) {
              return {
                ...s,
                "active" : !s.activa
            
             }

            } else {
                return {
                    ...s,
                    "active": false

                }
            }
        })

        setSeleccionActiva(nuevo_estado)
       

    });

   

    return (
        <div className={`col contenedor-card-data ${esActiva && 'active'}`} onClick={() => handleClick(id)}>
            <div className='contenedor-icono-card'>
                <img alt='icono' src={icono} />
            </div>
            <div>
                <p className='ubuntu-medium azul02 titulo-card'>{titulo}</p>
                <p className='ubuntu-regular gris9 valor-card'>{valor}</p>
                <p className='ubuntu-regular azul02 descuento-card'>{descuento ? descuento : null}</p>
            </div>
        </div>
  )
}

export default PlanCard