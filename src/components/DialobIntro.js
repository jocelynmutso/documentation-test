import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Doc } from './styles';
import { DocParagraph } from './styles/doc/Doc';

export default class DialobIntro extends React.Component {

  render() {
    return (<div>
      <Doc.H1>Dialob Composer User Guide</Doc.H1>
      <Doc.H2>Welcome to Dialob: A powerful platform for creating online dialogs (forms) and providing solutions for organisations in all sectors.</Doc.H2>
      <Typography paragraph>
      Dialob is a platform for creating and testing responsive dialogs and publishing them online. In the context of the Dialob platform, a dialog is both a form and a process. Creating with Dialob is a dynamic process wherein the word “dialog” is a representation of the constant communication between user inputs on the front-end and Dialob’s back-end processes, resulting in a constant “dialogue” between the system and the user throughout the creation process. In this way, Dialob constantly updates and saves user inputs on the back-end side and reflects those changes in near real time. The product and end result of the dialog process is a highly customizable form with validations, versioning, translation, and security built in, all tailored to a specific end-user requirement.
      </Typography>


      <DocParagraph>
      Dialob is a platform for creating and testing responsive dialogs and publishing them online. In the context of the Dialob platform, a dialog is both a form and a process. Creating with Dialob is a dynamic process wherein the word “dialog” is a representation of the constant communication between user inputs on the front-end and Dialob’s back-end processes, resulting in a constant “dialogue” between the system and the user throughout the creation process. In this way, Dialob constantly updates and saves user inputs on the back-end side and reflects those changes in near real time. The product and end result of the dialog process is a highly customizable form with validations, versioning, translation, and security built in, all tailored to a specific end-user requirement.
      </DocParagraph>
    </div>
    );
  }
}
