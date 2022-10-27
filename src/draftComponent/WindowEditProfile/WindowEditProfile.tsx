import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../../ui-components/Button';
import { ReactComponent as DropIcon } from '../../assets/img/profileDropIcon.svg';
import { handleDrag, handleDropOrInput } from '../func/function';
import useDragAndDrop from '../hooks/useDragAndDrop';
import styles from './styles.scss';
import useInput from '../hooks/useInput';

const cx = classNames.bind(styles);

const WindowEditProfile = () => {
  const { dragState, file, errorMessage, handleDrag, handleDropOrInput } =
    useDragAndDrop();
  const uploadRef = useRef<HTMLDivElement>(null);
  const inputName = useInput('name');
  const inputYear = useInput('year');
  const inputLocation = useInput('location');
  const inputGenres = useInput('name');

  return (
    <div className={cx('windowEditProfile')}>
      <div
        ref={uploadRef}
        className={cx('windowEditProfile__content')}
        onDragStart={(e) => handleDrag(e)}
        onDragEnter={(e) => handleDrag(e, 'enter')}
        onDragLeave={(e) => handleDrag(e, 'leave')}
        onDragOver={(e) => handleDrag(e)}
        onDrop={(e) => handleDropOrInput(e)}
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
              onChange={(e) => handleDropOrInput(e)}
            />
            <span className={cx('windowEditProfile-upload__span')}>
              Browse Profile Photo
            </span>
          </label>
        </div>
        <div
          className={cx('windowEditProfile-form', {
            'windowEditProfile-form_dragEnter': dragState,
          })}
        >
          <div className={cx('windowEditProfile-form__content')}>
            <Input
              handleChange={(e) => inputName.handleChange(e)}
              handleFocus={() => inputName.handleFocus()}
              value={inputName.value}
              title="Name*"
              placeholder=""
              textError={inputName.errorMessage}
            />
            <Input
              handleChange={(e) => inputYear.handleChange(e)}
              handleFocus={() => inputYear.handleFocus()}
              value={inputYear.value}
              title="Years of life"
              placeholder=""
              textError={inputYear.errorMessage}
            />
            <Input
              handleChange={(e) => inputLocation.handleChange(e)}
              handleFocus={() => inputLocation.handleFocus()}
              value={inputLocation.value}
              title="Location"
              placeholder=""
              textError={inputLocation.errorMessage}
            />
            <Textarea title="Description" placeholder="" textError="" />
            <Input
              handleChange={(e) => inputGenres.handleChange(e)}
              handleFocus={() => inputGenres.handleFocus()}
              value={inputGenres.value}
              title="Genres*"
              placeholder=""
              textError={inputGenres.errorMessage}
            />
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
