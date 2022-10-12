import { useEffect } from 'react';

type IDrag = (
  className: string,
  setDragState: (e: boolean) => void,
  ref: React.RefObject<HTMLDivElement>,
  dragState: boolean
) => void;

const useDrag: IDrag = (className, setDragState, ref, dragState) => {
  const handleDrag = (e: DragEvent, typeDrag?: string) => {
    e.preventDefault();

    if (typeDrag === 'enter' && ref.current === e.target && !dragState) {
      setDragState(true);
    } else if (
      typeDrag === 'leave' &&
      !ref.current?.contains(e.relatedTarget as HTMLElement)
    ) {
      setDragState(false);
    }
  };

  const createOrRemoveDragEvent = (
    typeMethod: string,
    typeEvent: string,
    typeDrag?: string
  ) => {
    if (typeMethod === 'add') {
      document
        .querySelector(`.${className}`)
        ?.addEventListener(typeEvent, (e) =>
          handleDrag(e as DragEvent, typeDrag)
        );
    } else if (typeMethod === 'remove') {
      document
        .querySelector(`.${className}`)
        ?.removeEventListener(typeEvent, (e) =>
          handleDrag(e as DragEvent, typeDrag)
        );
    }
  };

  useEffect(() => {
    createOrRemoveDragEvent('add', 'dragstart');
    createOrRemoveDragEvent('add', 'dragenter', 'enter');
    createOrRemoveDragEvent('add', 'dragleave', 'leave');
    createOrRemoveDragEvent('add', 'dragover');

    return () => {
      createOrRemoveDragEvent('remove', 'dragstart');
      createOrRemoveDragEvent('remove', 'dragenter', 'enter');
      createOrRemoveDragEvent('remove', 'dragleave', 'leave');
      createOrRemoveDragEvent('remove', 'dragover');
    };
  }, [ref]);
};

export default useDrag;
