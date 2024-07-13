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

    /* &:active {
    border-radius: 10px;
    border: 2px solid var(--Blue);
    background: rgba(0, 0, 0, 0.90);
    box-shadow: 0px 0px 12px 4px #2271D1 inset;
    } */
`


const Button = (props)=> {
    return(
        <Btn className={props.className}>
            {props.nombre}
        </Btn>   
    )

}

export default Button
