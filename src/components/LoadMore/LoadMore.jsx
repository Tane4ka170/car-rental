import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCars } from "../../redux/selectors";
import { getCarThunk } from "../../redux/operations";

import { LoadMoreButton, LoadMoreContainer } from "./LoadMore.styled";

const LoadMore = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCarThunk(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <LoadMoreContainer>
      {cars.length !== page * 12 ? (
        ""
      ) : (
        <LoadMoreButton type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreButton>
      )}
    </LoadMoreContainer>
  );
};

export default LoadMore;
