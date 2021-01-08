import React from 'react';
import ReactMarkdown from 'react-markdown'

//import mdLocation from './markdown/test1.md';
//import img from './images/note-variables.png'

interface NoteProps {
  path: string
}

const Note: React.FC<NoteProps> = ({path}) => {
  const [input, setInput] = React.useState<string>("MD loading...");
  fetch(path)
    .then(response => response.text())
    .then((text) => setInput(text));
  return (<div><ReactMarkdown source={input.replace("%PUBLIC_URL%", "documentation-test")}/></div>);  
}

export default Note;
