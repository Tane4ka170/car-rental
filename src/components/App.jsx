import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Favorites from "../pages/Favorites/Favorites";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
