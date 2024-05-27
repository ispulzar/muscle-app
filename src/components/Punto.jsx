import React, { useState } from "react";
import { musculos } from "./Data";

function Modal({ nameMuscle, toggleModal }) {
  const [modalMode, setModalMode] = useState(false);

  const changeModal = () => {
    setModalMode(!modalMode);
  };

  return (
    <div className={modalMode ? "modal2" : "modal1"}>
      <button onClick={changeModal} className="button01">
        Ejercicios
      </button>
      <button onClick={toggleModal} className="buttonClose">
        X
      </button>
      <div className="scrollContent">
        {modalMode &&
          musculos[nameMuscle].ejercicios.map((ejercicio) => (
            <div key={ejercicio.name}>
              <img
                id={`ejercicios-${ejercicio.name}`}
                className="imgEjercicio"
                src={ejercicio.imagesEjercicios}
                alt={ejercicio.name}
              />
              <div id="infoEjercicio">
                <p>Name: {ejercicio.name}</p>
                <p>Peso: {ejercicio.peso}</p>
                <p>Rango Rep: {ejercicio.rangeRep}</p>
              </div>
            </div>
          ))}
        {modalMode && (
          <button onClick={changeModal} className="button01">
            Agregar
          </button>
        )}
      </div>
    </div>
  );
}

function Punto(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        id={props.id}
        className={props.clase}
        src="./circle.png"
        alt="circle"
        onClick={toggleModal}
      />
      {isOpen && (
        <>
          <div className="backdrop" onClick={toggleModal} />
          <Modal nameMuscle={props.nameMuscle} toggleModal={toggleModal} />
        </>
      )}
    </div>
  );
}

export default Punto;