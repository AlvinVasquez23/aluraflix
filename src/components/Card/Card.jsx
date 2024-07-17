import styled from "styled-components";
import {FaEdit, FaTrashAlt} from "react-icons/fa"

const ContentCard = styled.div`
    display:flex;
    align-items:start;
    flex-direction:column;
   
    height:70%;
    margin-top: 2rem;

`

const ImgCard = styled.img`
    border-radius: 10px;
    border-bottom:none;
   

    
`

const FooterCard = styled.div`
    width:100%;
    display:flex;
    justify-content: space-evenly;
    padding-top:10px;
    color: white;
    gap: 5rem;
    background:black; 
    align-items:center;
    border-top: none;
    border-radius:6px; 
`

const Card = () => {
    return(
        <ContentCard>
            <ImgCard src="/img/video.png"/>
            <FooterCard>
                <div className="boton">
                    <FaEdit/> Editar
                </div>
                <div className="boton">
                    <FaTrashAlt /> Borrar  
                </div>
            </FooterCard>
        </ContentCard>
    )
}

export default Card
