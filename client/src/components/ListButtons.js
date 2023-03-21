import React, { useState, useEffect } from "react";
import Counter from "./CounterButtons";
import { FaTrash } from "react-icons/fa";
const ListButtons = () => {
  const [botones, setBotones] = useState([]);


  const deleteButton = async (id) => {
    try {
        const deleteButton = await fetch(`http://localhost:8000/buttons/${id}`, {
          method: "DELETE",
        });
        setBotones(botones.filter((boton) => boton.btn_id !== id));
      } catch (error) {
        console.error(error.message);
      }
  }

  const getButtons = async () => {
    try {
      const response = await fetch("http://localhost:8000/buttons");
      const jsonData = await response.json();

      setBotones(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getButtons();
  }, []);
  return (
    <>
    <div>
    <table>
        <thead>
          <tr>
            <th>Lista de botones-Contador--</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {botones.map((boton) => (
            <tr key={boton.btn_id}>
              <td><Counter boton={boton}/></td>
              <td> <button  className="delete-btn" onClick={()=> deleteButton(boton.btn_id)}> <FaTrash/> </button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};

export default ListButtons;
