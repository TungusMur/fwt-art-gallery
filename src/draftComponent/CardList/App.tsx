import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import CardList from '../../ui-components/CardList';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { fetchDataAftors } from '../../store/redux/reducers/authorsReducer';
import { ICommonCard } from '../../commonTypes';
import store from '../../store/redux';

const DarftCardList = () => {
  const dispatch = useAppDispatch();
  const data: ICommonCard[] = useAppSelector((state) =>
    state.authorsReducer.data.map((item) => ({
      name: item.name,
      id: item._id,
      title: item.name,
      img: process.env.REACT_APP_BASE_URL + item.mainPainting.image.src,
      yearsLife: item.yearsOfLife,
    }))
  );
  const laoding = useAppSelector((state) => state.authorsReducer.loading);

  useEffect(() => {
    dispatch(fetchDataAftors());
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
