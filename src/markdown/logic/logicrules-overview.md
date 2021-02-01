# Introduction to the logic rules of Dialob Expression Language (DEL) 

## Quick Summary


* Dialob has three types of logic rules:
  * Validation rules
  * Visibility rules
  * Requirement rules
* The location where you write a rule depends on what type of rule it is
 
---

## Overview

DEL is a powerful and expressive language which puts many of Dialob's most powerful features at your command through the writing of rules and expressions. Using DEL is straightforward, even for users with no programming experience, and learning to use it unlocks a range of dialog behaviors resulting in a rich end-user experience.  

There are three basic types of DEL rules:

* **Visibility Rules**: Show or hide questions based on previous answers or other conditions
* **Requirement Rules**: Require that a question be answered before form can be completed
* **Validation Rules**: Check that input on the filling side conforms to the stipulated format
  * Validation can be done either with DEL logic or Java regex

---

### Where to write rules {#where}

The type of rule will determine where in Composer you need to write it.

* **Visibility Rule**: 
  * For individual responses, the visibility rule is written directly into the response itself
  * For list items, the visibility rule is written at the bottom of the Lists window

* **Requirement Rule**: This is written in the rule editor window at the bottom of the Composer screen.

* **Validation Rule**: This is written in the rule editor window at the bottom of the Composer screen. 

To write Requirement and Validation rules in the editor window, click on the response that you wish to edit. This will make the response the currently active item.  The rule editor at the bottom of the screen will then be populated with the Requirement and Validation rule editing fields. 

On the actual response level, Requirement and Validation rules are read-only.

See example:

![Rule editor](expressions/rule-editor.png)

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

