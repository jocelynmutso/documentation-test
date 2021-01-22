import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DefaultTheme, DrawerTheme } from './themes';
import { ServiceLoader } from './core'

import reportWebVitals from './reportWebVitals';


const serviceLoader: ServiceLoader = new ServiceLoader(() => {
  const markdowns: { url: string, value: string }[] = [];
  const requireModule = require.context("./markdown/", true, /\.md$/)
  requireModule.keys().forEach((fileName: string) => markdowns.push({url: requireModule(fileName).default, value: fileName }))
  return markdowns;
});

ReactDOM.render( 
  <App loader={serviceLoader.onReady} theme={{
      primary: DefaultTheme, 
      secondary: DrawerTheme
    }}/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
