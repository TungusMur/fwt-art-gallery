import classNames from 'classnames/bind';
import { useState } from 'react';
import CardList from '../../ui-components/CardList';
import Footer from '../../ui-components/Footer';
import Header from '../../ui-components/Header';
import data from './data';
import ThemeContext from '../../Context/Context';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: () => {
          setTheme((state) => (state === 'dark' ? 'light' : 'dark'));
        },
      }}
    >
      <div className={cx('homePage', `homePage_theme_${theme}`)}>
        <Header />
        <div className={cx('homePage-form')}>
          <CardList cardsData={data} theme={theme} />
        </div>
        <Footer theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
