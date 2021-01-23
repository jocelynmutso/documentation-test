import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DefaultTheme, DrawerTheme } from './themes';
import { createMarkdownService, Service } from './core'

import reportWebVitals from './reportWebVitals';


interface RequireContext {
  keys(): string[];
  (id: string): { default: string};
}

const requireModule: RequireContext = require.context("./markdown/", true, /\.md$/)
const nodeModules = requireModule.keys()
  .map((fileName: string) => ({
    url: requireModule(fileName).default, 
    value: fileName 
  }));

const service: Service.Content = createMarkdownService(nodeModules);

ReactDOM.render( 
  <App init={service} theme={{
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
