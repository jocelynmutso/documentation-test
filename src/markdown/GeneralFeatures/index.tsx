import main from './_index.md';
import csv from './csv.md';
import globallocallists from './global-local-lists.md';
import lifecyclemanagement from './lifecycle-management.md';
import regularexpressions from './regular-expressions.md';
import translations from './translations.md';

const GeneralFeature = {
  name: 'General Features', path: main,
  subs: [
    { name: 'CSV', path: csv },
    { name: 'global local lists', path: globallocallists },
    { name: 'lifecycle management', path: lifecyclemanagement },
    { name: 'regular expressions', path: regularexpressions },
    { name: 'translations', path: translations },
  ]
}

export default GeneralFeature;