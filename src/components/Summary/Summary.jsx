import React from 'react'
import Finish from '../Finish/Finish';
import "./summary.css"

const Summary = ({seleccion , setSeleccion , planCardData , finalizar , setFinalizar}) => {

    const{nombre , valor} = seleccion.plan;
    const {pickadd , nombre:nombre_usuario } = seleccion;
  

    let year_month = planCardData.find(item => item.year);

    let valor_pickadd = 0;

    
    valor_pickadd = pickadd.reduce((accumulator, currentValue) => 
    {
        let valor = currentValue.valor.replace("+$", "");
        if(!year_month) {
            valor = valor.replace("/mo", "");
        } else {
            valor = valor.replace("/yr", "");
        }

        valor = parseInt(valor);
        
        return accumulator + valor;
    
    }, 0);

    let valor_plan_limpio = valor.replace("$", "");
    if (!year_month) {
        valor_plan_limpio = valor_plan_limpio.replace("/mo", "");
    } else {
        valor_plan_limpio = valor_plan_limpio.replace("/yr", "");
    }
   
    let total_final = parseInt(valor_plan_limpio) + parseInt(valor_pickadd);


  return (

    <>

    {
              !finalizar ? 
                    <div className='contenedor-info-container'>
                        <p className='azul02 personal-info ubuntu-bold'>Finishing up</p>
                        <p className='gris9 please-provide ubuntu-regular'>Double-check everything looks OK before confirming.</p>

                        <div className='d-flex justify-content-between contenedor-data-info'>
                            <p className='azul02  ubuntu-medium plan'>{nombre} {!year_month ? '(Monthly)' : '(Yearly)'}</p>
                            <p className='azul02  ubuntu-bold plan'>{valor}</p>
                        </div>

                        <div className='sub-contenedor-data-info uno'>
                            {
                                pickadd.map(p => {
                                    return <div key={p.id} className='d-flex justify-content-between'>
                                        <p className='gris9   ubuntu-regular texto-start'>{p.nombre}</p>
                                        <p className='azul02  ubuntu-regular texto-end'>{p.valor}</p>
                                    </div>
                                })

                            }

                        </div>

                        <div className='sub-contenedor-data-info'>
                            <div className='d-flex justify-content-between contenedor-total'>
                                <p className='gris9  ubuntu-regular texto-start'>Total {!year_month ? '(per month)' : '(per year)'}</p>
                                <p className='ubuntu-bold texto-total'>${total_final}{!year_month ? '/mo' : '/yr'}</p>
                            </div>
                        </div>
                    </div> :

                    <Finish nombre_usuario={nombre_usuario}/>
    }
      
    </>
  )
}

export default Summary