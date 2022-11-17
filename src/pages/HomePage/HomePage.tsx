import { useContext } from 'react';
import classNames from 'classnames/bind';
import ThemeContext from '../../utils/context/context';
import HomePageHeader from '../../components/HomePageHeader';
import CardList from '../../ui-components/CardList';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import data from './data';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
  const { accessToken } = useAppSelector((state) => state.authorizationReduce);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx('homePage')}>
      {accessToken && <HomePageHeader theme={theme} />}
      <CardList cardsData={data} theme={theme} />
    </div>
  );
};

export default HomePage;
