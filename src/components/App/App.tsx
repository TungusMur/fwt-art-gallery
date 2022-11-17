import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Layout from '../Layout';
import HomePage from '../../pages/HomePage';
import AuthorPage from '../../pages/AuthorPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { updateAccessToken } from '../../store/redux/reducers/authorizationReducer';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => ({
    loading: state.authorizationReduce.loading,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch(updateAccessToken());
  }, []);

  return loading ? (
    <></>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artistProfile">
          <Route index element={<Navigate to="/" replace />} />
          <Route path="id=:id" element={<AuthorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
