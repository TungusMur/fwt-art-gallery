import classNames from 'classnames';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ILabel = {
  title: string;
  theme?: 'dark' | 'light';
  isClose?: boolean;
  handleClose?: () => void;
};

const Label = ({
  title,
  theme = 'light',
  isClose = false,
  handleClose,
}: ILabel) => (
  <div className={cx('label', `label_theme_${theme}`)}>
    <div
      className={cx(
        'label__title',
        'paragraph_medium',
        'paragraph_medium_small'
      )}
    >
      {title}
    </div>
    {isClose && <button className={cx('label__btn')} onClick={handleClose} />}
  </div>
);

export default Label;
