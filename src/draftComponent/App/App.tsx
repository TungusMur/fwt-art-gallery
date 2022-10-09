import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/redux';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { fetchData } from '../../store/redux/reducers/authorReducer';
import AuthorPage from '../AuthorPage';

const AppPage = () => {
  const dispatch = useAppDispatch();
  //   const data = useAppSelector((state) => state.author.data);

  useEffect(() => {
    dispatch(fetchData('62e148114df711d4f7f68f01'));
  }, []);

  return <></>;
};

const App = () => (
  <>
    <Provider store={store}>
      <AppPage />
    </Provider>
  </>
);

export default App;
