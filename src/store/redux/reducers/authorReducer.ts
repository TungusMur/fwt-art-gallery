import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  PayloadActionCreator,
} from '@reduxjs/toolkit';
import fetchAuthorData from '../../api/fetchAuthorData';

type IPaintings = {
  _id: string;
  image: string;
  name: string;
  yearOfCreation: string;
};

type IGenres = { _id: string; name: string };

type IData = {
  _id: number | string;
  name: string;
  paintings: IPaintings[];
  yearsOfLife: string;
  description: string;
  avatar: string;
  genres: IGenres[];
};

type IInitialState = {
  loading: boolean;
  data: IData;
};

const initialState: IInitialState = {
  loading: true,
  data: {
    _id: '',
    name: '',
    paintings: [],
    yearsOfLife: '',
    description: '',
    avatar: '',
    genres: [],
  },
};

const fetchData = createAsyncThunk('author/fetchData', (id: string) =>
  fetchAuthorData(id).then(
    (data) =>
      ({
        _id: data.data._id,
        name: data.data.name,
        paintings: data.data.paintings.map((item: any) => ({
          _id: item._id,
          image: item.image.src,
          name: item.name,
          yearOfCreation: item.yearOfCreation,
        })),
        yearsOfLife: data.data.yearsOfLife,
        description: data.data.description,
        avatar: process.env.REACT_APP_BASE_URL + data.data.avatar.src,
        genres: data.data.genres,
      } as IData)
  )
);

const authorReducer = createSlice({
  name: 'author',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: { ...payload },
      }))
      .addCase(fetchData.pending, (state) => ({
        ...state,
        loading: true,
      }));
  },
});

const { reducer } = authorReducer;

export { fetchData };
export default reducer;
