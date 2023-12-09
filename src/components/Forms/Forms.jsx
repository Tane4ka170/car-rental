import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setFilter,
  setMileageFrom,
  setMileageTo,
  setPriceFilter,
} from "../../redux/sliceCar";
import brands from "../../service/makes.json";
import {
  ButtonContainer,
  Container,
  Form,
  FormDiv,
  Input,
  InputDiv,
  Label,
  SearchButton,
  SelectBrand,
  SelectPrice,
} from "./Forms.styled";
import { useForm } from "react-hook-form";

const Forms = () => {
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setFilter(data.brand));
    dispatch(setPriceFilter(data.price));
    dispatch(setMileageFrom(data.from));
    dispatch(setMileageTo(data.to));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <Label htmlFor="carBrand">Car brand</Label>
          <SelectBrand {...register("brand")} defaultValue="">
            <option value="">Enter the text</option>
            {brands.map((brand, index) => (
              <option value={brand} key={index}>
                {brand}
              </option>
            ))}
          </SelectBrand>
        </FormDiv>
        <FormDiv>
          <Label htmlFor="pricePerHour">Price/ 1 hour</Label>
          <SelectPrice {...register("price")}>
            <option value="">To $</option>
            {[...Array(50)].map((_, index) => (
              <option key={index} value={(index + 1) * 10}>
                {(index + 1) * 10 + " $"}
              </option>
            ))}
          </SelectPrice>
        </FormDiv>
        <FormDiv>
          <Label>Car mileage / km</Label>
          <InputDiv>
            <Input
              {...register("from")}
              name="from"
              placeholder="From"
              type="text"
              maxLength={8}
            />
            <Input
              {...register("to")}
              name="to"
              placeholder="To"
              type="text"
              maxLength={8}
            />
          </InputDiv>
        </FormDiv>

        <ButtonContainer>
          <SearchButton type="submit">Search</SearchButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Forms;
