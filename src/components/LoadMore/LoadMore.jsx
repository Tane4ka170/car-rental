import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCars,
  selectCars,
  selectMorePages,
} from "../../redux/selectors";
import { getCarThunk } from "../../redux/operations";

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
    <div>
      {!hideButton && (
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMore;
