import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ILoader = { theme?: 'light' | 'dark' };

const Loader = ({ theme = 'light' }: ILoader) => (
  <div className={cx('loader', `loader_theme_${theme}`)}>
    <svg className={cx('loader__ellipse', 'loader__ellipse_number1')}>
      <circle r="25" cx="50" cy="50" />
    </svg>
    <svg className={cx('loader__ellipse', 'loader__ellipse_number2')}>
      <circle r="25" cx="50" cy="50" />
    </svg>
    <svg className={cx('loader__ellipse', 'loader__ellipse_number3')}>
      <circle r="25" cx="50" cy="50" />
    </svg>
    <svg className={cx('loader__ellipse', 'loader__ellipse_number4')}>
      <circle r="25" cx="50" cy="50" />
    </svg>
  </div>
);

export default Loader;
