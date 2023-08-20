import React, { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [allInputValue, setAllInputValue] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home setAllInputValue={setAllInputValue} />}
          />
          <Route
            path="/result"
            element={<Result allInputValue={allInputValue} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
