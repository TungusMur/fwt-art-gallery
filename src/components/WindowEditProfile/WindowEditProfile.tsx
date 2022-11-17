import classNames from 'classnames/bind';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import { ReactComponent as DropIcon } from '../../assets/img/profileDropIcon.svg';
import { ReactComponent as CrossWindowIcon } from '../../assets/img/crossWindowIcon.svg';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import useInput from '../../hooks/useInput';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IWindowEditProfile = { theme?: 'light' | 'dark'; handleClose: () => void };

const WindowEditProfile = ({
  theme = 'light',
  handleClose,
}: IWindowEditProfile) => {
  const { dragState, file, errorMessage, handleDrag, handleDropOrInput } =
    useDragAndDrop();

  const inputName = useInput('name');
  const inputYear = useInput('year');
  const inputLocation = useInput('location');
  const textAreaDescription = useInput('description');
  const inputGenres = useInput('name');

  return (
    <div
      className={cx('windowEditProfile', `windowEditProfile_theme_${theme}`)}
      onClick={() => handleClose()}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cx(
          'windowEditProfile__content',
          `windowEditProfile__content_theme_${theme}`
        )}
        onDragStart={(e) => handleDrag(e)}
        onDragEnter={(e) => handleDrag(e, 'enter')}
        onDragLeave={(e) => handleDrag(e, 'leave')}
        onDragOver={(e) => handleDrag(e)}
        onDrop={(e) => handleDropOrInput(e)}
      >
        <div
          className={cx('windowEditProfile-upload', {
            'windowEditProfile-upload_dragEnter': dragState,
          })}
        >
          <div
            className={cx(
              'windowEditProfile-upload__content',
              `windowEditProfile-upload__content_theme_${theme}`,
              {
                'windowEditProfile-upload__content_dragEnter': dragState,
                'windowEditProfile-upload__content_drop': file,
              }
            )}
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
            {file && !dragState && <img alt="img" src={file.toString()} />}
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
              theme={theme}
              handleChange={(e) => inputName.handleChange(e)}
              handleFocus={() => inputName.handleFocus()}
              value={inputName.value}
              title="Name*"
              placeholder=""
              textError={inputName.errorMessage}
            />
            <Input
              theme={theme}
              handleChange={(e) => inputYear.handleChange(e)}
              handleFocus={() => inputYear.handleFocus()}
              value={inputYear.value}
              title="Years of life"
              placeholder=""
              textError={inputYear.errorMessage}
            />
            <Input
              theme={theme}
              handleChange={(e) => inputLocation.handleChange(e)}
              handleFocus={() => inputLocation.handleFocus()}
              value={inputLocation.value}
              title="Location"
              placeholder=""
              textError={inputLocation.errorMessage}
            />
            <Input
              theme={theme}
              inputType="textarea"
              handleChange={(e) => textAreaDescription.handleChange(e)}
              handleFocus={() => textAreaDescription.handleFocus()}
              value={textAreaDescription.value}
              title="Description"
              placeholder=""
              textError={textAreaDescription.errorMessage}
            />
            <Input
              theme={theme}
              handleChange={(e) => inputGenres.handleChange(e)}
              handleFocus={() => inputGenres.handleFocus()}
              value={inputGenres.value}
              title="Genres*"
              placeholder=""
              textError={inputGenres.errorMessage}
            />
          </div>
          <Button
            className={cx('windowEditProfile-saveBtn')}
            isFalled
            theme={theme}
          >
            <div className={cx('windowEditProfile-saveBtn__content')}>save</div>
          </Button>
        </div>
        <button
          className={cx(
            'windowEditProfile-btnClose',
            `windowEditProfile-btnClose_theme_${theme}`,
            {
              'windowEditProfile-btnClose_dragEnter': dragState,
            }
          )}
          onClick={() => handleClose()}
        >
          <CrossWindowIcon
            className={cx('windowEditPainting-btnClose__icon')}
          />
        </button>
      </div>
    </div>
  );
};

export default WindowEditProfile;
