import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/selectors";
import { setOpenModal } from "../../redux/sliceCar";
import noCar from "../../images/noCar.webp";
import sprite from "../../images/sprite.svg";
import {
  AccessoriesContainer,
  AccessoriesSpan,
  AccessoriesTitle,
  Backdrop,
  CarDescription,
  CarDetails,
  CarProperty,
  CloseButton,
  ModalContainer,
  RentalConditionItem,
  RentalConditionsDetails,
  RentalConditionsDiv,
  RentalConditionsList,
  RentalConditionsTitle,
} from "./Modal.styled";
import {
  CarDivMainInfo,
  CarImgContainer,
  CarLi,
} from "../CalalogList/CatalogList.styled";

const Modal = ({ selectedCar, index, beforeLastWord, lastWord }) => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectOpenModal);

  const closeModal = useCallback(() => {
    dispatch(setOpenModal(false));
  }, [dispatch]);

  const onEscClose = (e) => {
    if (e.key === "Escape") {
      dispatch(setOpenModal(false));
    }
  };

  document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  document.addEventListener("keydown", onEscClose);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(setOpenModal(false));
    }
  };

  const handleRentalBtnClick = () => {
    const userConfirmation = window.confirm(
      "Are you interested in contacting the company to place an order?"
    );
    if (userConfirmation) {
      window.location.href = "tel:+380730000000";
    }
  };

  const highlightRentalConditions = (text) => {
    const conditionsRegex = /(\s*\d+)/g;
    const parts = text.split(conditionsRegex);

    const highlightedElements = parts.map((part, index) =>
      conditionsRegex.test(part) ? (
        <span
          key={index}
          style={{
            color: "#3470ff",
            fontWeight: "600",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );

    return <>{highlightedElements}</>;
  };

  return (
    <Backdrop onClick={handleBackDropClick}>
      <Modal>
        {isModalOpen && selectedCar && (
          <>
            <ModalContainer>
              <CarLi key={`${selectedCar.id}-${index}`}>
                <CarImgContainer>
                  <img src={selectedCar.img || noCar} alt={selectedCar.make} />
                </CarImgContainer>
                <CarDivMainInfo>
                  <p>
                    {selectedCar.make} <span> {selectedCar.model}</span>,{" "}
                    {selectedCar.year}
                  </p>
                </CarDivMainInfo>

                <CarDetails>
                  <CarProperty>
                    {
                      selectedCar.address.split(" ")[
                        selectedCar.address.split(" ").length - 2
                      ]
                    }
                  </CarProperty>
                  <CarProperty>
                    {
                      selectedCar.address.split(" ")[
                        selectedCar.address.split(" ").length - 1
                      ]
                    }
                  </CarProperty>
                  <CarProperty>id: {selectedCar.id}</CarProperty>
                  <CarProperty>Year: {selectedCar.year}</CarProperty>
                  <CarProperty>Type: {selectedCar.type}</CarProperty>
                  <CarProperty>
                    Fuel consumption: {selectedCar.fuelConsumption}
                  </CarProperty>
                  <CarProperty>
                    Engine size: {selectedCar.engineSize}
                  </CarProperty>
                </CarDetails>

                <CarDescription>{selectedCar.description}</CarDescription>

                <AccessoriesContainer>
                  <AccessoriesTitle>
                    Accessories and functionalities:
                  </AccessoriesTitle>
                  <AccessoriesSpan>
                    {selectedCar.accessories.join(" | ")}
                  </AccessoriesSpan>
                  <AccessoriesSpan>
                    {selectedCar.functionalities.join(" | ")}
                  </AccessoriesSpan>
                </AccessoriesContainer>
                <div>
                  <RentalConditionsList>
                    <RentalConditionsTitle>
                      Rental conditions:
                    </RentalConditionsTitle>
                    <RentalConditionsDiv>
                      {selectedCar.rentalConditions
                        .split("\n")
                        .map((condition, index) => (
                          <RentalConditionItem key={index}>
                            {highlightRentalConditions(condition)}
                          </RentalConditionItem>
                        ))}
                    </RentalConditionsDiv>

                    <RentalConditionsDetails>
                      <RentalConditionItem>
                        Price:{" "}
                        <span>
                          {selectedCar.rentalPrice.replace("$", "") + "$"}
                        </span>
                      </RentalConditionItem>
                      <RentalConditionItem>
                        Mileage: <span>{selectedCar.mileage}</span>
                      </RentalConditionItem>
                    </RentalConditionsDetails>
                  </RentalConditionsList>
                </div>
                <div>
                  <button onClick={handleRentalBtnClick}>Rental car</button>
                </div>
              </CarLi>
            </ModalContainer>
          </>
        )}
        <CloseButton onClick={closeModal}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </CloseButton>
      </Modal>
    </Backdrop>
  );
};

export default Modal;
