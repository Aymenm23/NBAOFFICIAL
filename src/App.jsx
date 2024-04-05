import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SamplePage from "./pages/SamplePage/SamplePage";

import IndexPage from "./pages/indexPage/index";
import ErrorPage from "./pages/errorPage/error";
import LandingPage from "./pages/LandingPage/LandingPage";
import Survey from './pages/Survey/Survey';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<IndexPage />} />
        <Route path="/questions" element={<Survey />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
