import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  selectOpenModal,
  selectSelectedCar,
} from "../../redux/selectors";
import { removeFromFavorites, setFavorites } from "../../redux/sliceFavorites";
import { setOpenModal, setSelectedCar } from "../../redux/sliceCar";
import noCar from "../../images/noCar.webp";
import LoadMore from "../LoadMore/LoadMore";
import Modal from "../Modal/Modal";

const FavoritesList = () => {
  const [like, setLike] = useState(null);
  const dispatch = useDispatch();
  const selectedCar = useSelector(selectSelectedCar);
  const isModalOpen = useSelector(selectOpenModal);
  const favorites = useSelector(selectFavorites);

  const toggleFavoritesHandler = (car, index) => {
    if (favorites.some((favoriteCar) => favoriteCar.id === car.id)) {
      dispatch(removeFromFavorites(car));
      setLike(-1);
    } else {
      dispatch(setFavorites(car));
      setLike(index);
    }
  };
  const isOpen = (car) => {
    dispatch(setSelectedCar(car));
    dispatch(setOpenModal({ isOpen: true, selectedCar: car }));
  };

  const isClosed = () => {
    dispatch(setOpenModal(false));
  };

  return (
    <div>
      {favorites.length > 0 ? (
        <>
          <ul>
            {favorites.map((car, index) => {
              const isFavorite = favorites.some(
                (favoriteCar) => favoriteCar.id === car.id
              );
              const address = car.address;
              const wordArr = address.split(" ");
              const lastWord = wordArr[wordArr.length - 1];
              const beforeLastWord = wordArr[wordArr.length - 2];

              return (
                <div key={`favorite-car-wrapper-${index}`}>
                  <div>
                    <li key={`${car.id}-${index}`}>
                      <div>
                        <img src={car.img || noCar} alt={car.make} />
                        <svg
                          $like={isFavorite || like === index}
                          onClick={() => toggleFavoritesHandler(car, index)}
                        >
                          <path
                            d="M15.63 3.4575C15.247 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1707 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.79503 3.4575L9.00003 4.2525L8.20503 3.4575C7.43126 2.68373 6.3818 2.24903 5.28753 2.24903C4.19325 2.24903 3.1438 2.68373 2.37003 3.4575C1.59626 4.23127 1.16156 5.28072 1.16156 6.375C1.16156 7.46927 1.59626 8.51873 2.37003 9.2925L3.16503 10.0875L9.00003 15.9225L14.835 10.0875L15.63 9.2925C16.0133 8.90943 16.3173 8.45461 16.5247 7.95401C16.7321 7.45342 16.8389 6.91686 16.8389 6.375C16.8389 5.83313 16.7321 5.29657 16.5247 4.79598C16.3173 4.29539 16.0133 3.84056 15.63 3.4575Z"
                            stroke="white"
                            strokeOpacity="0.8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>
                          {car.make}
                          <span>{car.model}</span>
                          {car.year}
                        </p>
                        <p>{car.rentalPrice}</p>
                      </div>
                      <div>
                        <p>{beforeLastWord}</p>
                        <p>{lastWord}</p>
                        <p>{car.rentalCompany}</p>
                        <p>{car.type}</p>
                        <p>{car.make}</p>
                        <p>{car.mileage}</p>
                        <p>{car.accessories[0]}</p>
                      </div>

                      <button onClick={() => isOpen(car)}>Learn more</button>
                    </li>
                  </div>
                </div>
              );
            })}
          </ul>

          <LoadMore>
            {isModalOpen && (
              <Modal isClosed={isClosed} selectedCar={selectedCar} />
            )}
          </LoadMore>
        </>
      ) : (
        <div>
          <p>No cars have been marked as favorites yet!</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
