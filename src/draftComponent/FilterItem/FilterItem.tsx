import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const FilterItem = () => <div className={cx('filterItem')}></div>;

export default FilterItem;
