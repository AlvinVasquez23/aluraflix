import GlobalStyles from "../GlobalStyles"
import styled from "styled-components"
import Button from "../Boton"


const NavBar = styled.nav`
    background: var(--Dark-Grey);
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    border-bottom: 4px solid var(--Blue);
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);

    .btn-container{
        width: 30%;
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 0.8em;
    };
  
`

const Nav = () =>{
    return(
        <NavBar>
            <GlobalStyles/>
            <img src="img/logo.png" alt="logo" />
            <div className=" btn-container">
                <Button className="black" nombre = "home"/>
                <Button className="white"nombre = "nuevo video"/>     
            </div> 
                  
        </NavBar>
    )
    
};

 export default Nav
