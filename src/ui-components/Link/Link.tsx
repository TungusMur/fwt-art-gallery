import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { ITheme } from '../../commonTypes';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ILink = {
  content: string;
  url: string;
  theme?: ITheme;
  args?: HTMLAnchorElement;
};

const Link = ({ url, content, theme = 'light', ...args }: ILink) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <a className={cx('link')} href={url} {...args}>
      {content}
    </a>
  );
};

export default Link;
