import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/components/home/Home";
import Hotel from "../src/components/hotel/Hotel";
import Hotels from "../src/components/single-hotel/Hotels";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/hotels" element={<Hotel />} />
            <Route exact path="/hotel/:id" element={<Hotels />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
