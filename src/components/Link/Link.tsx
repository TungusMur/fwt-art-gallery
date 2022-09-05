import { useEffect } from 'react';
import styles from './styles.module.scss';

type ILink = {
    content: string;
    url: string;
    theme?: 'light' | 'dark';
    other?: HTMLAnchorElement;
};

const Link = ({ url, content, ...other }: ILink) => {
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            other.theme || 'light'
        );
    }, [other.theme]);

    return (
        <a className={styles.link} href={url}>
            {content}
        </a>
    );
};

export default Link;
