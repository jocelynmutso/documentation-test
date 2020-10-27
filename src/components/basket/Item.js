import React from 'react';
import Button from '@material-ui/core/Button';

class Item extends React.Component {
  render() {
    const {name, description, type, id, onClick} = this.props;
    return <Button variant="contained" color="primary" onClick={onClick}>{id}: {name}, {type}, {description}</Button>
  }
}
export default Item;
