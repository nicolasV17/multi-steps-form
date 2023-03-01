import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import "./app.css";


var stepsDataInicial = [{
  "numero": 1,
  "titulo": "STEP 1",
  "texto": "YOUR INFO"
}, {
  "numero": 2,
  "titulo": "STEP 2",
  "texto": "SELECT PLAN"
}, {
  "numero": 3,
  "titulo": "STEP 3",
  "texto": "ADD-ONS"
}, {
  "numero": 4,
  "titulo": "STEP 4",
  "texto": "SUMMARY"
},
 
]


var planCardDataInicialMes = [{
  "id":"1",
  "icono": 'images/icon-arcade.svg',
  "titulo": "Arcade",
  "valor": "$9/mo",
  "descuento": "",
  "titulo_add":"Online service",
  "subtitulo_add":"Access to multiplayer games",
  "valor_add": "+$1/mo"
},
{
  "id": "2",
  "icono": 'images/icon-advanced.svg',
  "titulo": "Advanced",
  "valor": "$12/mo",
  "descuento": "",
  "titulo_add": "Larger storage",
  "subtitulo_add": "Extra 1TB of cloud save",
  "valor_add": "+$2/mo"
}, {
  "id": "3",
  "icono": 'images/icon-pro.svg',
  "titulo": "Pro",
  "valor": "$15/mo",
  "descuento": "",
  "titulo_add": "Customizable profile",
  "subtitulo_add": "Custom theme on your profile",
  "valor_add": "+$2/mo"
}]

var planCardDataInicialYear = [{
  "year" : "year",
  "id": "1",
  "icono": 'images/icon-arcade.svg',
  "titulo": "Arcade",
  "valor": "$90/yr",
  "descuento": "2 months free",
  "titulo_add": "Online service",
  "subtitulo_add": "Access to multiplayer games",
  "valor_add": "+$10/yr"
},
{
  "year": "year",
  "id": "2",
  "icono": 'images/icon-advanced.svg',
  "titulo": "Advanced",
  "valor": "$120/yr",
  "descuento": "2 months free",
  "titulo_add": "Larger storage",
  "subtitulo_add": "Extra 1TB of cloud save",
  "valor_add": "+$20/yr"
}, {
  "year": "year",
  "id": "3",
  "icono": 'images/icon-pro.svg',
  "titulo": "Pro",
  "valor": "$150/yr",
  "descuento": "2 months free",
  "titulo_add": "Customizable profile",
  "subtitulo_add": "Custom theme on your profile",
  "valor_add": "+$20/yr"
}]


var seleccionDataInicial = {
  "nombre":"",
  "email":"",
  "telefono":"",
  "plan":{
    "valor":"$9/mo",
    "promocion":"",
    "nombre" :"Arcade"
  },
  "pickadd":[]
}

var errores_inicial = {
  "nombre": false,
  "email": false,
  "telefono": false
}


function App() {

  
 
  const [errores, setErrores] = useState(errores_inicial);
  const [stepsData, setStepsData] = useState(stepsDataInicial);
  const [planCardData, setPlanCardData] = useState(planCardDataInicialMes);
  const [etapa, setEtapa] = useState(1);
  const [finalizar, setFinalizar] = useState(false);
  const [time, setTime] = useState(false);
  const [seleccion, setSeleccion] = useState(seleccionDataInicial);
  const [seleccionActiva, setSeleccionActiva] = useState([
    {
      "id": "1",
      "active": true
    },
    {
      "id": "2",
      "active": false
    },
    {
      "id": "3",
      "active": false
    }
  ]);


  
  
  useEffect(() => {

    
    if (time) {
      setPlanCardData([...planCardDataInicialYear]);
     
    
    } else {
      setPlanCardData(planCardDataInicialMes);
     
    }

   },[time ]);

  useEffect(() => {

      update();

  
  }, [planCardData]);


   const update = () => {
     var sel_activa = seleccionActiva.find(s => s.active)

     var { id } = sel_activa;

     const dataActiva = planCardData.find(d => d.id == id);

     const { titulo, descuento, valor } = dataActiva;

     setSeleccion({
       ...seleccion,
       plan: {
         "valor": valor,
         "promocion": descuento,
         "nombre": titulo
       }
     })

     // cambiar el precio del pick add

     setSeleccion({
       ...seleccion,
       pickadd: [
         {
           "id": planCardData[0].id,
           "valor": planCardData[0].valor_add,
           "nombre": planCardData[0].titulo_add
         }
       ]
     })

   }

   const manejarErroresForm = () => {

     let continuar = Object.values(errores).filter(v => v);
     console.log(continuar)
  
     if(continuar.length == 3) {
       setEtapa(etapa + 1)
       
      
     } else {
       console.log("hay errores")
     }
     
   
   }


  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center pl0mobile pr0mobile align-items-start-mobile">
      <Layout manejarErroresForm={manejarErroresForm} errores={errores} setErrores={setErrores} finalizar={finalizar} setFinalizar={setFinalizar}  seleccionActiva={seleccionActiva} setSeleccionActiva={setSeleccionActiva}  seleccion={seleccion} setSeleccion={setSeleccion} time={time}  setTime={setTime} stepsData = {stepsData} etapa={etapa} setEtapa={setEtapa} planCardData={planCardData} />
  </div>

  );
}

export default App;
