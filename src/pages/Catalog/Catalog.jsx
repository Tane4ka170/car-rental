import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../redux/selectors";

import CatalogList from "../../components/CalalogList/CatalogList";
import Forms from "../../components/Forms/Forms";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <Forms />
      {isLoading && <Loader />}
      <CatalogList />
    </div>
  );
};

export default Catalog;
