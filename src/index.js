import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from './components/errorBoundary'

ReactDOM.render(
  <BrowserRouter>
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);


