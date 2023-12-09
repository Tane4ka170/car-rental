import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Favorites from "../pages/Favorites/Favorites";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { getAllCarThunk, getCarThunk } from "../redux/operations";
import { fetchCatalog } from "../service/api";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarThunk());
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
    </Routes>
  );
};