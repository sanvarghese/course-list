import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Footer from "../Componets/Footer/Footer";
import Aboutus from "./Aboutus";
import Course from "./Course";

const index = () => {
  return (
    //  <Main/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Banner" element={<Footer />} />
        <Route path="/Course-page" element={<Course />} />
        <Route path="/About-us-page" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
