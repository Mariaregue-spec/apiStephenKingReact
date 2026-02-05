import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Author from "./pages/Author";
import Books from "./pages/Books";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/images/background/backgroundpage1.png')" }}
    >
      {/* Overlay oscuro para resaltar el contenido */}
      <div className="min-h-screen bg-black bg-opacity-70">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

