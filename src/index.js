import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import '../node_modules/normalize.css/normalize.css'; //tar bort default browser css
import { BrowserRouter } from 'react-router-dom';

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

