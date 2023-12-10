import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { getAllCarThunk } from "../redux/operations";

import { fetchCatalog } from "../service/api";

import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Favorites from "../pages/Favorites/Favorites";
import Layout from "./Layout/Layout";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarThunk());
  }, [dispatch]);

  fetchCatalog();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
