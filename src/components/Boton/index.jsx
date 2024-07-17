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
    
    border:${({activo}) => (activo ? "2px solid var(--Blue)" : "2px solid #F5F5F5")};
    background:${({activo}) => (activo ? "rgba(0, 0, 0, 0.90)" : "var(--Dark-Grey)")};
    color:${({activo}) => (activo ? "var(--Blue)" : "#FFF")};
    box-shadow:${({activo}) => (activo ? "0px 0px 12px 4px #2271D1 inset" : "none" )};

`

const Button = ({nombre, activo=false,  onClick})=> {
    const handleClick = (e) => {
        e.preventDefault();
        // Detiene la propagación del evento solo si el nombre es "limpiar"
        if (nombre === "limpiar") {
            e.stopPropagation();
        }
        onClick(e);
    };

    return(
        <Btn activo={activo} onClick={handleClick}>
            {nombre}
        </Btn>   
    )

}

export default Button
