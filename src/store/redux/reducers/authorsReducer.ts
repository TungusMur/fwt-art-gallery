import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICommonCard } from '../../../commonTypes';
import { getAuthorsData } from '../../api';

const initialState: { data: any[]; loading: boolean } = {
  data: [],
  loading: true,
};

const fetchDataAftors = createAsyncThunk('authors/fetchDataAftors', () => {
  return getAuthorsData().then((data) => data);
});

const authorsReducer = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAftors.fulfilled, (state, { payload }) => ({
        ...state,
        data: [...payload.data],
        loading: false,
      }))
      .addCase(fetchDataAftors.pending, (state) => ({
        ...state,
        data: [],
        loading: true,
      }));
  },
});

const { reducer } = authorsReducer;

export { fetchDataAftors };
export default reducer;
