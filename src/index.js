import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './/App';
import DefaultTheme from './themes';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <ThemeProvider theme={DefaultTheme}>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
