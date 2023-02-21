import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// BOOTSTRAP CSS https://react-bootstrap.github.io/getting-started/introduction
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

