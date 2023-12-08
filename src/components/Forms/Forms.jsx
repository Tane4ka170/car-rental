import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setFilter,
  setMileageFrom,
  setMileageTo,
  setPriceFilter,
} from "../../redux/sliceCar";
import brands from "../../service/makes.json";
import { FormDiv, Label, SelectBrand } from "./Forms.styled";

const Forms = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const dispatch = useDispatch();

  const handleCarChange = (event) => {
    setBrand(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleFromChange = (event) => {
    setFromValue(event.target.value);
  };
  const handleToChange = (event) => {
    setToValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilter(event.target.elements.brand.value));
    dispatch(setPriceFilter(event.target.elements.price.value));
    dispatch(setMileageFrom(event.target.elements.from.value));
    dispatch(setMileageTo(event.target.elements.to.value));
  };

  const makePriceOptions = () => {
    const optionsArray = [];
    for (let i = 10; i < 500; i += 10) {
      optionsArray.push(i);
    }
    return optionsArray;
  };
  const optionsPrice = makePriceOptions();
  return (
    <form onSubmit={handleSubmit}>
      <FormDiv>
        <Label htmlFor="carBrand">Car brand</Label>
        <SelectBrand name="brand" onChange={handleCarChange}>
          <option value={brand}>Enter the text</option>
          {brands.map((brand, index) => (
            <option value={brand} key={index}>
              {brand}
            </option>
          ))}
        </SelectBrand>

        <div>
          <Label htmlFor="pricePerHour">Price/ 1 hour</Label>
          <select name="price" onChange={handlePriceChange}>
            <option>To $</option>
            {optionsPrice.map((price, index) => (
              <option key={index} value={price}>
                {price + " $"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label>Car mileage / km</Label>
          <div>
            <input
              name="from"
              placeholder="From"
              type="text"
              onChange={handleFromChange}
              value={fromValue}
              maxLength={8}
            />
            <input
              name="to"
              placeholder="To"
              type="text"
              onChange={handleToChange}
              value={toValue}
              maxLength={8}
            />
          </div>
        </div>

        <div>
          <button type="submit">Search</button>
        </div>
      </FormDiv>
    </form>
  );
};

export default Forms;
