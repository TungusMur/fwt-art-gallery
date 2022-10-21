const handleDrag = (
  e: React.DragEvent<HTMLDivElement> | React.DragEvent<HTMLElement>,
  typeDrag?: string,
  setDragState?: (state: boolean) => void
) => {
  e.preventDefault();

  if (typeDrag === 'enter' && setDragState) {
    setDragState(true);
  } else if (
    typeDrag === 'leave' &&
    // && ref
    setDragState
  ) {
    setDragState(false);
  }
};

const handleDropOrInput = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.DragEvent<HTMLDivElement>
    | React.DragEvent<HTMLElement>,
  setFileData: (file: string) => void,
  setDragState: (state: boolean) => void
) => {
  e.preventDefault();
  if ('dataTransfer' in e && e.dataTransfer.files.length) {
    setFileData(URL.createObjectURL(e.dataTransfer.files[0]));
    setDragState(false);
  } else if ('target' in e && 'files' in e.target && e.target.files?.length) {
    setFileData(URL.createObjectURL(e.target.files[0]));
  }
};

export { handleDrag, handleDropOrInput };
// ref?: React.RefObject<HTMLDivElement> | React.RefObject<HTMLElement>,
