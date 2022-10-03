import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type IPortal = { children: ReactNode };

const Portal = ({ children }: IPortal) =>
  ReactDOM.createPortal(children, document.getElementById('modal') as Element);

export default Portal;
