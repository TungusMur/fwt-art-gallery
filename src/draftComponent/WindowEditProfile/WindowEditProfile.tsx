import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../../ui-components/Button';
import { ReactComponent as DropIcon } from '../../assets/img/profileDropIcon.svg';
import { handleDrag, handleDropOrInput } from '../func/function';
import styles from './styles.scss';

const cx = classNames.bind(styles);

// type IWindowEditProfile = { type: 'light' | 'dark' };

const WindowEditProfile = () => {
  const [dragState, setDragState] = useState(false);
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);
  const uploadRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cx('windowEditProfile')}>
      <div
        ref={uploadRef}
        className={cx('windowEditProfile__content')}
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
            (file) => setFile(file),
            (state) => setDragState(state)
          )
        }
      >
        <div className={cx('windowEditProfile-upload')}>
          <div
            className={cx('windowEditProfile-upload__content', {
              'windowEditProfile-upload__content_dragEnter': dragState,
              'windowEditProfile-upload__content_drop': file,
            })}
          >
            {(!file || dragState) && (
              <>
                <DropIcon className={cx('windowEditProfile-upload__icon')} />
                <div className={cx('windowEditProfile-upload__titel')}>
                  {dragState
                    ? 'Drop your image here'
                    : 'You can drop your image here'}
                </div>
                {dragState && (
                  <div className={cx('windowEditProfile-upload__info')}>
                    Upload only .jpg or .png format less than 3 MB
                  </div>
                )}
              </>
            )}
            {file && !dragState && <img src={file.toString()} />}
          </div>
          <label className={cx('windowEditProfile-upload__label')}>
            <input
              type="file"
              className={cx('windowEditProfile-upload__input')}
              onChange={(e) =>
                handleDropOrInput(
                  e,
                  (file) => setFile(file),
                  (state) => setDragState(state)
                )
              }
            />
            <span className={cx('windowEditProfile-upload__span')}>
              Browse Profile Photo
            </span>
          </label>
        </div>
        <div className={cx('windowEditProfile-form')}>
          <div className={cx('windowEditProfile-form__content')}>
            <Input title="Name*" placeholder="" textError="" />
            <Input title="Years of life" placeholder="" textError="" />
            <Input title="Location" placeholder="" textError="" />
            <Textarea title="Description" placeholder="" textError="" />
            <Input title="Genres*" placeholder="" textError="" />
          </div>
          <Button className={cx('windowEditProfile-saveBtn')} isFalled>
            <div className={cx('windowEditProfile-saveBtn__content')}>save</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WindowEditProfile;
