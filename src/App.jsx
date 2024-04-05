import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import SamplePage from "./pages/SamplePage/SamplePage";
import Survey from './pages/Survey/Survey';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
