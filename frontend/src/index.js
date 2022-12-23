import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

