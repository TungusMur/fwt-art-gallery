import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import store from '../../store/redux';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { fetchData } from '../../store/redux/reducers/authorReducer';
import dataArt from './data';
import { ReactComponent as BackIcon } from '../../assets/img/backIcon.svg';
import Description from './Description';
import Button from '../../ui-components/Button';
import Label from '../Label';
import CardList from '../../ui-components/CardList';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IAuthorPage = {
  theme?: 'light' | 'dark';
};

const AuthorPage = ({ theme = 'light' }: IAuthorPage) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => ({
    data: state.authorReducer.data,
    loading: state.authorReducer.loading,
  }));
  const { name, paintings, yearsOfLife, description, avatar, genres } = data;

  useEffect(() => {
    dispatch(fetchData('62e148114df711d4f7f68f01'));
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
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
              <div className={cx('authorPage-portrait')}>
                <img
                  className={cx('authorPage-portrait__img')}
                  alt="portrait"
                  src={avatar}
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
                    {yearsOfLife}
                  </div>
                  <h3
                    className={cx(
                      'authorPage-biography__fullName',
                      `authorPage-biography__fullName_theme_${theme}`
                    )}
                  >
                    {name}
                  </h3>
                  <div
                    className={cx(
                      'authorPage-biography__placeBirth',
                      `authorPage-biography__placeBirth_theme_${theme}`,
                      'caption_medium'
                    )}
                  >
                    Feodosia, Russian Empire
                  </div>
                </div>
                <Description theme={theme} description={description} />
                <div className={cx('authorPage-labels')}>
                  {genres.map(({ name, _id }) => (
                    <Label theme={theme} key={_id} title={name} />
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
                <CardList theme={theme} cardsData={dataArt} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Pr = ({ theme = 'light' }: IAuthorPage) => (
  <>
    <Provider store={store}>
      <AuthorPage theme={theme} />
    </Provider>
  </>
);

export default Pr;
