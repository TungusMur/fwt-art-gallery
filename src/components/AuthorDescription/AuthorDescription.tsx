import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import { ReactComponent as VectorIcon } from '../../assets/img/vectorIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IAuthorDescription = {
  description: string;
  theme?: 'light' | 'dark';
};

const AuthorDescription = ({
  description,
  theme = 'light',
}: IAuthorDescription) => {
  const [stateReadMore, setStateReadMore] = useState(false);

  return (
    <div
      className={cx(`authorDescription`, `authorDescription_theme_${theme}`, {
        authorDescription_active: stateReadMore,
      })}
    >
      <div
        className={cx('authorDescription__title', 'paragraph__base_light', {
          authorDescription__title_active: stateReadMore,
        })}
      >
        {description.length > 265
          ? description.slice(0, stateReadMore ? description.length : 265)
          : description}
      </div>
      {description.length > 265 && (
        <Button
          className={cx('btn-text', 'authorDescription-readMoreBtn')}
          isFalled
          theme={theme}
        >
          <div
            className={cx('authorDescription-readMoreBtn__content')}
            onClick={() => {
              setStateReadMore((state) => !state);
            }}
          >
            <div className={cx('authorDescription-readMoreBtn__title')}>
              read {stateReadMore ? 'less' : 'more'}
            </div>
            <VectorIcon
              className={cx('authorDescription-readMoreBtn__icon', {
                'authorDescription-readMoreBtn__icon_active': stateReadMore,
              })}
            />
          </div>
        </Button>
      )}
    </div>
  );
};

export default AuthorDescription;
