import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Author from "./pages/Author";
import Books from "./pages/Books";
import Footer from "./components/footer/Footer";
import bg from "./assets/images/background/backgroundpage1.png";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen bg-black bg-opacity-70">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

