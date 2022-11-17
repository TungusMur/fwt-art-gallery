import { useState } from 'react';
import classNames from 'classnames/bind';
import { ITheme } from '../../commonTypes';
import Menu from '../../ui-components/Menu';
import WindowLogIn from '../WindowLogIn';
import Portal from '../../ui-components/Portal';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { clearingTokens } from '../../store/redux/reducers/authorizationReducer';
import useScreenLock from '../../hooks/useScreenLock';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IEntranceAction = { theme: ITheme; handleClick: () => void };

const EntranceAction = ({ theme, handleClick }: IEntranceAction) => {
  const { accessToken } = useAppSelector((state) => state.authorizationReduce);
  const dispatch = useAppDispatch();
  const [state, setState] = useState<{
    isActive: boolean;
    typeWindow: 'auth' | 'regist';
  }>({ isActive: false, typeWindow: 'auth' });
  const { isActive, typeWindow } = state;

  useScreenLock(isActive);

  return (
    <div className={cx('entranceAction', `entranceAction_theme_${theme}`)}>
      {accessToken ? (
        <Menu
          title="LOG OUT"
          handleClick={() => {
            dispatch(clearingTokens());
            handleClick();
          }}
        />
      ) : (
        <>
          <Menu
            title="LOG IN"
            handleClick={() => {
              setState({ isActive: !isActive, typeWindow: 'auth' });
              handleClick();
            }}
          />
          <Menu
            title="SIGN UP"
            handleClick={() => {
              setState({ isActive: !isActive, typeWindow: 'regist' });
              handleClick();
            }}
          />
          {isActive && (
            <Portal>
              <WindowLogIn
                theme={theme}
                handleClose={() =>
                  setState((state) => ({ ...state, isActive: false }))
                }
                typeWindow={typeWindow}
              />
            </Portal>
          )}
        </>
      )}
    </div>
  );
};

export default EntranceAction;
