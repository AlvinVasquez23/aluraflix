import styled from "styled-components"
import GlobalStyles from "../Styles/GlobalStyles"
import Banner from "../components/Banner/index"
import Main from "../components/Main/index"
import NavBar from "../components/NavBar/index"
import Footer from "../components/Footer/index"
 


const Principal = styled.div`
    width: 100%;

`


const Home = () =>{
    return(
        <Principal>
            <GlobalStyles/>
            <NavBar/>
            <Banner/>
            <Main/>
            <Footer/>
        </Principal>
    )

}

export default Home