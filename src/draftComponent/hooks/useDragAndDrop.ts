import { useState, useEffect } from 'react';

const getErrorMessage = (file: File) => {
  if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
    return 'The file must be of type .jpg or .png';
  }

  if (file.size / 1024 / 1024 > 3) {
    return 'The file size must be less than 3 MB';
  }

  return '';
};

const useDragAndDrop = () => {
  const [fileData, setFileData] = useState<{
    file: string | null;
    errorMessage: string;
  }>({
    file: null,
    errorMessage: '',
  });
  const [dragState, setDragState] = useState(false);

  const handleDrag = (
    e: React.DragEvent<HTMLDivElement> | React.DragEvent<HTMLElement>,
    typeDrag?: string
  ) => {
    e.preventDefault();

    if (typeDrag === 'enter' && setDragState) {
      setDragState(true);
    } else if (typeDrag === 'leave' && setDragState) {
      setDragState(false);
    }
  };

  const handleDropOrInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLDivElement>
      | React.DragEvent<HTMLElement>
  ) => {
    e.preventDefault();
    if ('dataTransfer' in e && e.dataTransfer.files.length) {
      setFileData({
        file: getErrorMessage(e.dataTransfer.files[0])
          ? ''
          : URL.createObjectURL(e.dataTransfer.files[0]),
        errorMessage: getErrorMessage(e.dataTransfer.files[0]),
      });
      setDragState(false);
    } else if ('target' in e && 'files' in e.target && e.target.files?.length) {
      setFileData({
        file: getErrorMessage(e.target.files[0])
          ? ''
          : URL.createObjectURL(e.target.files[0]),
        errorMessage: getErrorMessage(e.target.files[0]),
      });
    }
  };

  return {
    handleDrag,
    handleDropOrInput,
    ...fileData,
    dragState,
  };
};

export default useDragAndDrop;
