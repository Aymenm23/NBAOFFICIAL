import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SamplePage from "./pages/SamplePage/SamplePage";
import IndexPage from "./pages/IndexPage/index";
import ErrorPage from "./pages/ErrorPage/error";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/questions" element={<SamplePage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
