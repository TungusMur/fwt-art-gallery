import classNames from 'classnames/bind';
import { useState } from 'react';
import ThemeContext from '../../utils/context/context';
import Footer from '../Footer';
import Header from '../Header';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ILayout = { children: React.ReactNode };

const Layout = ({ children }: ILayout) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: () => {
          setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
        },
      }}
    >
      <div className={cx('layout', `layout_theme_${theme}`)}>
        <Header />
        {children}
        <Footer theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
