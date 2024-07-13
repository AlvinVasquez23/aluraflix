import styled from "styled-components"
import GlobalStyles from "../components/GlobalStyles"
import Nav from "../components/NavBar/index"
import Banner from "../components/Banner/index"
import Main from "../components/Main/index"
import Footer from "../components/Footer/index"
 


const Principal = styled.body`
    width: 100%;

`


const Home = () =>{
    return(
        <Principal>
            <GlobalStyles/>
            <Nav/>
            <Banner/>
            <Main/>
            <Footer/>
        </Principal>
    )

}

export default Home