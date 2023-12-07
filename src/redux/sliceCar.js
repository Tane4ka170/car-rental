import { createSlice } from "@reduxjs/toolkit"
import { getAllCarThunk, getCarThunk } from "./operations"

const initialState = {
    carsData: [],
  id: null,
  isLoading: false,
  error: null,
  allCars: [],
  filter: { make: "", price: 0, mileageFrom: 0, mileageTo: 0 },
  hasMorePages: true,
  isModalOpen: false,
  selectedCar: null,
}

const sliceCar = createSlice({
    name: 'cars',
    initialState,
 reducers: {
    setCars: (state, action) => {
      state.carsData = action.payload;
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
    setHasMorePages: (state, action) => {
      state.hasMorePages = action.payload;
    },
    setModalOpen: (state, action) => {
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
        state.carsData = action.payload;
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
})

export const carReducer = sliceCar.reducer;
export const {
  setCars,
  setId,
  setLoading,
  setError,
  setAllCars,
  setFilter,
  setHasMorePages,
  setModalOpen,
  setSelectedCar,
} = sliceCar.actions;