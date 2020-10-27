import React from 'react';

import './App.css';
import Item from './Item';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class App extends React.Component {

  handleItemClick(event, id) {
    console.log(id)
  }

  render() {
    const data = [
      {id: "1", name: 'item in basket', desc: "very big", type:"food"},
      {id: "2", name: 'second item', desc: "", type:"pet"},
      {id: "3", name: 'third item', desc: "meh", type:"toy"}
    ]

    const {handleItemClick} = this;

    const items = data.map(
      ({name, desc, type, id}) => 
      <ListItem key={id}>
        <Item 
          onClick={(event) => handleItemClick(event, id)}
          id={id}
          name={name} 
          description={desc} 
          type={type} />
      </ListItem>);
 /* long way
    const resultArray = [];
    for(let elementInData  of data) {
      const mappedValue = <Item name={elementInData.name} description={elementInData.desc} onClick={handleItemClick} />
      resultArray.push(mappedValue)
    }
*/
    return (<List>{items}</List>);
  }
}

export default App;
