import React from 'react';
import ReactDOM from 'react-dom';
import Dandy from '@jocelynmutso/dandy-doc/build/src';

import { DialobTheme } from './themes';
import reportWebVitals from './reportWebVitals';
import Logo from '../public/images/logo.png';



interface RequireContext {
  keys(): string[];
  (id: string): { default: string};
}

const requireModule: RequireContext = require.context("./markdown/", true, /\.md$/)
const requireMarkdowns = requireModule
  .keys()
  .map((fileName: string) => ({
    url: requireModule(fileName).default, 
    name: fileName 
  }));


ReactDOM.render( 
  <Dandy theme={DialobTheme} md={{files: requireMarkdowns}} brand={{title: "Dialob"}} />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
