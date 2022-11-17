import classNames from 'classnames/bind';
import { ReactComponent as ErrorIcon } from '../../assets/img/errorIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IToast = {
  title: string;
  theme?: 'light' | 'dark';
};

const Toast = ({ title, theme = 'light' }: IToast) => (
  <div className={cx('toast', `toast_theme_${theme}`)}>
    <div className={cx('toast-form')}>
      <ErrorIcon className={cx('toast-form__icon')} />
      <div
        className={cx(
          'toast-form__title',
          'paragraph_medium',
          'paragraph_medium_base'
        )}
      >
        Error!
      </div>
    </div>
    <div
      className={cx('toast__title', 'paragraph_light', 'paragraph_light_small')}
    >
      {title}
    </div>
    <button className={cx('toast__btn')} onClick={() => {}} />
  </div>
);

export default Toast;
