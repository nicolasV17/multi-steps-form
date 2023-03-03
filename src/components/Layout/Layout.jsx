import React from 'react'
import "./layout.css"
import StepsContainer from '../StepsContainer/StepsContainer'
import InfoContainer from '../InfoContainer/InfoContainer'
import ButtonAzul from '../ButtonAzul/ButtonAzul'
import SelectPlan from '../SelectPlan/SelectPlan'
import GoBack from '../goBack/GoBack'
import PickAdd from '../PickAdd/PickAdd'
import Summary from '../Summary/Summary'


const Layout = ({ stepsData, etapa, setEtapa, planCardData, time, setTime, setSeleccion, seleccion, setSeleccionActiva, seleccionActiva , finalizar , setFinalizar , errores , setErrores , manejarErroresForm }) => {
  return (
    <div className="container altura-cel">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 pl0ipad pr0ipad">
          <StepsContainer stepsData={stepsData} etapa={etapa} />
        </div>
        <div
          className={`${
            !finalizar
              ? "col-12 col-sm-12 col-md-7 col-lg-8 prelative"
              : "col-12 col-sm-12 col-md-7 col-lg-8 prelative d-flex flex-column justify-content-center align-items-center"
          }`}
        >
          {etapa === 1 ? (
            <InfoContainer
              errores={errores}
              setErrores={setErrores}
              setSeleccion={setSeleccion}
              seleccion={seleccion}
            />
          ) : etapa === 2 ? (
            <SelectPlan
              setSeleccionActiva={setSeleccionActiva}
              seleccionActiva={seleccionActiva}
              setSeleccion={setSeleccion}
              seleccion={seleccion}
              time={time}
              setTime={setTime}
              planCardData={planCardData}
            />
          ) : etapa === 3 ? (
            <PickAdd
              setSeleccion={setSeleccion}
              seleccion={seleccion}
              planCardData={planCardData}
            />
          ) : etapa === 4 ? (
            <Summary
              finalizar={finalizar}
              setFinalizar={setFinalizar}
              planCardData={planCardData}
              setSeleccion={setSeleccion}
              seleccion={seleccion}
            />
          ) : null}

          <div className="contenedor-go-back">
            {etapa != 1 && !finalizar ? (
              <GoBack etapa={etapa} setEtapa={setEtapa} />
            ) : null}
          </div>

          <div className="contenedor-button-azul">
            {etapa == 1 ? (
              <ButtonAzul
                texto={"Next Step"}
                etapa={etapa}
                setEtapa={setEtapa}
                manejarErroresForm={manejarErroresForm}
              />
            ) : etapa != 4 ? (
              <ButtonAzul
                texto={"Next Step"}
                etapa={etapa}
                setEtapa={setEtapa}
              />
            ) : (
              !finalizar && (
                <ButtonAzul
                  finalizar={finalizar}
                  setFinalizar={setFinalizar}
                  texto={"Confirmar"}
                  etapa={etapa}
                  setEtapa={setEtapa}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout