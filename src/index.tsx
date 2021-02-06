import React from 'react';
import ReactDOM from 'react-dom';
import Dandy from '@jocelynmutso/dandy-doc/build/src';

import { DialobTheme } from './themes';
import reportWebVitals from './reportWebVitals';
import logo from './logo.png';



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


const brandImage = <img src={logo} alt="logo"/>;

ReactDOM.render( 
  <Dandy theme={DialobTheme} md={{files: requireMarkdowns}} brand={{logo: brandImage}} />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
