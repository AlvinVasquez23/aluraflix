import styled from "styled-components"
import GlobalStyles from "../Styles/GlobalStyles"

const NoFound = styled.body`
    background: black;
   
    width:100%;
    height: 100vh;

`

const Page404 = ()=>{
    return(
        <NoFound> 
            <GlobalStyles/>
        </NoFound>     
    )
}

export default Page404