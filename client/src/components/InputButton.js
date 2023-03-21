import React, {useState} from "react";

const InputButton =  () => {

    const [description,setDescription] = useState(0)

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch("http://localhost:8000/buttons", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
           
            window.location = '/'
         
        } catch (error) {
            console.error(error.message)
        }
    }


return (
    <>
       <h1 >LISTA DE BOTONES</h1>
       <form onSubmit={onSubmitForm}>
        <button className="add-btn">Agregar Boton +</button>
       </form>
    </>
)

}


export default InputButton