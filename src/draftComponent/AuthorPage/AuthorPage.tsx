import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import Label from '../Label';
import CardList from '../../ui-components/CardList';
import data from './data';
import { ReactComponent as VectorIcon } from '../../assets/img/vectorIcon.svg';
import { ReactComponent as BackIcon } from '../../assets/img/backIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IAuthorPage = {
  img: string;
  yearsLife: string;
  fullName: string;
  placeBirth: string;
  description: string;
  theme?: 'light' | 'dark';
};

const AuthorPage = ({
  img,
  theme = 'light',
  yearsLife,
  fullName,
  placeBirth,
  description,
}: IAuthorPage) => {
  const labelData = ['Romanticism', 'Art', 'Nature', 'Bataille', 'Realistic'];
  const [stateReadMore, setStateReadMore] = useState(false);
  // const biographyRef = useRef<HTMLDivElement>(null);
  // const portraitRef = useRef<HTMLDivElement>(null);
  // const [heightContent, setHeightContent] = useState(0);

  // useEffect(() => {
  //   console.log(description);
  //   window.addEventListener('resize', () => {
  //     console.log(portraitRef.current?.clientHeight);
  //   });
  // }, []);

  return (
    <div className={cx('authorPage', `authorPage_theme_${theme}`)}>
      <div className={cx('authorPage__content')}>
        <div className={cx('authorPage-header')}>
          <Button
            className={cx('btn-text', 'authorPage-backBtn')}
            isFalled
            theme={theme}
          >
            <div
              className={cx('authorPage-backBtn__content')}
              onClick={() => {
                console.log('back');
              }}
            >
              <BackIcon className={cx('authorPage-backBtn__icon')} />
              <div className={cx('authorPage-backBtn__text')}>back</div>
            </div>
          </Button>
        </div>
        <div className={cx('authorPage-form')}>
          <div
            className={cx('authorPage-portrait')}
            // ref={portraitRef}
          >
            <img
              className={cx('authorPage-portrait__img')}
              alt="portrait"
              src={img}
            />
          </div>
          <div className={cx('authorPage-form__content')}>
            <div
              className={cx(
                'authorPage-biography',
                `authorPage-biography_theme_${theme}`
              )}
            >
              <div
                className={cx(
                  'authorPage-biography__yearsLife',
                  `authorPage-biography__yearsLife_theme_${theme}`,
                  'caption_medium'
                )}
              >
                {yearsLife}
              </div>
              <h3
                className={cx(
                  'authorPage-biography__fullName',
                  `authorPage-biography__fullName_theme_${theme}`
                )}
              >
                {fullName}
              </h3>
              <div
                className={cx(
                  'authorPage-biography__placeBirth',
                  `authorPage-biography__placeBirth_theme_${theme}`,
                  'caption_medium'
                )}
              >
                {placeBirth}
              </div>
            </div>
            <div
              className={cx('authorPage-description', {
                'authorPage-description_active': stateReadMore,
              })}
            >
              <div
                className={cx(
                  'authorPage-description__title',
                  `authorPage-description__title_theme_${theme}`,
                  'paragraph_light',
                  'paragraph_light_base',
                  { 'authorPage-description__title_active': stateReadMore }
                )}
              >
                {description.slice(0, stateReadMore ? description.length : 265)}
              </div>
              <Button
                className={cx('btn-text', 'authorPage-readMoreBtn')}
                isFalled
                theme={theme}
              >
                <div
                  className={cx('authorPage-readMoreBtn__content')}
                  onClick={() => {
                    setStateReadMore((state) => !state);
                  }}
                >
                  <div className={cx('authorPage-readMoreBtn__title')}>
                    read {stateReadMore ? 'less' : 'more'}
                  </div>
                  <VectorIcon
                    className={cx('authorPage-readMoreBtn__icon', {
                      'authorPage-readMoreBtn__icon_active': stateReadMore,
                    })}
                  />
                </div>
              </Button>
            </div>
            <div className={cx('authorPage-labels')}>
              {labelData.map((item, index) => (
                <Label theme={theme} key={index} title={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={cx('authorPage-artworks')}>
          <h3
            className={cx(
              'authorPage-artworks__title',
              `authorPage-artworks__title_theme_${theme}`
            )}
          >
            Artworks
          </h3>
          <div className={cx('authorPage-artworks__content')}>
            <CardList theme={theme} cardsData={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;

//   /* <div className={cx('authorPage-biography__yearBirth')}></div>
// {' - '}
// <div className={cx('authorPage-biography__yearDead')}></div> */
