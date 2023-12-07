import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/selectors";
import { setOpenModal } from "../../redux/sliceCar";
import noCar from "../../images/noCar.webp";
import sprite from "../../images/sprite.svg";

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
    <div onClick={handleBackDropClick}>
      <div>
        {isModalOpen && selectedCar && (
          <>
            <div>
              <li key={`${selectedCar.id}-${index}`}>
                <div>
                  <img src={selectedCar.img || noCar} alt={selectedCar.make} />
                </div>
                <div>
                  <p>
                    {selectedCar.make} <span> {selectedCar.model}</span>,{" "}
                    {selectedCar.year}
                  </p>
                </div>

                <div>
                  <p>
                    {
                      selectedCar.address.split(" ")[
                        selectedCar.address.split(" ").length - 2
                      ]
                    }
                  </p>
                  <p>
                    {
                      selectedCar.address.split(" ")[
                        selectedCar.address.split(" ").length - 1
                      ]
                    }
                  </p>
                  <p>id: {selectedCar.id}</p>
                  <p>Year: {selectedCar.year}</p>
                  <p>Type: {selectedCar.type}</p>
                  <p>Fuel consumption: {selectedCar.fuelConsumption}</p>
                  <p>Engine size: {selectedCar.engineSize}</p>
                </div>

                <p>{selectedCar.description}</p>

                <div>
                  <p>Accessories and functionalities:</p>
                  <span>{selectedCar.accessories.join(" | ")}</span>
                  <span>{selectedCar.functionalities.join(" | ")}</span>
                </div>
                <div>
                  <ul>
                    <p>Rental conditions:</p>
                    <div>
                      {selectedCar.rentalConditions
                        .split("\n")
                        .map((condition, index) => (
                          <li key={index}>
                            {highlightRentalConditions(condition)}
                          </li>
                        ))}
                    </div>

                    <div>
                      <li>
                        Price:{" "}
                        <span>
                          {selectedCar.rentalPrice.replace("$", "") + "$"}
                        </span>
                      </li>
                      <li>
                        Mileage: <span>{selectedCar.mileage}</span>
                      </li>
                    </div>
                  </ul>
                </div>
                <div>
                  <button onClick={handleRentalBtnClick}>Rental car</button>
                </div>
              </li>
            </div>
          </>
        )}
        <button onClick={closeModal}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
