import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCatalog, fetchCatalog } from "../service/api";

export const getCarThunk = createAsyncThunk('cars/getCarThunk', async (page, thunkApi) => {
    try {
        const response = await fetchCatalog(page)
        return response
    } catch (error) {
       return thunkApi.rejectWithValue(error.message) 
    }
})

export const getAllCarThunk = createAsyncThunk('cars/getAllCarsThunk', async (_, thunkApi) => {
    try {
        const response = await fetchAllCatalog()
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(error.message) 
    }
})