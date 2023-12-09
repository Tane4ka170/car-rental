import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCars,
  selectCars,
  selectMorePages,
} from "../../redux/selectors";
import { getCarThunk } from "../../redux/operations";
import { LoadMoreButton, LoadMoreContainer } from "./LoadMore.styled";

const LoadMore = () => {
  const dispatch = useDispatch();
  const morePages = useSelector(selectMorePages);
  const cars = useSelector(selectCars);
  const allCars = useSelector(selectAllCars);

  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    dispatch(getCarThunk(page));
    setPage(page + 1);
  };

  const hideButton = !morePages || cars.length < 1 || allCars.length < 1;

  return (
    <LoadMoreContainer>
      {!hideButton && (
        <LoadMoreButton type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreButton>
      )}
    </LoadMoreContainer>
  );
};

export default LoadMore;
