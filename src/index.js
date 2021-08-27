import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App subject="Person" />
  </StrictMode>,
  rootElement
);
