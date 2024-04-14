import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Reducer';

import {titleInitialState}  from "../initialStore"
import {singleTitle}        from "../../utility/typeStore"
import {TEXT_PARAGRAPH}     from "../../utility/typeApp"

import {resetAll} from "../Actions"



const getAPIDataReducer =async (URL:string) => {
  let response = await fetch(`${URL}`)
  // response = await response.json()

  return response.json()
}

export const fetchData = createAsyncThunk('realestate/page/title', async () => {
  const response = await getAPIDataReducer("realestate/page/title"); // Your API call to fetch data
  return response; // Adjust based on your API response structure
});

const dataSlice = createSlice({
  name: 'data',
  initialState:titleInitialState,
  reducers: {
    addEditTitle: (state, action: PayloadAction<singleTitle>) => {
      // const existingKey = Object.keys(state.data).find((key)=>key===id)
      const { id,content } = action.payload;
      state.data={
        ...state.data,
        [id as string]:content
      }
    },
    removeTitle: (state, action: PayloadAction<string>) => {

      const itemIdToRemove = action.payload;
      state.data = Object.keys(state.data).reduce((new_data, key) => {
        if (key !== itemIdToRemove)
          new_data[key] = state.data[key];
        return new_data;
      }, {} as Record<string, TEXT_PARAGRAPH>);      
      // Object.keys(state.data).filter((key) => key !== action.payload);
    },
  },
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
      })
      .addCase(resetAll, () => titleInitialState);
  },

});

export const { addEditTitle,removeTitle} = dataSlice.actions;

export const selectTitle       = (state: RootState) => state.title;
export const selectTitleData  = (state: RootState) => state.title.data;
// export const selectLoading  = (state: RootState) => state.title.loading;
// export const selectError    = (state: RootState) => state.title.error;

export default dataSlice.reducer;