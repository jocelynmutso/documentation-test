The following types come built-in with Dialob:

#### Response types
 
* [Multi-choice Type](#multi-choice)
* [Choice Type](#choice)
* [Multi-row Type](#multi-row)
* [Survey Type](#survey)
* [Date Type](#date)
* [Time Type](#time)

#### Output types

* [Note Type](#note)

---

### Using DEL to validate response types: How validations work

When working with types, it is critical to understand how validations work.  Validation logic (rules) are written with DEL, and they are used to ensure that the data entered on the filling side matches your intended requirements. For example, if a field requires that a user enter an email address, validations can be used to ensure that user-entered data conforms to the desired format for email addresses.  If your form requires that a user enter his/her age, validation rules can be used to ensure that a user enters only a number value.

A validation rule should always be paired with a validation message. The validation message is intended to provide additional information on the filling side and is triggered to appear in the case that invalid information is entered into a field.  For example, if a field requires that a user enters his/her national ID number and he/she enters it in an invalid format, the validation message will appear to inform the user that the data is incorrect and prompt him/her to rewrite it correctly.


![Validation message example](/images/validation-message.png)

**Dialob validation messages will display if the result of the validation expression evaluates to `TRUE`.** If the validation expression returns `FALSE`, the validation message will not display! This has implications for the way in which validations are written.  

The form creator should ensure that validations created with DEL are written to evaluate to `TRUE` to trigger the display of the validation message.  

**The following examples show various use cases involving DEL and explain how the expressions will be evaluated.  This logic written with DEL can be applied to validations, visibility, and requirement fields.**

---

**The basic notation of _DEL_ is shown below:**

`Age < 19 and income1 <= 500`

`Age` and `income1` refer to unique variables that can be present in the context of a dialog.

`>`, `=`, `>=` are comparison operators to evaluate the variable values between each other or against constant values or return values of services or function calls.

`and` and `or` are logical operators that are used to bind together a set of comparisons. For example, *age < 35* **and** *incomeOne >= 7000* bind together a set of two comparisons.

---

### Working with _Multi-choice_ type {#multi-choice}

Multi-choice allows users the option of choosing one or more options from a list.

**To create a multi-choice type:**

1. Create a group to contain your multi-choice input type (Add item/Structure/Group).

2. Create the multi-choice input (Add item/Inputs/Multi-Choice).

3. Create or apply global or local list which will form the individual multi-choice items.

![Multi-choice](/images/multi-choice1.png)

After creating a group and a multi-choice input, click the hamburger icon in the top right corner of the question window and select `Options`. You will then be given the option to apply a global list or create a local list.

![](/images/multi-choice2.png)

Creating a list of input items:

![](/images/multi-choice3.png)

The filling side preview:

![Multi-choice](/images/multi-choice-after.png)

To write rules to evaluate multi-choice responses, use the ID of the question you wish to evaluate against, followed by the `in` keyword, and then the ID of the multichoice question.

Example: `"id1" in multichoice1`

`"opt1" in multichoice2 `  

Evaluates true when opt1 has been selected in multichoice2. In this case, Porsche corresponds with opt1.

`"opt1" not in question1 `  

Evaluates true when opt1 has NOT been selected in multichoice2.

`"opt1" not in question1 and "opt3" in multichoice2`  

Evaluates true when "opt1" has not been selected and "opt3" is selected in multichoice2. Note the value of "opt2" can be either one as it is NOT evaluated in this case.

![](/images/multi-choice4.png)

To validate the right number of choices within a given multi-choice request, use the `count( )` function and create validation logic to fit your needs.

![](/images/multi-choice-validation.png)

---

---

### Working with _Multi-row_ type {#multi-row}

Multi-row creates an inline row of any number of input fields. The number of input fields created will determine how many rows the multi-row input will consist of.  

_Multi-row on the filling side_

![Multi-row filling side](/images/multirow3.png)

**To create a multi-row group:**

Add item/Structure/Multi-Row Group

![Multi-row](/images/multirow1.png)

**Next, create the name of the multi-row group, which will serve as the prompt for the user on the filling side. Now, create the input fields: The number of input fields created here will be the number of fields visibile on the filling side.**

![Multi-row filling side](/images/multirow2.png)

---


---

### Working with _Date_ type {#date}

Date type creates a date picker in the form of a calendar on the filling side:

![date picker](/images/date-picker.png)

Creating a new Date type works in the same way as other types:

**First:** Add item/Structure/Group  

**Next:** Add item/Inputs/Date

A typical use case for Date type is verification that a user-selected date is **not** in the past. This operation can be accomplished with the `today()` function and the following DEL notation entered into the date response type validation field:

`responseId < today()`

In the following case, our response id is `date1`, and the expression is validating whether `date1` is **earlier** than today's date:

`date1 < today()`

![date validation one](/images/date-in-past1.png)

This validation expression will trigger our validation message when a user selects a date in 1995:

![date validation two](/images/date-in-past2.png)

[More examples with Date and Time reserved keywords](https://docs.dialob.io/dialob-expressions/del-functions-reserved-words/#time-date)

---


---

### Working with _Note_ type {#note}

**DEL** supports a simple way to dynamically change the content of *Note* type. This is done by referring to an existing **DEL** type inside a *Note* text using `{ }` as the identifier.

The variable can be a user-defined custom variable or a request type of variable.

On the Composer side:

![](/images/note-variables.png)

On the filling side:

![](/images/note-variables2.png)
