import styled from "styled-components";
import Button from "../Boton"

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
const Form = () =>{
    return (      
            <Formulario>
                <img src="./img/X - cancel.png" alt="cancelar" />
                <form>
                    <h1>Editar card:</h1>
                    <label>Título</label>
                    <input className="info lineal" type="text" placeholder="¿qué es javascript?"/>
                    <label>Categoria</label>
                    <select className="info lineal">
                        <option></option>
                        <option value="">Front End</option>
                        <option value="">Back End</option>
                        <option value="">Innovación y Gestión</option>
                    </select>
                    <label>Imagen</label>
                    <input className="info lineal" type="url" placeholder="Colocar la url de la imagen"/>
                    <label>Video</label>
                    <input className="info lineal" type="url"  placeholder="Colocar la Url del video"/>
                    <label>Descripción</label>
                    <textarea className="info" placeholder="Colocar una breve descripción"/>
                    <div className="botones">   
                        <Button nombre = "guardar"/>
                        <Button nombre = "limpiar"/>

                    </div>
                </form> 
            </Formulario>      
    )
}

export default Form

