import { useEffect } from 'react';

type IDragAndDrop = (
  className: string,
  setDragState: (e: boolean) => void,
  ref: React.RefObject<HTMLDivElement>,
  dragState: boolean
) => void;

const useDragAndDrop: IDragAndDrop = (
  className,
  setDragState,
  ref,
  dragState
) => {
  const handleDrag = (e: DragEvent, typeDrag?: string) => {
    e.preventDefault();

    if (typeDrag === 'enter' && ref.current === e.target && !dragState) {
      console.log('enter');
      console.log(dragState);
      setDragState(true);
    }

    if (
      typeDrag === 'leave' &&
      !ref.current?.contains(e.relatedTarget as HTMLElement)
    ) {
      // if (!ref.current?.contains(e.target as HTMLElement)) {
      setDragState(false);
      // }
    }
  };

  const createOrRemoveEvent = (
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
    createOrRemoveEvent('add', 'dragstart');
    createOrRemoveEvent('add', 'dragenter', 'enter');
    createOrRemoveEvent('add', 'dragleave', 'leave');
    createOrRemoveEvent('add', 'dragover');

    return () => {
      createOrRemoveEvent('remove', 'dragstart');
      createOrRemoveEvent('remove', 'dragenter', 'enter');
      createOrRemoveEvent('remove', 'dragleave', 'leave');
      createOrRemoveEvent('remove', 'dragover');
    };
  }, [ref]);
};

export default useDragAndDrop;
