import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";




function App() {
    return (
    <>
      <Router>   
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/nuevoVideo" element={<Modal/>}/> */}
          <Route path="*" element={<Page404 />}/>
        </Routes>
        <Footer/>
        <Modal/>
      </Router>
      
    </>
  )
}

export default App
