import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import DefaultTheme from './themes';

import reportWebVitals from './reportWebVitals';

/*
const requireModule = require.context("./markdown/AdvancedOperations", false, /\.md$/)
interface LooseObject {
  [key: string]: any
}
const api: LooseObject = {}

requireModule.keys().forEach((fileName: string) => {
  if (fileName === "./index.ts") return
  api[fileName] = {
    ...requireModule(fileName).default,
  }
})
console.log(api);
*/

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
