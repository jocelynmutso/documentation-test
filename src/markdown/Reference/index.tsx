import main from './_index.md';
import walkthrough from './walkthrough.md';
import quickreference from './quickreference.md'



const Reference = {
  name: 'Reference', path: main,
  subs: [
    { name: 'New form walkthrough', path: walkthrough },
    { name: 'Quick Reference', path: quickreference }
  ]
}

export default Reference;