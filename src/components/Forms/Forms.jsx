import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
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
} from "./Forms.styled";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: "14px 16px 14px 18px ",
    boxShadow: "none",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#121417",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#171612",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#ffffff",
    color: "rgba(18, 20, 23, 0.20)",
  }),
};

const Forms = () => {
  const { control, register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setFilter(data.brand.value));
    dispatch(setPriceFilter(data.price?.value));
    dispatch(setMileageFrom(data.from));
    dispatch(setMileageTo(data.to));
    reset();
  };

  const makePriceOptions = () => {
    const optionsArray = [];
    for (let i = 10; i < 500; i += 10) {
      optionsArray.push({ value: i, label: `${i} $` });
    }
    return optionsArray;
  };

  const optionsPrice = makePriceOptions();

  const brandOptions = brands.map((brand, index) => ({
    value: brand,
    label: brand,
  }));

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <Label htmlFor="carBrand">Car brand</Label>
          <Controller
            name="brand"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={brandOptions}
                placeholder="Enter the text"
                styles={customStyles}
              />
            )}
          />
        </FormDiv>
        <FormDiv>
          <Label htmlFor="pricePerHour">Price/ 1 hour</Label>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={optionsPrice}
                placeholder="To $"
                styles={customStyles}
              />
            )}
          />
        </FormDiv>
        <FormDiv>
          <Label>Car mileage / km</Label>
          <InputDiv>
            <Input
              {...register("from")}
              placeholder="From"
              type="text"
              maxLength={8}
            />
            <Input
              {...register("to")}
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
