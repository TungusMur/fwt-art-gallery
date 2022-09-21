import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const App = () => {
  return <div className={cx('app')}>Владимир муравьев</div>;
};

export default App;
