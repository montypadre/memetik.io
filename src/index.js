import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
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
  perturbance: 0.1
});

reportWebVitals(console.log);

