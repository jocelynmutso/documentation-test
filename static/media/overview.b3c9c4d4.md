# Logic building overview

##### What's on this page:

[Dialob Expression Language (DEL) and rule writing](#del)  
[Where to write rules](#where)  
[Visibility and Requirement rules](#visibility-requirement)  
[Validation rules](#validation)  

### Dialob Expression Language (DEL) and rule writing {#del}

DEL is a powerful and expressive language which puts many of Dialob's most powerful features at your command through the writing of rules and expressions. Using DEL is straightforward, even for users with no programming experience, and learning to use it unlocks a range of dialog behaviors resulting in a rich end-user experience.  

There are three basic types of DEL rules:

* **Visibility Rules**: Show or hide questions based on previous answers or other conditions
* **Requirement Rules**: Require that a question be answered before form can be completed
* **Validation Rules**: Check that input on the filling side conforms to the stipulated format

The following examples with explain where to write DEL rules and demonstrate various common use cases.

---

### Where to write rules {#where}

The type of rule will determine where in Composer you need to write it.

* **Visibility Rule**: 
  * For individual responses: Written directly into the response itself
  * For list items: Written at the bottom of the Lists window (URL TO GLOBAL LOCAL LISTS)

* **Requirement Rule**: Written directly into the response itself

* **Validation Rule**: Written in the rule editor window at the bottom of the Composer screen

---

### Visibility and Requirement rules {#visibility-requirement}

**Visibility rules** determine when and if a particular question is shown on the filling side. What determines this is usually based on the answer to a previous question.  For example, if a user selects "other" from a drop-down list, a subsequent text field can be made to appear for collecting additional information.

**Each page, group, list item, and question can have up to one visibility rule each.**

**Requirement rules** determine whether a question must be answered before proceeding to the next page or completing the form.  Requirement rules have a default value of `false`, which means that the question is not required to be answered.  Simply writing `true` in the Requirement field is enough to make it universally required without dependency on any other question.

**Each page, group, and question can have multiple requirement rules.**

Visibility and Requirement rules are written into the rule editor at the bottom of the screen or window.

Visibility and Requirement rules cannot be edited within the question itself as these fields are "read-only" within the question: The editor window at the bottom of the Composer screen must be used.  The rule editor will display the fields of the currently active question.

### Evaluation of Visibility and Requirement rules

When considering how to write visibility and requirement rules to be triggered at the appropriate times, think of their evaluation in terms of “Answer MUST be”.  See these examples below:

1. To trigger `text2` visibility, the answer to `boolean1` MUST BE true.

![Writing visibility](/images/visibility-rule1.png)

2. To make `text2` visible AND required, the answer to `boolean1` MUST BE true.

![Writing visibility](/images/visibility-rule2.png)

**To write a visibility or requirement rule for an active question, use the rule editor window at the bottom of the screen.**

![Writing logic](/images/writing-logic1.png)

**To write a visibility rule for a list item, use the "eye" icon next to the list item ID in the Global List modal.**

![Writing logic](/images/list-visibility1.png)

**To write a requirement rule for an active question, use the editor window at the bottom of the screen.**

![Boolean and Visibility](/images/required-rule1.png)

In this case, text2 will only be a required field if the response to boolean1 in the previous field is `true`. 

---

### Validation Rules {#validation}

Validation rules ensure that the data recorded on the filling side matches the requirements. Dialob matches the filling side data against the validation rule written on the Composer side, and if there is a discrepancy, a validation message will appear and alert the user.  The validation message gives additional information to the user to assist in entering a conforming response.

Validation rules are edited directly within the active question. They are not editable within the editor window at the bottom of the screen.

### Evaluation of Validation rules

To make a validation message appear to the user on the filling side, the DEL rule must evaluate to `TRUE`.  Therefore, the logic works opposite to visibility and required logic. Validations can be thought of as “Answer CANNOT be” whereas visibility and requirement can be thought of as “Answer MUST be”.

**In other words, an evaluation of`TRUE` triggers the validation message and prevents the user from continuing to the next page of the form, whereas `FALSE` will not trigger the message and will allow the user to continue filling the form.**

See these examples below:  

![Personal code validation length](/images/personal-code-validation.png)
![Personal code validation length](/images/personal-code-validation2.png)

For another example of validation rule writing, see [this section](https://docs.dialob.io/introduction/regular-expressions/#input-regex)
