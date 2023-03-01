import React, { useEffect, useState } from 'react'
import "./cardAdd.css"

const CardAdd = ({ data, setSeleccion, seleccion}) => {
      const {id,titulo_add , subtitulo_add , valor_add} = data;

      const [esActiva, setEsActiva] = useState(false);
     
      
      useEffect(() => {
            if(seleccion.pickadd.length == 0) {
                  if(id == "1") {
                        setEsActiva(true)
                  }
            } else {
                  seleccion.pickadd.map(s => {
                        if (s.id == id) {
                              setEsActiva(true)
                        }
                  })
            }
          
              }, []);


      useEffect(() => {
            if (esActiva) {

                  if(!seleccion.pickadd.find(item => item.nombre == titulo_add)) {
                        setSeleccion({
                              ...seleccion,
                              pickadd: [
                                    ...seleccion.pickadd,
                                    {
                                          "id" : id,
                                          "valor": valor_add,
                                          "nombre": titulo_add
                                    }
                              ]
                        })

                  }
                
               
            } else {
                  const newState = seleccion.pickadd.filter(p => p.nombre != titulo_add);
            
                  setSeleccion({
                        ...seleccion,
                        pickadd: newState
                        
                  })
            }
      }, [esActiva]);


    


      const handleClick = (id) => {

            setEsActiva(!esActiva)


      }

      const handleCheckbox = (id) => {
          
            setEsActiva(!esActiva)
      }



      return (
            <div className={`tarjeta  ${esActiva && 'active'}`} onClick={()=>handleClick(id)}>
            <div>
                  <input onChange={()=>handleCheckbox(id)} checked={esActiva} type="checkbox" name="" id="" className='checkbox'/>
            </div>
            <div className='contenedor-titulo'>
                  <p className='ubuntu-medium azul02 titulo'>{titulo_add}</p>
                  <p className='ubuntu-regular gris9 subtitulo'>{subtitulo_add}</p>
            </div>
            <div>
                  <p className='valor ubuntu-regular'>{valor_add}</p>
            </div>
            
      </div>
      )
}

export default CardAdd