import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import DefaultTheme from './themes';
import { markdownLoader, Service } from './core'

import reportWebVitals from './reportWebVitals';

const markdowns: {key: string, value: string}[] = [];
const requireModule = require.context("./markdown/", true, /\.md$/)
requireModule.keys().forEach((fileName: string) => markdowns.push({key: requireModule(fileName).default, value: fileName }))

const loader = (setService: (service: Service.Content) => void) => {
  markdownLoader(markdowns, setService)
};


ReactDOM.render( 
  <ThemeProvider theme={DefaultTheme}>
    <App loader={loader} />
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
