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


