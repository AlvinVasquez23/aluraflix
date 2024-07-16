import GlobalStyles from "./Styles/GlobalStyles";
import {VideoProvider } from "./Contexts/Context";
import  IndexRoutes  from "./Routes.jsx";




function App() {
    return (
    <>
      <GlobalStyles/>
      <VideoProvider>
        <IndexRoutes/>
      </VideoProvider>
    </>
  )
}

export default App
