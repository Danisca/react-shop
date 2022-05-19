import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './routes/App.jsx';

const mainContainer = ReactDom.createRoot(document.getElementById('app'));
mainContainer.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
