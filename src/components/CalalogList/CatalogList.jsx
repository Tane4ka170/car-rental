import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCars,
  selectCars,
  selectFavorites,
  selectOpenModal,
  selectSelectedCar,
  selectedMileageFrom,
  selectedMileageTo,
  selectedPrice,
  selectsFilteredMake,
} from "../../redux/selectors";
import { removeFromFavorites, setFavorites } from "../../redux/sliceFavorites";
import { setOpenModal, setSelectedCar } from "../../redux/sliceCar";

import noCar from "../../images/noCar.webp";
import LoadMore from "../LoadMore/LoadMore";
import { toast } from "react-toastify";
import Modal from "../Modal/Modal";
import {
  AddictionalInfoDiv,
  CarDiv,
  CarDivMainInfo,
  CarImgContainer,
  CarLi,
  CarListContainer,
  CarListUl,
  Img,
  LearnMore,
  Like,
  Paragraph,
  Span,
} from "./CatalogList.styled";

const CatalogList = () => {
  const [like, setLike] = useState(null);
  const dispatch = useDispatch();

  const carsInfo = useSelector(selectCars);
  const selectedCar = useSelector(selectSelectedCar);
  const isModalOpen = useSelector(selectOpenModal);
  const favorites = useSelector(selectFavorites);
  const allCars = useSelector(selectAllCars);
  const carsPrice = useSelector(selectedPrice);
  const mileageFrom = useSelector(selectedMileageFrom);
  const mileageTo = useSelector(selectedMileageTo);
  const filterValue = useSelector(selectsFilteredMake);

  const toggleFavoritesHandler = (car, index) => {
    if (favorites.some((favoriteCar) => favoriteCar.id === car.id)) {
      dispatch(removeFromFavorites(car));
      setLike(-1);
    } else {
      dispatch(setFavorites(car));
      setLike(index);
    }
  };

  const getFilteredCars = () => {
    let newFilteredCars = [...allCars];
    let isFilterApplied = false;

    if (!!filterValue) {
      newFilteredCars = newFilteredCars.filter((car) =>
        car.make.toLowerCase().includes(filterValue.toLowerCase().trim())
      );
      isFilterApplied = true;
    }
    if (!!carsPrice) {
      newFilteredCars = newFilteredCars.filter(
        (car) => parseFloat(car.rentalPrice.replace("$", "")) <= carsPrice
      );
      isFilterApplied = true;
    }
    if (!!mileageFrom) {
      newFilteredCars = newFilteredCars.filter(
        (car) =>
          Number(car.mileage) >= mileageFrom && Number(car.mileage) <= mileageTo
      );
      isFilterApplied = true;
    }

    if (isFilterApplied && newFilteredCars.length === 0) {
      toast.warning("No outcome");
    }

    return newFilteredCars;
  };

  const filteredCarsMap = getFilteredCars();

  const isOpen = (car) => {
    dispatch(setSelectedCar(car));
    dispatch(setOpenModal({ isOpen: true, selectedCar: car }));
  };

  const isClosed = () => {
    dispatch(setOpenModal(false));
  };

  return (
    <CarListContainer>
      <CarListUl>
        {filterValue || carsPrice || mileageFrom || mileageTo
          ? filteredCarsMap.map((car, index) => {
              const isFavorite = favorites.some(
                (favoriteCar) => favoriteCar.id === car.id
              );
              const address = car.address;
              const wordArr = address.split(" ");
              const lastWord = wordArr[wordArr.length - 1];
              const beforeLastWord = wordArr[wordArr.length - 2];

              return (
                <div key={`filtered-car-wrapper-${index}`}>
                  <CarDiv key={`${car.id}-${index}`}>
                    <CarLi key={`${car.id}-${index}`}>
                      <CarImgContainer>
                        <Img src={car.img || noCar} alt={car.make} />

                        <Like
                          $like={isFavorite || like === index}
                          onClick={() => toggleFavoritesHandler(car, index)}
                        >
                          <path
                            stroke="white"
                            strokeOpacity="0.8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"
                          />
                        </Like>
                      </CarImgContainer>
                      <CarDivMainInfo>
                        <p>
                          {car.make} <Span>{car.model}</Span>, {car.year}
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
                    </CarLi>
                  </CarDiv>
                </div>
              );
            })
          : carsInfo.map((car, index) => {
              const address = car.address;
              const wordArr = address.split(" ");
              const lastWord = wordArr[wordArr.length - 1];
              const beforeLastWord = wordArr[wordArr.length - 2];
              const isFavorite = favorites.some(
                (favCar) => favCar.id === car.id
              );
              return (
                <CarDiv key={`${car.id}-${index}`}>
                  <CarLi key={`${car.id}-${index}`}>
                    <CarImgContainer>
                      <Img src={car.img || noCar} alt={car.make} />

                      <Like
                        $like={isFavorite || like === index}
                        onClick={() => toggleFavoritesHandler(car, index)}
                      >
                        <path
                          stroke="white"
                          strokeOpacity="0.8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"
                        />
                      </Like>
                    </CarImgContainer>
                    <CarDivMainInfo>
                      <p>
                        {car.make} <Span>{car.model}</Span>, {car.year}
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
                  </CarLi>
                </CarDiv>
              );
            })}
      </CarListUl>
      <LoadMore />
      {isModalOpen && <Modal isClosed={isClosed} selectedCar={selectedCar} />}
    </CarListContainer>
  );
};

export default CatalogList;
