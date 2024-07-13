import styled from "styled-components"

const PiePagina = styled.footer`
    display:flex;
    flex-direction:column;
    background: rgba(0, 0, 0, 0.90);
    height:9em;
    text-align: center;
    align-items:center;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
    border-top: 4px solid var(--Blue);
    color: var(--Grey-light);
    font-family: var(--font-categoria);
    line-height: 1.5em;
    padding-top: 1em;
`

const Footer = () => {
    return(
        <PiePagina >
            <div className="imagen">
                <img src="./img/logo.png" alt="Logo"/>
            </div>
            <p>Todos los Derechos Reservados - 2024 &copy;</p>
            <p>Pagina desarrollado con fines academicos<br/>Por Alwin Huaman Vasquez</p>
        </PiePagina>
    )
}

export default Footer