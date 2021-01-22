import React from 'react';
import ReactMarkdown from 'react-markdown'

import Renderers from './Renderers';
import { Service } from '../Service';


type AnchorRef = {
  name: string;
  value: React.RefObject<HTMLSpanElement>;
}

interface MarkdownViewProps {
  source: Service.PageItem; // markdown source code 
  anchor?: string; // scroll to anchor
  setLocation: (newLocation: Service.NewLocation) => void;
}

const MarkdownView: React.FC<MarkdownViewProps> = ({source, anchor, setLocation}) => {

  const anchorRefs: AnchorRef[] = React.useMemo(() => [], []);
  const createAnchorRef = (name: string): React.RefObject<HTMLSpanElement> => {
    const alreadyCreated = anchorRefs.filter(a => a.name === name);
    if(alreadyCreated.length > 0) {
      return alreadyCreated[0].value; 
    }
    
    const value: React.RefObject<HTMLSpanElement> = React.createRef();
    anchorRefs.push({name, value});
    return value;
  };
  const onAnchorClick = (anchor: string) => {
    setLocation({from: source, to: anchor});
  };
  
  // Scroll to 
  React.useEffect(() => {
    if(anchor) {
      const found: AnchorRef[] = anchorRefs.filter(r => r.name === `{#${anchor}}`);
      if(found.length > 0) {
        found[0].value.current?.scrollIntoView({behavior: "smooth", block: "start"})
      } else {
        console.log("md not loaded yet", source.markdown);
      }
    }
  }, [anchor, anchorRefs, source.markdown])
 
  
  if(!source.markdown) {
    return <div>Loading...</div>;
  }
  
  return (<div>
    <ReactMarkdown 
      source={source.markdown}
      plugins={[Renderers.ViewPlugin]} 
      renderers={{ 
        image: Renderers.Image,
        link: (props) => Renderers.Link(onAnchorClick, props),
        text: (props) => Renderers.Text(createAnchorRef, props) 
      }}/>
  </div>);
}

export default MarkdownView;