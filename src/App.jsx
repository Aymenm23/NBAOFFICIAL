import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import SamplePage from "./pages/SamplePage/SamplePage";

function App() {


  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<SamplePage/>} />
    </Routes>
      <div>Sample App</div>
    </BrowserRouter>
  )
}

export default App
