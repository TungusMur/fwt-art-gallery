import classNames from 'classnames/bind';
import { ReactComponent as Vk } from '../../assets/img/vk.svg';
import { ReactComponent as Instagram } from '../../assets/img/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/img/facebook.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IFooter = {
  theme?: 'light' | 'dark';
};

const Footer = ({ theme = 'light' }: IFooter) => (
  <div className={cx('footer', `footer_theme_${theme}`)}>
    <div className={cx('footer-form')}>
      <div
        className={cx(
          'footer-form__content',
          `footer-form__content_theme_${theme}`
        )}
      >
        <div className={cx('footer__title', 'paragraph__small_light')}>
          Проект реализован в рамках стажировки для Frontend-разработчиков от
          компании{' '}
          <a className={cx('footer__link')} href="https://framework.team/">
            Framework Team
          </a>
        </div>
        <div className={cx('footer__signature', 'paragraph__small_light')}>
          Муравьев Владимир, 2022
        </div>
      </div>
      <div className={cx('footer-socialNetworks')}>
        <Facebook
          className={cx(
            'footer-socialNetworks__facebook',
            `footer-socialNetworks__facebook_theme_${theme}`
          )}
        />
        <Vk
          className={cx(
            'footer-socialNetworks__vk',
            `footer-socialNetworks__vk_theme_${theme}`
          )}
        />
        <Instagram
          className={cx(
            'footer-socialNetworks__instagram',
            `footer-socialNetworks__instagram_theme_${theme}`
          )}
        />
      </div>
    </div>
  </div>
);

export default Footer;
