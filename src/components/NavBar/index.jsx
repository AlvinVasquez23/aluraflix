import GlobalStyles from "../GlobalStyles"
import styled from "styled-components"
import Button from "../Boton"
import { Link, useLocation } from "react-router-dom"


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

    const location = useLocation();

    return(
        <NavBar>
            <GlobalStyles/>
            <Link to={"/Page404"}><img src="img/logo.png" alt="logo" /></Link>
            <div className=" btn-container">
                <Link to={"/"}><Button  nombre = "home" activo={location.pathname === '/'}/></Link>
                <Link to={"/Modal"}><Button nombre = "nuevo video" activo={location.pathname === '/Modal'} /></Link>
                     
            </div> 
                  
        </NavBar>
    )
    
};

 export default Nav
