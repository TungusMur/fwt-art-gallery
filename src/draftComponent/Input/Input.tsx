import classNames from 'classnames';
import { ReactComponent as Error } from '../../assets/img/errorIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IError = {
  titel: string;
  placeholder: string;
  isError?: boolean;
  textError: string;
  theme?: 'light' | 'dark';
};

const Input = ({ titel, placeholder, isError = false, textError }: IError) => (
  <div className={cx('input')}>
    <div className={cx('input-title')}>Field name</div>
    <input className={cx('input__input')} placeholder={placeholder} />
    {isError && (
      <div className={cx('input-error')}>
        <Error className={cx('input-error__icon')} />
        <div className={cx('input-error__info')}>{textError}</div>
      </div>
    )}
  </div>
);

export default Input;
