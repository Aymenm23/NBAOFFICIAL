import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import SamplePage from "./pages/SamplePage/SamplePage";
import IndexPage from "./pages/indexPage/index";

function App() {


  return (
    <BrowserRouter>
<<<<<<< HEAD
      <IndexPage/>
=======
    
    <Routes>
      <Route path="/" element={<SamplePage/>} />
    </Routes>
>>>>>>> main
      <div>Sample App</div>
    </BrowserRouter>
  )
}

export default App
