import React, { useState } from 'react';

function Backdrop({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {children}
      <button onClick={toggleModal}>Abrir Modal</button>
      {isOpen && (
        <>
          <div className="backdrop" onClick={toggleModal} />
          <div className="modal">
            <h2>Un Modal</h2>
            <p>Este es un ejemplo de un modal con un backdrop.</p>
            <button onClick={toggleModal}>Cerrar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Backdrop;