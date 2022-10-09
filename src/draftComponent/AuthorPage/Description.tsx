import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import { ReactComponent as VectorIcon } from '../../assets/img/vectorIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IDescription = {
  description: string;
  theme?: 'light' | 'dark';
};

const Description = ({ description, theme = 'light' }: IDescription) => {
  const [stateReadMore, setStateReadMore] = useState(false);

  return (
    <div
      className={cx(`authorPage-description`, {
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
  );
};

export default Description;
