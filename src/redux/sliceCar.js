import { createSlice } from "@reduxjs/toolkit";
import { getAllCarThunk, getCarThunk } from "./operations";

const initialState = {
  carsInfo: [],
  id: null,
  isLoading: false,
  error: null,
  allCars: [],
  filter: { make: "", price: 0, mileageFrom: 0, mileageTo: 0 },
  morePages: true,
  isModalOpen: false,
  selectedCar: null,
};

const sliceCar = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter.make = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.filter.price = Number(action.payload);
    },
    setMileageFrom: (state, action) => {
      state.filter.mileageFrom = Number(action.payload);
    },
    setMileageTo: (state, action) => {
      state.filter.mileageTo = Number(action.payload);
    },
    setMorePages: (state, action) => {
      state.morePages = action.payload;
    },
    setOpenModal: (state, action) => {
  state.isModalOpen = action.payload;
},
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
         state.isLoading = false;
        state.error = null;
        state.carsInfo.push(...action.payload);
        if (action.payload.length === 0) {
          state.morePages = false;
        }
      })
      .addCase(getCarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllCarThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCars = action.payload;
      })
      .addCase(getAllCarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carReducer = sliceCar.reducer;
export const {
  setCars,
  setId,
  setLoading,
  setError,
  setAllCars,
  setFilter,
  setMorePages,
  setOpenModal,
  setSelectedCar,
  setPriceFilter,
  setMileageFrom,
  setMileageTo,
} = sliceCar.actions;
