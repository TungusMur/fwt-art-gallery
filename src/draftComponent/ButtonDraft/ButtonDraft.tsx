import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IButtonDraft = {
  children: ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
  isFalled?: boolean;
  isOutlined?: boolean;
  isDisabled?: boolean;
  args?: HTMLButtonElement;
};

const ButtonDraft = ({
  children,
  className,
  theme = 'light',
  isFalled = false,
  isOutlined = false,
  isDisabled = false,
  ...args
}: IButtonDraft) => (
  <button
    className={cx('btn', className, `btn_theme_${theme}`, {
      btn_falled: isFalled,
      btn_outlined: isOutlined,
      btn_disabled: isDisabled,
    })}
    disabled={isDisabled}
    {...args}
  >
    {children}
  </button>
);

export default ButtonDraft;
