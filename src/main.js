import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
var container = document.getElementById('root');
if (container) {
    var root = ReactDOM.createRoot(container);
    root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
else {
    console.error('Root container not found');
}
