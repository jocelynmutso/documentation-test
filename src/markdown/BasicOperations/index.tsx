import main from './_index.md';
import page from './page.md'
import groups from './groups.md'
import inputtypes from './inputtypes.md'
import outputtypes from './outputtypes.md'
import testing from './testing.md'
import addingitems from './addingitems.md'
import reordering from './reordering.md'

const BasicOperations = {
  name: 'Basic Operations', path: main,
  subs: [
    { name: 'Pages', path: page },
    { name: 'Groups', path: groups },
    { name: 'Adding Items', path: addingitems },
    { name: 'Reordering Items', path: reordering },
    { name: 'Input Types', path: inputtypes },
    { name: 'Output Types', path: outputtypes },
    { name: 'Testing', path: testing },
  ]
}

export default BasicOperations;