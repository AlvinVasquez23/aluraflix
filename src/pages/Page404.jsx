
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import GlobalStyles from "../Styles/GlobalStyles"

const NoFound = styled.div`
    box-sizing:border-box;
    background: url(/img/404.png);
    width:100%;
    height:100vh;
    background-size:cover;
    display:flex;
    justify-content:center;

`

const Msg = styled.h1`
    color: #21bdd8;
    text-transform: uppercase;
    font-family: var(--font-categoria);
    font-weight:800;
    
`
const Regresar = styled.button`
    position:fixed;
    width: 10rem;
    height:2rem;
    background: var( --Dark-Grey);
    top:0;
    left:0;
    color:#21bdd8;
    font-family: var(--font-categoria);
    text-transform: uppercase;
    font-weight:800;
`

const Page404 = ()=>{
        const navigate = useNavigate();
    
        const handleRegresar = () => {
            navigate("/"); // Redirige a la ruta de inicio de tu aplicación
        };
    
    
    return(
        <NoFound> 
            <GlobalStyles/>
            <Msg>! la pagina que buscas no esta disponible ¡</Msg>
            <Regresar onClick={handleRegresar}>Regresar Home</Regresar>
        </NoFound>     
    )
}

export default Page404