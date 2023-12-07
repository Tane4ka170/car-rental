import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Favorites from "../pages/Favorites/Favorites";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
