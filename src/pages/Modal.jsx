import styled from "styled-components";
import Form from "../components/Form";


const ModalFormulario = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    min-height: 100vh;
    background-color: rgba(3, 18, 47, 0.76);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
 


`

const Modal = ({ onClose }) => {
    return(
        <ModalFormulario >
            <Form onClose={onClose}/>
        </ModalFormulario>
    )
};

export default Modal