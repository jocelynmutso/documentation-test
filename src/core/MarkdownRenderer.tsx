import React from 'react';
import ReactMarkdown from 'react-markdown'

import { Service } from './';


interface NoteProps {
  pageItem: Service.PageItem
}

const MarkdownRenderer: React.FC<NoteProps> = ({pageItem}) => {
  
  const Image = (props: any) => {
    return <img {...props} 
      src={`${process.env.PUBLIC_URL}/images/${props.src}`}
      style={ {maxWidth: '75%'} } /> 
  }

  return (<div><ReactMarkdown 
      source={pageItem.src}
      renderers={{
        image: Image
      }}/>
    </div>);  
}

export default MarkdownRenderer;
