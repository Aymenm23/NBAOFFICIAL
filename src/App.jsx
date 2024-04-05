import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import SamplePage from "./pages/SamplePage/SamplePage";
import IndexPage from "./pages/indexPage/index";
import ErrorPage from "./pages/errorPage/error";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage/>} />
      <Route path="/questions" element={<SamplePage/>} />
      <Route path="/chat" element={<SamplePage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
