import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/ui/App';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback ={<div>Loading...</div>}>
    <App />
    </Suspense>
);

