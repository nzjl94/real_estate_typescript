import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './Reducer';

import {titleInitialState} from "./initialStore"





const getAPIDataReducer =async (URL:string) => {
  let response = await fetch(`${URL}`)
  // response = await response.json()

  return response.json()
}

export const fetchData = createAsyncThunk('realestate/page/title', async () => {
  const response = await getAPIDataReducer("realestate/page/title"); // Your API call to fetch data
  // console.log(response.about_client)
  return response; // Adjust based on your API response structure
});

const dataSlice = createSlice({
  name: 'data',
  initialState:titleInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {

        console.log(action.payload)
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const selectData = (state: RootState) => state.title.data;
export const selectLoading = (state: RootState) => state.title.loading;
export const selectError = (state: RootState) => state.title.error;

export default dataSlice.reducer;