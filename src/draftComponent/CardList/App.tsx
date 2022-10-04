import { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import CardList from '../../ui-components/CardList';
import { IStore } from '../../store/redux/store';
import { getAuthorsData } from '../../store/api';
import { getData, loading } from '../../store/redux/reducers/authorsReducer';
import { ICommonCard } from '../../commonTypes';
import store from '../../store/redux';

const DarftCardList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: IStore) =>
    state.authorsReducer.data.map((item) => ({
      id: item._id,
      title: item.name,
      img: process.env.REACT_APP_BASE_URL + item.mainPainting.image.src,
      yearsLife: item.yearsOfLife,
    }))
  ) as ICommonCard[];
  const laoding = useSelector((state: IStore) => state.authorsReducer.loading);

  useEffect(() => {
    dispatch(loading());
    getAuthorsData().then((data) => dispatch(getData(data)));
  }, []);

  return <>{laoding ? <h1>Загрузка</h1> : <CardList cardsData={data} />}</>;
};

const App = () => {
  return (
    <Provider store={store}>
      <DarftCardList />
    </Provider>
  );
};

export default App;
