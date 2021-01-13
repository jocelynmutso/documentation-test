import intro from './intro.md';
import overview from './overview.md';
import regularexpressions from './regularexpressions.md'
import basicdel from './basicdel.md'
import required from './required.md'
import validation from './validation.md'
import visibility from './visibility.md'


const Logic = {
  name: 'Logic',
  subs: [
    { name: "Intro", path: intro },
    { name: 'Overview', path: overview },
    { name: 'Basic DEL', path: basicdel},
    { name: 'Requirement Rules', path: required},
    { name: 'Visibility Rules', path: visibility},
    { name: 'Validation Rules', path: validation},
    { name: 'Java Regular Expressions', path: regularexpressions},
  ]
}

export default Logic;