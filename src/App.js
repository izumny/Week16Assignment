import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";
import AddItem from "./Components/AddItem";
import YourCloset from "./Components/YourCloset";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      
      <CustomNavbar />

      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/YourCloset" element={<YourCloset />}/>
        <Route path="/AddItem" element={<AddItem />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
