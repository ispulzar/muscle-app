import React, { useState } from "react";
import { musculos } from "./Data";

function Modal({ nameMuscle, toggleModal }) {
  const [modalMode, setModalMode] = useState(false);

  const changeModal = () => {
    setModalMode(!modalMode);
  };

  return (
    <div className={modalMode ? "modal2" : "modal1"}>
      <h2>{musculos[nameMuscle].name}</h2>
      <p>{musculos[nameMuscle].tamano}</p>
      <button onClick={changeModal}>ejercicios</button>
      <button onClick={toggleModal}>Cerrar</button>
      {modalMode &&
        musculos[nameMuscle].ejercicios.map((ejercicio) => (
          <div key={ejercicio.name}>
            <img
              id={`ejercicios-${ejercicio.name}`}
              className="imgEjercicio"
              src={ejercicio.imagesEjercicios}
            />
            <p>Peso</p>
            <p>Rango Rep.</p>
          </div>
        ))}
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
