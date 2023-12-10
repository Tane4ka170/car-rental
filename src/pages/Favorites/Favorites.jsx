import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../redux/selectors";

import FavoritesList from "../../components/FavoritesList/FavoritesList";
import Forms from "../../components/Forms/Forms";
import Loader from "../../components/Loader/Loader";

const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <Forms />
      {isLoading && <Loader />}
      <FavoritesList />
    </div>
  );
};

export default Favorites;
