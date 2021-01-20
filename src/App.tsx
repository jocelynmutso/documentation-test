import React from 'react';


import { TopicItem } from './core/Topic';

import ResponseTypes from './markdown/ResponseTypes';
import Expressions from './markdown/Expressions';
import Logic from './markdown/Logic';

import BasicOperations from './markdown/BasicOperations';
import AdvancedOperations from './markdown/AdvancedOperations';
import Reference from './markdown/Reference';
import Shell from './core/Shell';


const App = () => {

  const topics: TopicItem[] = [
    BasicOperations,
    AdvancedOperations,
    Expressions,
    ResponseTypes,
    Logic,
    Reference
  ];
  return <Shell items={topics} />
}
export default App;