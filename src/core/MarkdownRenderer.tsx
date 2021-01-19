import React from 'react';
import ReactMarkdown from 'react-markdown'

//import mdLocation from './markdown/test1.md';
//import img from './images/note-variables.png'

interface NoteProps {
  path: string
}

const MarkdownRenderer: React.FC<NoteProps> = ({path}) => {

  const [input, setInput] = React.useState<string>("MD loading...");
  
  fetch(path)
    .then(response => response.text())
    .then((text) => setInput(text));

  const Image = (props: any) => {
    return <img {...props} 
      src={`${process.env.PUBLIC_URL}/images/${props.src}`}
      style={ {maxWidth: '75%'} } /> 
  }
  
  return (<div><ReactMarkdown 
      source={input}
      renderers={{
        image: Image
      }}/>
    </div>);  
}

export default MarkdownRenderer;
