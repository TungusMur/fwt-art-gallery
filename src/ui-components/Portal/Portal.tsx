import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './styles.scss';

type IPortalModal = { children: ReactNode; id?: 'window' | 'error' };

const PortalModal = ({ children, id }: IPortalModal) => {
  const element: HTMLElement = document.createElement('div');
  element.id = id || 'modal';

  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  });

  return createPortal(children, element);
};

export default PortalModal;
