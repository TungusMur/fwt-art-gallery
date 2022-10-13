import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import Input from '../Input';
import { ReactComponent as DropIcon } from '../../assets/img/dropIcon.svg';
import Image from './Image';
import { handleDrag, handleDropOrInput } from './function';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IWindowPaintingAction = { theme?: 'light' | 'dark' };

const WindowPaintingAction = ({ theme = 'light' }: IWindowPaintingAction) => {
  const [dragState, setDragState] = useState(false);
  const [fileData, setFileData] = useState<string | ArrayBuffer | null>(null);
  const uploadRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cx('windowPaintingAction')}>
      <div
        className={cx(
          'windowPaintingAction__content',
          `windowPaintingAction__content_theme_${theme}`
        )}
      >
        <div className={cx('windowPaintingAction-form')}>
          <div className={cx('windowPaintingAction-form__inputName')}>
            <Input
              theme={theme}
              title="The name of the picture"
              placeholder=""
              textError=""
            />
          </div>
          <div className={cx('windowPaintingAction-form__inputYearCreation')}>
            <Input
              theme={theme}
              title="Year of creation"
              placeholder=""
              textError=""
            />
          </div>
        </div>
        <div
          className={cx(
            'windowPaintingAction-upload',
            `windowPaintingAction-upload_theme_${theme}`,
            {
              'windowPaintingAction-upload_dragEnter': dragState,
              'windowPaintingAction-upload_drop': fileData,
            }
          )}
        >
          <div
            className={cx('windowPaintingAction-upload__content')}
            onDragStart={(e) => handleDrag(e)}
            onDragEnter={(e) =>
              handleDrag(e, uploadRef, 'enter', (state) => setDragState(state))
            }
            onDragLeave={(e) =>
              handleDrag(e, uploadRef, 'leave', (state) => setDragState(state))
            }
            onDragOver={(e) => handleDrag(e)}
            onDrop={(e) =>
              handleDropOrInput(
                e,
                (file) => setFileData(file),
                (state) => setDragState(state)
              )
            }
            ref={uploadRef}
          >
            {!fileData && (
              <>
                <DropIcon
                  className={cx(
                    'windowPaintingAction-upload__icon',
                    `windowPaintingAction-upload__icon_theme_${theme}`
                  )}
                />
                <div
                  className={cx(
                    'windowPaintingAction-upload__titel',
                    `windowPaintingAction-upload__titel_theme_${theme}`,
                    'paragraph_light',
                    'paragraph_light_base'
                  )}
                >
                  Drop your image here, or
                  <label className={cx('windowPaintingAction-upload__label')}>
                    <input
                      className={cx('windowPaintingAction-upload__input')}
                      type="file"
                      onChange={(e) =>
                        handleDropOrInput(
                          e,
                          (file) => setFileData(file),
                          (state) => setDragState(state)
                        )
                      }
                    />
                    <span className={cx('windowPaintingAction-upload__span')} />
                  </label>
                </div>
                <div
                  className={cx(
                    'windowPaintingAction-upload__info',
                    `windowPaintingAction-upload__info_theme_${theme}`,
                    'paragraph_light',
                    'paragraph_light_small'
                  )}
                >
                  Upload only .jpg or .png format less than 3 MB
                </div>
              </>
            )}
          </div>
          {fileData && (
            <Image
              className={cx('windowPaintingAction-upload')}
              src={fileData.toString()}
            />
          )}
        </div>
        <Button
          theme={theme}
          className={cx('windowPaintingAction-save')}
          isFalled
          isDisabled={!fileData}
        >
          <div
            className={cx('windowPaintingAction-save__content')}
            onClick={() => {
              if (fileData?.toString()) {
                console.log('click');
              }
            }}
          >
            save
          </div>
        </Button>
        <button
          className={cx(
            'windowPaintingAction__btnClose',
            `windowPaintingAction__btnClose_theme_${theme}`
          )}
        />
      </div>
    </div>
  );
};

export default WindowPaintingAction;
