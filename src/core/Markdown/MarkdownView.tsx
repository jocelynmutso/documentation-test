import React from 'react';
import ReactMarkdown from 'react-markdown'
import LinearProgress from '@material-ui/core/LinearProgress';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import Renderers from './Renderers';
import { Service, ShellContext } from '../';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

type AnchorRef = {
  name: string;
  value: React.RefObject<HTMLSpanElement>;
}

interface MarkdownViewProps {
  pageItem: Service.PageItem;
}


const MarkdownView: React.FC<MarkdownViewProps> = ({pageItem}) => {
  const { nav } = React.useContext(ShellContext);
  const classes = useStyles();
      
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
    nav.handleOpen({from: pageItem, to: anchor});
  };
  
  // Scroll to when markdown is loaded
  React.useEffect(() => {
    if(nav.current.anchor) {
      const found: AnchorRef[] = anchorRefs.filter(r => r.name === `{#${nav.current.anchor}}`);
      if(found.length > 0 && found[0].value.current) {
        const current = found[0].value.current;
        const top = current.getBoundingClientRect().top;
        window.scrollTo({top: top-80, behavior: "smooth"});
      } else {
        console.log("md not loaded yet", pageItem.markdown);
      }
    }
  }, [nav, anchorRefs, pageItem.markdown])
 
  
  return (<div>
    <div className={classes.root}>
      <Fade in={!pageItem.markdown}>
      <LinearProgress color="secondary" />
      </Fade>
    </div>
  
    { pageItem.markdown ? (<ReactMarkdown 
        source={pageItem.markdown}
        plugins={[Renderers.ViewPlugin]} 
        renderers={{ 
          image: Renderers.Image,
          link: (props) => Renderers.Link(onAnchorClick, props),
          text: (props) => Renderers.Text(createAnchorRef, props) 
        }}/>) :
      undefined
    }

  </div>);
}

export default MarkdownView;