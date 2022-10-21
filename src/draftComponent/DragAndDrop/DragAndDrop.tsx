import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { handleDrag, handleDropOrInput } from '../WindowEditPainting/function';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IDragAndDrop = {
  className: string;
  fileData: string | ArrayBuffer | null;
  setFileData: (fileData: string | ArrayBuffer | null) => void;
  children: React.ReactNode;
  theme?: 'light' | 'dark';
};

const DragAndDrop = ({
  className,
  fileData,
  setFileData,
  children,
  theme = 'light',
}: IDragAndDrop) => {
  const [dragState, setDragState] = useState(false);
  const uploadRef = useRef(null);

  return (
    <div
      className={cx(className, `${className}_theme_${theme}`, {
        [`${className}_dragEnter`]: dragState,
        [`${className}_drop`]: fileData,
      })}
    >
      <div
        className={cx(`${className}__content`)}
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
            (file) => setFileData(file),
            (state) => setDragState(state)
          )
        }
        ref={uploadRef}
      >
        {!fileData && children}
      </div>
    </div>
  );
};

export default DragAndDrop;
