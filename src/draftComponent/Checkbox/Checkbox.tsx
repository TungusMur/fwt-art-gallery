import classNames from 'classnames';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ICheckbox = {
  theme?: 'light' | 'dark';
  isSelected?: boolean;
  handleSelected?: () => void;
};

const Checkbox = ({
  theme = 'light',
  isSelected = false,
  handleSelected,
}: ICheckbox) => (
  <input
    type="checkbox"
    id="checkbox"
    // checked={isSelected}
    className={cx('checkbox', `checkbox_theme_${theme}`)}
  />
);

export default Checkbox;
