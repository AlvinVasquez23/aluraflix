import styled from "styled-components";

const Btn = styled.button`
    width: 120px;
    height: 40px;
    text-align: center;
    font-family: var(--font-button);
    font-weight: 700;
    font-size: 15px;
    border-radius: 12px;
    text-transform: uppercase;
    cursor: pointer;  
    color: #FFF;
    border: 2px solid #F5F5F5;
    background: var(--Dark-Grey);
`


const Button = (props)=> {
    return(
        <Btn className={props.className}>
            {props.nombre}
        </Btn>   
    )

}

export default Button
