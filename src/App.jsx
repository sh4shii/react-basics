import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      {/* navbar componet */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;