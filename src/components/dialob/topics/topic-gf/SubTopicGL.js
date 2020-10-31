import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown'

export default class SubTopicLM extends React.Component {

  render() {
    return (<div>
      <ReactMarkdown>
##### What's on this page:

[Use cases of lists](#use-cases)  
[Creating a Global list](#creating-global-list)  
[Creating a Local list](#creating-local-list)  
[Using a List in a Choice or Multi-Choice Response Field](#using-list-choice-multichoice)  
[Using a List in a Survey Group or Survey Group (Vertical) Response Field](#using-list-survey-group)  


      </ReactMarkdown>
    </div>);
  }
}
