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

// const initialState: IInitialState = {
//   loading: true,
//   data: {
//     _id: '',
//     name: '',
//     paintings: [],
//     yearsOfLife: '',
//     description: '',
//     avatar: '',
//     genres: [],
//   },
// };

const initialState: IInitialState = {
  loading: true,
  data: {
    _id: '62e148114df711d4f7f68f01',
    name: 'Vincent van Gogh',
    paintings: [],
    yearsOfLife: '30 March 1853 – 29 July 1890',
    description:
      'Was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.',
    avatar: '',
    genres: [
      {
        _id: '62e148104df711d4f7f68eec',
        name: 'Post-Impressionism',
      },
    ],
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
      }))
      .addCase(fetchData.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

const { reducer } = authorReducer;

export { fetchData };
export default reducer;
