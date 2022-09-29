import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Label from '../Label';
import Checkbox from '../Checkbox';
import FilterItem from '../FilterItem';
import { ReactComponent as ExpandIcon } from '../../assets/img/expandIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IMultiselect = {
  //   data: { title: string }[];
  theme?: 'light' | 'dark';
};

const Multiselect = ({ theme = 'light' }: IMultiselect) => {
  const data: string[] = [
    'Romanticism',
    'Art',
    'Nature',
    'Bataille',
    'Realistic',
  ];
  const [checkData, setCheckData] = useState<string[]>([]);
  const [active, setActive] = useState(false);

  return (
    <div className={cx('multiselect')}>
      <div className={cx('multiselect__title', 'input')}>Field name</div>
      <div
        className={cx('multiselect-form', `multiselect-form_theme_${theme}`)}
      >
        <div
          className={cx(
            'multiselect-labelList',
            `multiselect-labelList_theme_${theme}`,
            {
              'multiselect-labelList_active': active,
            }
          )}
        >
          <div className={cx('multiselect-labelList__content')}>
            {checkData.map((item, index) => (
              <div className={cx('multiselect-labelList__item')} key={index}>
                <Label
                  title={item}
                  isClose
                  handleClose={() => {
                    setCheckData((state) =>
                      state.filter((itemChild) => itemChild !== item)
                    );
                  }}
                  theme={theme}
                />
              </div>
            ))}
          </div>
          <ExpandIcon
            className={cx('multiselect-labelList__btn', {
              'multiselect-labelList__btn_active': active,
            })}
            onClick={() => setActive((state) => !state)}
          />
        </div>
        <div
          className={cx(
            'multiselect-filterList',
            `multiselect-filterList_theme_${theme}`,
            {
              'multiselect-filterList_active': active,
            }
          )}
        >
          {active && (
            <div className={cx('multiselect-filterList__content')}>
              {data.map((item, index) => (
                <label
                  className={cx(
                    'multiselect-filterList__item',
                    `multiselect-filterList__item_theme_${theme}`
                  )}
                  key={index}
                >
                  <Checkbox
                    isSelected={checkData.includes(item)}
                    handleChange={() => {
                      setCheckData((state) =>
                        state.includes(item)
                          ? state.filter((itemChild) => itemChild !== item)
                          : [...state, item]
                      );
                    }}
                    theme={theme}
                  />
                  <FilterItem
                    title={item}
                    isSelected={checkData.includes(item)}
                    theme={theme}
                  />
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Multiselect;
