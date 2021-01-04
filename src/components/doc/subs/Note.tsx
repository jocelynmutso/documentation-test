import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Doc } from '../../styles';
import img from './images/note-variables.png'

export const Note: React.ReactNode = () => {
  return (<div>

    <Doc.H1>Note type</Doc.H1>
      <Doc.P1>DEL supports a simple way to dynamically change the content of Note type. This is done by referring to an existing DEL type inside a Note text using { } as the identifier.
      The variable can be a user-defined custom variable or a request type of variable. </Doc.P1>


      <Doc.P1>On the Composer side: </Doc.P1>   
    
      <img src={img} width="1000" height="400"></img>
  </div>

  );
  
}
