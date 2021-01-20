import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import DefaultTheme from './themes';
import { markdownLoader } from './core'

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


const markdowns: string[] = [];
const requireModule = require.context("./markdown/", true, /\.md$/)
requireModule.keys().forEach((fileName: string) => markdowns.push(requireModule(fileName).default))
markdownLoader(markdowns, (content) => console.log(content));


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
