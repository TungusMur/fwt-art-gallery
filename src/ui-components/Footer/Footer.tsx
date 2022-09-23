import classNames from 'classnames/bind';
import { ReactComponent as Vk } from '../../assets/img/vk.svg';
import { ReactComponent as Instagram } from '../../assets/img/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/img/facebook.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const Footer = () => (
  <div className={cx('footer')}>
    <div className={cx('footer-form')}>
      <div className={cx('footer-form__content')}>
        <div
          className={cx(
            'footer__title',
            'paragraph_light',
            'paragraph_light_small'
          )}
        >
          Проект реализован в рамках стажировки для Frontend-разработчиков от
          компании{' '}
          <a className={cx('footer__link')} href="https://framework.team/">
            Framework Team
          </a>
        </div>
        <div
          className={cx(
            'footer__signature',
            'paragraph_light',
            'paragraph_light_small'
          )}
        >
          Муравьев Владимир, 2022
        </div>
      </div>
      <div className={cx('footer-socialNetworks')}>
        <Facebook />
        <Vk />
        <Instagram />
      </div>
    </div>
  </div>
);

export default Footer;
