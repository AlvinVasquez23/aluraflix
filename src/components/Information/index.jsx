import styled from "styled-components"


const DivInfo = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    height: 16rem;

    .izquierda{
        width:60%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: right;
        
    }

    .title{
    width:28%;
    height:20%;
    font-family: var(--font-categoria);
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--Grey-light);  
    background: var(--Front-End); 
    border-radius: 12px;
    padding: 5px 0 0 25px;

    }

    .contenido{
        display:flex;
        flex-direction:column;
        padding-top: 1rem;
    }

    .contenido h1{
    font-family: var(--font-categoria);
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--Grey-light);
    padding-top: 1em;
    }

    .contenido p{
    padding-top: 1em;
    font-family: var(--font-categoria);
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.2em;
    color: var(--Grey-light);
    }

    .derecha{
        width:40%;
        height:100%;
    }

    .derecha img{
        width: 100%;
        height:100%;
        object-fit:cover;
        border-radius: 12px;

    }

    
`


const Information = () =>{
    return(
        <DivInfo>
            <section className="izquierda">
                <div className="title">
                    <h1>Front End</h1>
                </div>
                <div className="contenido">
                <h1>Challenge React</h1>     
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte<br/>en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>            
            </section>
            <section className="derecha">
                <img src="./img/player.png" alt="player" />
            </section>
        </DivInfo>
    )
}

export default Information