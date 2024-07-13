import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    
    :root{
    
    --Dark-Grey: #262626;
    --Blue: #2271D1;
    --Grey-light: #F5F5F5;
    --Front-End: #6BD1FF;
    --Backend: #00C86F;
    --Innovacion-Gestion: #FFBA05;
    --font-button: "Source Sans 3", sans-serif;
    --font-categoria: "Roboto", sans-serif;
   
  }
  
  * {
  
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  
  }
`

export default GlobalStyles