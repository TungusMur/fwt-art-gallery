import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import ThemeContext from '../../utils/context/context';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { fetchData } from '../../store/redux/reducers/authorReducer';
import { ReactComponent as BackIcon } from '../../assets/img/backIcon.svg';
import dataArt from './data';
import AuthorDescription from '../../components/AuthorDescription';
import Button from '../../ui-components/Button';
import Label from '../../ui-components/Label';
import CardList from '../../ui-components/CardList';
import AuthorizedAction from '../../components/AuthorizedAction';
import ArtworksHeader from '../../components/ArtworksHeader';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const AuthorPage = () => {
  const navigation = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => ({
    data: state.authorReducer.data,
    loading: state.authorReducer.loading,
  }));
  const { accessToken } = useAppSelector((state) => state.authorizationReduce);
  const { name, paintings, yearsOfLife, description, avatar, genres } = data;

  useEffect(() => {
    // dispatch(fetchData('62e148114df711d4f7f68f01'));
    if (id) {
      dispatch(fetchData(id));
    }
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
                    navigation(-1);
                  }}
                >
                  <BackIcon className={cx('authorPage-backBtn__icon')} />
                  <div className={cx('authorPage-backBtn__text')}>back</div>
                </div>
              </Button>
              {accessToken && <AuthorizedAction theme={theme} />}
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
                <AuthorDescription theme={theme} description={description} />
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
              {accessToken && <ArtworksHeader theme={theme} />}
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

export default AuthorPage;
