import React from 'react';
import ReactDOM from 'react-dom/client';
import './Common/Style/index.css';
import Main from './Components/Main'
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
