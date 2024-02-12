import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();

      setName(content.name);
    })();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <main className="form-signin">
          <Routes>
            <Route path="/" element={<Home name={name} />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
