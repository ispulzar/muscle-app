import React, {useState} from "react";
import { musculos } from "./Data";

function Punto(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  console.log(musculos)
  return (
    <div>
      <img
        id={props.id}
        className={props.clase}
        src="./public/circle.png"
        alt="circle"
        onClick={toggleModal}    
      />
      {isOpen && (
        <>
          <div className="backdrop" onClick={toggleModal} />
          <div className="modal">
            <h2>{musculos[props.nameMuscle].name}</h2>
            
            <p>{musculos[props.nameMuscle].tamano}</p>
            <button onClick={toggleModal}>Cerrar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Punto;
