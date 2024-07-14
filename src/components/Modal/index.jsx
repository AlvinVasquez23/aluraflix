import styled from "styled-components";
import Form from "../Form";


const ModalFormulario = styled.dialog`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    min-height: 100vh;
    background-color: rgba(3, 18, 47, 0.76);
    display:flex;
    justify-content:center;
    align-items:center;
 


`

const Modal = () => {
    return(
        <ModalFormulario open>
            <Form/>
        </ModalFormulario>
    )
};

export default Modal