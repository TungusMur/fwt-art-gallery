import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ILink = {
  content: string;
  url: string;
  theme?: 'light' | 'dark';
  args?: HTMLAnchorElement;
};

const Link = ({ url, content, theme = 'light', ...args }: ILink) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <a className={cx('link')} href={url}>
      {content}
    </a>
  );
};

export default Link;
