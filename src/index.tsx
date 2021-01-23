import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import { createHashHistory, History } from 'history';

import App from './App';
import { DefaultTheme, DrawerTheme } from './themes';
import { ShellContextProvider } from './core'


import reportWebVitals from './reportWebVitals';

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

const history: History = createHashHistory();

const config = {
  markdown: requireMarkdowns,
  theme: {
    primary: DefaultTheme,
    secondary: DrawerTheme
  }
}

ReactDOM.render( 
  <Router history={history}>
    <Route path="/:page?/:pageItem?/:anchor?" render={(props) => (
      
      <ShellContextProvider config={config} route={props.match.params} history={history}>
        <App />
      </ShellContextProvider>        
    )} />
  </Router> 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
