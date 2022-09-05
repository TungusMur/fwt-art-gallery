import { ReactNode } from 'react';
import classnames from 'classnames';
import './styles.scss';

interface IButton {
    children: ReactNode;
    className: string;
    theme?: 'light' | 'dark';
    isFalled?: boolean;
    isOutlined?: boolean;
    isDisabled?: boolean;
    handleClick?: () => void;
    other?: HTMLButtonElement;
}

const Button = ({ children, className, ...other }: IButton) => (
    <button
        className={classnames('btnCommon', className, other.theme || 'light', {
            isFalled: other.isFalled,
            isOutlined: other.isOutlined,
            isDisabled: other.isDisabled,
        })}
        disabled={other.isDisabled}
    >
        {children}
    </button>
);

export default Button;
