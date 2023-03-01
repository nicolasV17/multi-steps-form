import React  from 'react'
import CardAdd from '../CardAdd/CardAdd';

import "./pickAdd.css";

const PickAdd = ({ planCardData ,seleccion, setSeleccion }) => {
   

    return (
        <div className='contenedor-info-container'>
            <p className='azul02 personal-info ubuntu-bold'>Pick add-ons</p>
            <p className='gris9 please-provide ubuntu-regular'>Add-ons help enhance your gaming experience.</p>

            <div className="" id='contenedor-cards-add'>
                {
                    planCardData.map(data => {
                        return <CardAdd setSeleccion={setSeleccion} seleccion={seleccion} key={data.id} data={data} />
                    })
                }
                
            </div>

        </div>
    )
}

export default PickAdd