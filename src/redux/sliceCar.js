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
    setCars: (state, action) => {
      state.carsInfo = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setAllCars: (state, action) => {
      state.allCars = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
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
        state.carsInfo = action.payload;
        state.morePages = action.payload.length > 0;
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
  setmorePages,
  setOpenModal,
  setSelectedCar,
} = sliceCar.actions;
