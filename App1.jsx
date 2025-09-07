import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";   // ✅ import Router components
import Navbar from "./Navbar";
import App from "./App";
import Update from "./Update";
import Select from "./Select";
import Delete from "./Delete";
import Welcome from "./Welcome";

const App1 = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="*" element={<Welcome/>} />
        <Route path="/insert" element={<App />} />
        <Route path="/update" element={<Update />} />
        <Route path="/select" element={<Select />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App1;
