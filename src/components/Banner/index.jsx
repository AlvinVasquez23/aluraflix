import styled from "styled-components"
import Information from "../Information"


const DivBanner = styled.div`
    width: 100%;
    height: 600px   ;
    background: url(/public/img/banner.png) lightgray 50% / cover no-repeat;;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
`

const Banner = () =>{
    return(
        <DivBanner>
            <Information/>
        </DivBanner>
        
    )
}

export default Banner