/* eslint-disable no-promise-executor-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type IInitialState = {
  loading: boolean;
  accessToken: string;
  refreshToken: string;
};

const initialState: IInitialState = {
  loading: true,
  accessToken: localStorage.getItem('') || '',
  refreshToken: localStorage.getItem('') || '',
};

const updateAccessToken = createAsyncThunk(
  'authorization/updateAccessToken',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    return 'asdqweqwe123afdf234cqx23423x4234x.x234x2erwrxr';
  }
);

const authorizationReducer = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    clearingTokens: (state) => ({
      ...state,
      accessToken: '',
      refreshToken: '',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAccessToken.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(updateAccessToken.fulfilled, (state, { payload }) => ({
        ...state,
        accessToken: payload,
        loading: false,
      }));
  },
});

const { reducer, actions } = authorizationReducer;
const { clearingTokens } = actions;

export { updateAccessToken, clearingTokens };
export default reducer;
