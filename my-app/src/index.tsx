import React from 'react';
import ReactDOM from 'react-dom/client';
import './Common/Style/index.css';
import Main from './Components/Main'
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from './Store/auth-context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthContextProvider>
    <BrowserRouter>
        <Main />
      </BrowserRouter>   
  </AuthContextProvider>
);
