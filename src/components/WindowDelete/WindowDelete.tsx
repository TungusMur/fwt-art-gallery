import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import { ReactComponent as DeleteIcon } from '../../assets/img/deleteIcon.svg';
import { ReactComponent as CrossIcon } from '../../assets/img/crossIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IWindowDelete = {
  theme?: 'light' | 'dark';
};

const WindowDelete = ({ theme = 'light' }: IWindowDelete) => (
  <div className={cx('windowDelete', `windowDelete_theme_${theme}`)}>
    <div
      className={cx(
        'windowDelete__content',
        `windowDelete__content_theme_${theme}`
      )}
    >
      <button className={cx('windowDelete__btnClose')}>
        <CrossIcon className={cx('windowDelete__iconClose')} />
      </button>
      <DeleteIcon className={cx('windowDelete__icon')} />
      <div
        className={cx('windowDelete-info', `windowDelete-info_theme_${theme}`)}
      >
        <div className={cx('windowDelete-info__title')}>
          Do you want to delete this artist profile?
        </div>
        <div className={cx('windowDelete-info__description')}>
          You will not be able to recover this profile afterwards.
        </div>
      </div>
      <div className={cx('windowDelete-action')}>
        <Button
          className={cx('windowDelete-action__btnDelete')}
          theme={theme}
          isFalled
        >
          <div>Delete</div>
        </Button>
        <Button
          className={cx('btn-text', 'windowDelete-action__btnText')}
          theme={theme}
          isFalled
        >
          <div>Cancel</div>
        </Button>
      </div>
    </div>
  </div>
);

export default WindowDelete;
