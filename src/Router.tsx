import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Screens";

const Router = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
