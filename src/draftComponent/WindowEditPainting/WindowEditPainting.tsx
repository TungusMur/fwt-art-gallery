import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import Input from '../Input';
import { ReactComponent as DropIcon } from '../../assets/img/dropIcon.svg';
import Image from './Image';
import { handleDrag, handleDropOrInput } from './function';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IWindowEditPainting = { theme?: 'light' | 'dark' };

const WindowEditPainting = ({ theme = 'light' }: IWindowEditPainting) => {
  const [dragState, setDragState] = useState(false);
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);
  const uploadRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cx('windowEditPainting')}>
      <div
        className={cx(
          'windowEditPainting__content',
          `windowEditPainting__content_theme_${theme}`
        )}
      >
        <div className={cx('windowEditPainting-form')}>
          <div className={cx('windowEditPainting-form__inputName')}>
            <Input
              theme={theme}
              title="The name of the picture"
              placeholder=""
              textError=""
            />
          </div>
          <div className={cx('windowEditPainting-form__inputYearCreation')}>
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
            'windowEditPainting-upload',
            `windowEditPainting-upload_theme_${theme}`,
            {
              'windowEditPainting-upload_dragEnter': dragState,
              'windowEditPainting-upload_drop': file,
            }
          )}
          onDragStart={(e) => handleDrag(e)}
          onDragEnter={(e) =>
            handleDrag(e, 'enter', (state) => setDragState(state))
          }
          onDragLeave={(e) =>
            handleDrag(e, 'leave', (state) => setDragState(state))
          }
          onDragOver={(e) => handleDrag(e)}
          onDrop={(e) =>
            handleDropOrInput(
              e,
              (file) => setFile(file),
              (state) => setDragState(state)
            )
          }
          ref={uploadRef}
        >
          {!file && (
            <>
              <DropIcon className={cx('windowEditPainting-upload__icon')} />
              <div
                className={cx('windowEditPainting-upload__titel', {
                  'windowEditPainting-upload__titel_dragEnter': dragState,
                })}
              >
                Drop your image here, or
                <label className={cx('windowEditPainting-upload__label')}>
                  <input
                    className={cx('windowEditPainting-upload__input')}
                    type="file"
                    onChange={(e) =>
                      handleDropOrInput(
                        e,
                        (file) => setFile(file),
                        (state) => setDragState(state)
                      )
                    }
                  />
                  <span className={cx('windowEditPainting-upload__span')} />
                </label>
              </div>
              <div
                className={cx(
                  'windowEditPainting-upload__info',
                  'paragraph_light',
                  'paragraph_light_small'
                )}
              >
                Upload only .jpg or .png format less than 3 MB
              </div>
            </>
          )}
          {file && (
            <Image
              className={cx('windowEditPainting-upload')}
              src={file.toString()}
            />
          )}
        </div>
        <Button
          theme={theme}
          className={cx('windowEditPainting-saveBtn')}
          isFalled
          isDisabled={!file}
        >
          <div
            className={cx('windowEditPainting-saveBtn__content')}
            onClick={() => {
              if (file?.toString()) {
                console.log('click');
              }
            }}
          >
            save
          </div>
        </Button>
        <button
          className={cx(
            'windowEditPainting__btnClose',
            `windowEditPainting__btnClose_theme_${theme}`
          )}
        />
      </div>
    </div>
  );
};

export default WindowEditPainting;
