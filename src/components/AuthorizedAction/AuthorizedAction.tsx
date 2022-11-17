import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import { ReactComponent as BagIcon } from '../../assets/img/bagIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/img/editIcon.svg';
import Portal from '../../ui-components/Portal';
import WindowEditProfile from '../WindowEditProfile/WindowEditProfile';
import useScreenLock from '../../hooks/useScreenLock';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IAuthorizedAction = { theme?: 'light' | 'dark' };

const AuthorizedAction = ({ theme = 'light' }: IAuthorizedAction) => {
  const [editIsActive, setEditIsActive] = useState(false);
  const [bagIsActive, setBagIsActive] = useState(false);

  useScreenLock(editIsActive || bagIsActive);

  return (
    <div className={cx('authorizedAction')}>
      <Button
        className={cx('btn-icon', 'authorizedAction-btnEdit')}
        isFalled
        theme={theme}
      >
        <div
          className={cx('authorizedAction-btnEdit__content')}
          onClick={() => {
            setEditIsActive(true);
            setBagIsActive(false);
          }}
        >
          <EditIcon className={cx('authorizedAction-btnEdit__icon')} />
        </div>
      </Button>
      <Button
        className={cx('btn-icon', 'authorizedAction-btnBag')}
        isFalled
        theme={theme}
      >
        <div
          className={cx('authorizedAction-btnBag__content')}
          onClick={() => {
            setEditIsActive(false);
            setBagIsActive(true);
          }}
        >
          <BagIcon className={cx('authorizedAction-btnBag__icon')} />
        </div>
      </Button>
      {editIsActive && (
        <Portal id="window">
          <WindowEditProfile
            theme={theme}
            handleClose={() => setEditIsActive(false)}
          />
        </Portal>
      )}
      {/* {bagIsActive && <Portal otherId="bag"></Portal>} */}
    </div>
  );
};

export default AuthorizedAction;
