import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectFavorites,
  selectOpenModal,
  selectSelectedCar,
} from "../../redux/selectors";
import { removeFromFavorites, setFavorites } from "../../redux/sliceFavorites";
import { setOpenModal, setSelectedCar } from "../../redux/sliceCar";

import LoadMore from "../LoadMore/LoadMore";
import Modal from "../Modal/Modal";

import { FavoritesContainer, NoFavoritesMessage } from "./FavoritesList.styled";
import {
  AddictionalInfoDiv,
  CarDiv,
  CarDivMainInfo,
  CarImgContainer,
  CarListUl,
  Img,
  LearnMore,
  Like,
  Paragraph,
  Span,
} from "../CalalogList/CatalogList.styled";
import noCar from "../../images/noCar.webp";
import sprite from "../../images/sprite.svg";

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
    <FavoritesContainer>
      {favorites.length > 0 ? (
        <>
          <CarListUl>
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
                    <CarDiv key={`${car.id}-${index}`}>
                      <CarImgContainer>
                        <Img src={car.img || noCar} alt={car.make} />
                        <Like
                          width="18"
                          height="18"
                          $like={isFavorite || like === index}
                          onClick={() => toggleFavoritesHandler(car, index)}
                        >
                          <use href={`${sprite}#icon-heart`} />
                        </Like>
                      </CarImgContainer>
                      <CarDivMainInfo>
                        <p>
                          {car.make}
                          <Span>{car.model}</Span>
                          {car.year}
                        </p>
                        <p>{car.rentalPrice}</p>
                      </CarDivMainInfo>
                      <AddictionalInfoDiv>
                        <Paragraph>{beforeLastWord}</Paragraph>
                        <Paragraph>{lastWord}</Paragraph>
                        <Paragraph>{car.rentalCompany}</Paragraph>
                        <Paragraph>{car.type}</Paragraph>
                        <Paragraph>{car.make}</Paragraph>
                        <Paragraph>{car.mileage}</Paragraph>
                        <Paragraph>{car.accessories[0]}</Paragraph>
                      </AddictionalInfoDiv>

                      <LearnMore onClick={() => isOpen(car)}>
                        Learn more
                      </LearnMore>
                    </CarDiv>
                  </div>
                </div>
              );
            })}
          </CarListUl>

          <LoadMore>
            {isModalOpen && selectedCar && (
              <Modal isClosed={isClosed} selectedCar={selectedCar} />
            )}
          </LoadMore>
        </>
      ) : (
        <NoFavoritesMessage>
          <p>No cars have been marked as favorites yet!</p>
        </NoFavoritesMessage>
      )}
    </FavoritesContainer>
  );
};

export default FavoritesList;
