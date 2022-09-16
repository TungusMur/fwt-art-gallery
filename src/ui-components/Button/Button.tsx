import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IButton = {
  children: ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
  isFalled?: boolean;
  isOutlined?: boolean;
  isDisabled?: boolean;
  args?: HTMLButtonElement;
};

const Button = ({
  children,
  className,
  theme = 'light',
  isFalled = false,
  isOutlined = false,
  isDisabled = false,
  ...args
}: IButton) => (
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

export default Button;
