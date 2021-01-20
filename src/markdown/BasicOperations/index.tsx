import intro from './intro.md';
import page from './page.md'
import groups from './groups.md'
import responsetypes from './responsetypes.md'
import outputtypes from './outputtypes.md'
import testing from './testing.md'
import addingitems from './addingitems.md'
import reordering from './reordering.md'
import ids from './ids.md'
import { TopicItem } from '../../core/Topic';



const BasicOperations: TopicItem = {
  name: 'Basic Operations',
  subs: [
    { name: 'Intro', path: intro },
    { name: 'Pages', path: page },
    { name: 'Groups', path: groups },
    { name: 'Adding Items', path: addingitems },
    { name: 'Response Types', path: responsetypes },
    { name: 'Output Types', path: outputtypes },
    { name: 'Identifiers', path: ids},
    { name: 'Testing', path: testing },
    { name: 'Reordering Items', path: reordering },
   
  ]
}

export default BasicOperations;