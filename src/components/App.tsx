import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const App = () => {
  return <div className={cx('app')}></div>;
};

export default App;
