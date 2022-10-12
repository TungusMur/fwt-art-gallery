import { useContext } from 'react';
import classNames from 'classnames/bind';
import ThemeContext from '../../utils/context/context';
import CardList from '../../ui-components/CardList';
import data from './data';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx('homePage')}>
      <CardList cardsData={data} theme={theme} />
    </div>
  );
};

export default HomePage;
