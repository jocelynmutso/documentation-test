import intro from './intro.md';
import page from './page.md'
import groups from './groups.md'
import inputtypes from './inputtypes.md'
import outputtypes from './outputtypes.md'
import testing from './testing.md'
import addingitems from './addingitems.md'
import reordering from './reordering.md'
import { TopicItem } from '../../core/Topic';



const BasicOperations: TopicItem = {
  name: 'Basic Operations',
  subs: [
    { name: 'Intro', path: intro },
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