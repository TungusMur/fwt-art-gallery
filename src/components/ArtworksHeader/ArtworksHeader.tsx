import { useState } from 'react';
import classNames from 'classnames/bind';
import Portal from '../../ui-components/Portal';
import WindowEditPainting from '../WindowEditPainting';
import Button from '../../ui-components/Button';
import { ReactComponent as PlusIcon } from '../../assets/img/plusIcon.svg';
import styles from './styles.scss';
import useScreenLock from '../../hooks/useScreenLock';

const cx = classNames.bind(styles);

type IArtworksHeader = {
  theme?: 'light' | 'dark';
};

const ArtworksHeader = ({ theme = 'light' }: IArtworksHeader) => {
  const [windowIsActive, setWindowIsActive] = useState(false);

  useScreenLock(windowIsActive);

  return (
    <div className={cx('artworksHeader')}>
      <Button
        className={cx('btn-text', 'artworksHeader-btn')}
        theme={theme}
        isFalled
      >
        <div
          className={cx('artworksHeader-btn__content')}
          onClick={() => setWindowIsActive(true)}
        >
          <PlusIcon className={cx('artworksHeader-btn__icon')} />
          <div className={cx('artworksHeader-btn__text')}>add picture</div>
        </div>
      </Button>
      {windowIsActive && (
        <Portal>
          <WindowEditPainting
            theme={theme}
            handleClose={() => setWindowIsActive(false)}
          />
        </Portal>
      )}
    </div>
  );
};

export default ArtworksHeader;
