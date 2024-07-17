import styled from "styled-components";
import Button from "../Boton"
import React, { useState } from "react";

const Formulario = styled.div`
    width: 40vw;
    height: 95vh;;
    font-family: var(--font-button);
    border: 5px solid var(--Front-End);
    border-radius: 15px;
    position:relative;

    h1{
        font-family: var(--font-categoria);
        text-transform: Uppercase;
        line-height: 4rem;    
        color:var(--Blue);
        font-weight: 800;  
    }

    form{
        width:90%;
        height:100%;
        display:flex;
        flex-direction:column;
        color:white;
        padding: 0 0 0 10%;      
    }

    label{
        margin-bottom:2px;
        margin-top: 5px;
        font-family: var(--font-categoria);

    }


    .info{
        margin-bottom: 0.8em;
        font-family: var(--font-categoria);
        font-size: 1rem;   
        border-radius: 5px;
        border: 2px solid var(--Blue);
        background: rgba(3, 18, 47, 0.76);  
        color: var(--Grey-light);
         
    }
    .info:focus {
        outline: none;
    }


    .info::placeholder{
        font-family: var(--font-categoria); 
        font-size: 1rem;  
        padding-left:5px;  
        color: var(--Grey-light);
    }

    .lineal{
        height: 2rem;       
    }

    textarea{
        resize: none;
        height: 6rem; 
    }

    img{
        position: absolute;
        right:6px;
        top: 3px;
        cursor: pointer;

    }

    .botones{
        display:flex;
        justify-content:space-evenly;
        padding-top:1em;
    }

`
const Form = ({ onClose }) =>{

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleGuardar = (e) => {
        e.preventDefault();
        // Aquí podrías implementar la lógica para guardar los datos
        console.log("Guardando datos:", { titulo, categoria, imagen, video, descripcion });
        // Por ejemplo, podrías enviar los datos a una API, actualizar el estado global, etc.
    };

    const handleLimpiar = () => {
        // Función para limpiar los campos del formulario
        setTitulo("");
        setCategoria("");
        setImagen("");
        setVideo("");
        setDescripcion("");
    };

    return (      
            <Formulario>
                <button onClick={onClose}><img src="./img/X - cancel.png" alt="cancelar" /></button>
                <form>
                    <h1>Editar card:</h1>
                    <label>Título</label>
                    <input className="info lineal"
                    type="text"
                    placeholder="¿Qué es JavaScript?"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}/>
                    <label>Categoria</label>
                    <select className="info lineal"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}>
                        <option></option>
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Innovación y Gestión">Innovación y Gestión</option>
                    </select>
                    <label>Imagen</label>
                    <input className="info lineal"
                    type="text"
                    placeholder="Colocar la URL de la imagen"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}/>
                    <label>Video</label>
                    <input className="info lineal"
                    type="text"
                    placeholder="Colocar la URL del video"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}/>
                    <label>Descripción</label>
                    <textarea className="info"
                    placeholder="Colocar una breve descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}/>
                    <div className="botones">   
                        <Button nombre = "guardar" onClick={handleGuardar}/>
                        <Button nombre = "limpiar" onClick={handleLimpiar}/>

                    </div>
                </form> 
            </Formulario>      
    )
}

export default Form

