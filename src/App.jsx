import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import SamplePage from "./pages/SamplePage/SamplePage";
import IndexPage from "./pages/indexPage/index";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage/>} />
      <Route path="/questions" element={<SamplePage/>} />
      <Route path="/chat" element={<SamplePage/>} />
    </Routes>
      <div>Sample App</div>
    </BrowserRouter>
  )
}

export default App
