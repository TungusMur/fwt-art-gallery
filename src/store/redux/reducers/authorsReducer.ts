import { createSlice } from '@reduxjs/toolkit';
import { ICommonCard } from '../../../commonTypes';

const initialState: { data: any[]; loading: boolean } = {
  data: [],
  loading: true,
};

const authorsReducer = createSlice({
  name: 'authorsReducer',
  initialState,
  reducers: {
    getData: (state, { payload }) => ({
      ...state,
      data: [...payload.data],
      loading: false,
    }),
    loading: (state) => ({ ...state, loading: true }),
  },
});

const { actions, reducer } = authorsReducer;

export const { getData, loading } = actions;
export default reducer;
