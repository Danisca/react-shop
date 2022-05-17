import React from 'react';
import ReactDom from 'react-dom/client';

import App from './components/App';

const mainContainer = ReactDom.createRoot(document.getElementById('app'));
mainContainer.render(<App/>);
