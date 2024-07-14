import styled from "styled-components"
import GlobalStyles from "../components/GlobalStyles"
import Banner from "../components/Banner/index"
import Main from "../components/Main/index"
 


const Principal = styled.body`
    width: 100%;

`


const Home = () =>{
    return(
        <Principal>
            <GlobalStyles/>
            <Banner/>
            <Main/>
        </Principal>
    )

}

export default Home