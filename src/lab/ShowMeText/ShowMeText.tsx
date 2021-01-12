import React from 'react';
import MyTextField from './MyTextField';
import MyDialog from './MyDialog';


interface ShowMeTextProps { }

const ShowMeText: React.FC<ShowMeTextProps> = ({ }) => {

  const[myTextValue, setMyTextValue] = React.useState<string>("Default value"); 

  return (<div>
    The current myTextValue is: {myTextValue}

    <MyTextField value={myTextValue}  setValue={setMyTextValue} />
    <MyDialog myValue={myTextValue}/>
  </div>)
}


export default ShowMeText 