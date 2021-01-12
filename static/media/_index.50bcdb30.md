### Custom features can be added per client request to Dialob's ever-growing list of out-of-the-box features

* **Logic-building**: Form creators can use rich yet simple logic-building expressions using _Dialob Expression Language (DEL)_ to control the flow of dialogs and, in turn, create a highly configurable end-user filling side.

* **Complex validation and visibility rules with built-in functions, DEL, or Java regular expressions**: Using DEL, intricate and detailed forms with interconnected visibility and validation logic can be created, resulting in a fully-customizable and highly-specific user experience on the filling side.  Dialob Composer can validate or hide/show any response field based on user inputs. Custom functions can also be created when needed.

  <!-- * NOTE: Pages and groups can have visibility rules attached, whereas individual response fields (questions) can have validation, visibility, and requirement rules attached. -->

* **Constant communication between front and backend = Saving on the fly, data security**: Because Dialob Composer (frontend) is in constant contact with Dialob Manager (backend), changes are saved as they happen. There is no fear of losing work. This provides the additional benefit of security: Data cannot be manipulated on the front end, because the backend does all the heavy lifting.  

* **Lists**: Lists can be created to populate multi-choice and choice questions and can be reused/edited as often as needed.  
  * **CSV support**: Upload and download valueset entries from Comma Separated Value files, which is useful for utilising lists created outside of Composer.

* **Custom Variables and Functions**: Using "Context Variables" and "Expression Variables", form creators can create their own custom variables and functions to suit their needs.  

  * A context variable is a user-created variable that can be used either to store the result of a function evaluation, to prefill form data on the filling side, or as a static value (age = 5).  

  * An expression variable is a user-created function that can be used to process inputs from dialog questions, and the product can be stored in a context variable. For example, an expression variable can be written to find the sum of two fields, (question1 and question2) which can then be stored in and later retrieved from a context variable (`question1 + question2 = {sum}`)

* **Pre-filling data**: Dialogs can be configured to populate the filling side with pre-selected data (questionnaires, context variables) where desired. This can be done in the integration layer of Dialob where Dialogs are instantiated.

* **Full visual customisation options**:
  * **CSS customisability**: Dialogs can easily be adapted to fit users' look and feel requirements.
  * **Markdown editing**: Text outputs such as group descriptions, question-level additional information (help text), and note outputs can be styled with simple [Markdown](https://www.markdownguide.org/)

* **Preview**: In preview mode, the user is able to see the form in its current state and test the functionality in real time from the perspective of the filling side.  

* **Downloading as JSON**: Dialogs can be downloaded as JSON files.

* **Versioning**: Dialogs can be tagged and versioned to create a history of changes. The Dialob lifecycle is managed either in a linear or a branched manner. 

* **Translations**: Dialog questions and list items can be individually translated to / from English, Finnish, Swedish, or Estonian languages. In addition, custom languages can also be created.

* **Saving changes**: Because Dialob Composer (frontend) is in constant contact with Dialob Manager (backend), changes are saved as they happen.
