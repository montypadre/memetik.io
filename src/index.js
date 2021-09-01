import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import "jquery.ripples";
import './index.css';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <App subject="Person" />
  </StrictMode>,
  document.getElementById('root')
);

$("#app").ripples({
  dropRadius: 200,
  perturbance: 0.1,

});

