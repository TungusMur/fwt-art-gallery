import { configureStore } from '@reduxjs/toolkit';
import ReduxLogger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

export const store = configureStore({
  reducer: { ...rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
      logger: true,
    }).concat(ReduxLogger),
  preloadedState: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
