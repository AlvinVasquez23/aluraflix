import styled from "styled-components";
import Card from "../Card/Card";
import GlobalStyles from "../../Styles/GlobalStyles";


const Contenido = styled.main`
    width:100%;
    height:50rem;
    background: var(--Dark-Grey);
    display:flex;
    justify-content:center;
    padding-top:10px;

   

`

const ContainerCard = styled.div`
    width:90%;
    height:100%;
    display:grid;
    grid-template-rows: repeat(3, 1fr);
   


`

const GroupCard = styled.div`
    width:100%;
   /*  height:100%; */
    margin-top:1rem;
    display:flex;
    gap:3rem;
    
    

`

const Category = styled.h2`
    background: ${props => props.fondo};
    font-family: var(--font-categoria);
    font-size: 1.1rem;
    height:2rem;
    padding-top: 5px;
    margin-bottom:3px;
    text-transform: uppercase;
    color: white;
    width: 20%;
    border-radius: 10px;
    text-align:center;
`


const Main =() =>{
    return(
        <>
            <GlobalStyles/>
            <Contenido>             
                <ContainerCard>
                    <div>
                    <Category fondo="var(--Front-End)">Front End</Category>
                    <GroupCard>
                        <Card/>
                        <Card/>
                        <Card/>
                    </GroupCard>
                    </div>
                    <div>
                    <Category fondo="var(--Backend)">Banck End</Category>
                    <GroupCard>
                        <Card/>
                        <Card/>
                        <Card/>
                    </GroupCard>
                    </div>
                    <div>
                    <Category fondo="var(--Innovacion-Gestion)">innovaccion y gestion</Category>
                    <GroupCard>
                        <Card/>
                        <Card/>
                        <Card/>
                    </GroupCard> 
                    </div>                  
                </ContainerCard>
            </Contenido>
        </>
    )
}

export default Main