import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.scss';
import './styles/reset.scss';
import './styles/fonts.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
