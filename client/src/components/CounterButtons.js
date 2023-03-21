import React, { useState } from "react";

const Counter = ({ boton }) => {
  const [description, setDescription] = useState(boton.description);

  const updateButton = async () => {
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:8000/buttons/${boton.btn_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setDescription(parseInt(description) + 1);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="contenedor">
        {" "}
        <button onClick={() => updateButton(boton.btn_id)} className='list-btn'>
         Boton numero: {boton.btn_id}
        </button>
        <p>{parseInt(description)} </p>
      </div>
    </>
  );
};

export default Counter;
