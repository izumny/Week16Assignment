import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Pages/Home";
import AddItem from "./Pages/AddItem";
import YourCloset from "./Pages/YourCloset";
import WishList from "./Pages/Wishlist";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      
      <CustomNavbar />

      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/YourCloset" element={<YourCloset />}/>
        <Route path="/AddItem" element={<AddItem />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
