import { BrowserRouter, Routes, Route } from "react-router-dom"
import Modal from "./pages/Modal"
import Page404 from "./pages/Page404"
import Home from "./pages/Home"
import NuevoVideo from "./pages/NuevoVideo"


const IndexRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="EditarVideo" element={<NuevoVideo/>} />
                <Route path="*" element={<Page404/>} />
                
            </Routes>      
        </BrowserRouter>
    )
}

export default IndexRoutes