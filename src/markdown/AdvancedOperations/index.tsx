import intro from './intro.md';
import csv from './csv.md';
import globallocallists from './global-local-lists.md';
import lifecyclemanagement from './lifecycle-management.md';
import translations from './translations.md';
import tags from './tags.md'
import options from './options.md'
import variables from './variables.md'

const AdvancedOperations = {
  name: 'Advanced Operations',
  subs: [
    { name: 'Intro', path: intro },
    { name: 'Tagging', path: tags },
    { name: 'CSV', path: csv },
    { name: 'Custom Variables', path: variables},
    { name: 'Global local lists', path: globallocallists },
    { name: 'Lifecycle management', path: lifecyclemanagement },
    { name: 'Translations', path: translations },
    { name: 'Options', path: options },
  ]
}

export default AdvancedOperations;