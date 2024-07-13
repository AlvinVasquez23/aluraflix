import styled from "styled-components";

const Formulario = styled.form`
    width: 40%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    font-family: var(--font-button);

    h1{
        font-family: var(--font-categoria);
        text-transform: Uppercase;
        
    }
    

`

const Form = () =>{
    return (
        <Formulario>
            <h1>Editar card</h1>
            <label>Título</label>
            <input type="text" placeholder="¿qué es javascript?"/>
            <label>Categoria</label>
            <select>
                <option></option>
                <option value="">Front End</option>
                <option value="">Back End</option>
                <option value="">Innovación y Gestión</option>
            </select>
            <label>Imagen</label>
            <input type="url" placeholder="Colocar la url de la imagen"/>
            <label>Video</label>
            <input type="url"  placeholder="Colocar la Url del video"/>
            <label>Descripción</label>
            <textarea placeholder="Colocar una breve descripción"/>
        </Formulario>
    )
}

export default Form

