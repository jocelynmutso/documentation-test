# Validation Rules

## Quick Summary

* Validation rules ensure that filling side data matches stipulated requirements. 
* Validations can be thought of as “Answer CANNOT be” whereas visibility and requirement can be thought of as “Answer MUST be”.
* Validation rules should be accompanied by Validation Messages, which are short texts providing additional information to users on the filling side, either to give additional information on certain questions or to help them fix any errors that don't pass validation.
* To make a validation message appear to the user on the filling side, the DEL rule must evaluate to `TRUE`

---

## Overview

Validation rules ensure that the data recorded on the filling side matches the requirements. Dialob matches the filling side data against the validation rule written on the Composer side, and if there is a discrepancy, a validation message will appear and alert the user.  The validation message gives additional information to the user to assist in entering a conforming response.

Validation rules are edited directly within the active question. They are not editable within the editor window at the bottom of the screen.

Validation rules go hand-in-hand with validation messages. A validation message 

### Evaluation of Validation rules

To make a validation message appear to the user on the filling side, the DEL rule must evaluate to `TRUE`.  Therefore, the logic works opposite to visibility and required logic. Validations can be thought of as “Answer CANNOT be” whereas visibility and requirement can be thought of as “Answer MUST be”.

**In other words, an evaluation of`TRUE` triggers the validation message and prevents the user from continuing to the next page of the form, whereas `FALSE` will not trigger the message and will allow the user to continue filling the form.**

See these examples below:  

![Personal code validation length](/images/personal-code-validation.png)
![Personal code validation length](/images/personal-code-validation2.png)

For examples of validations with Regex, see [this section](https://docs.dialob.io/introduction/regular-expressions/#input-regex)