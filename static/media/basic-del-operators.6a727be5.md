Below is an explanation of the basic DEL operators, which includes comparison operators, logical operators, and basic operations to be used with input types and default, built-in DEL functions.

### Comparison Operators

* **=**: **Equal to** is valid with all default Response types

* **!=**: **Not equal to** is valid with all default Response types

* **>**, **<**: **Greater than** and **Less than** are valid with Integer, Decimal, Date and Time Response types

* **>=**, **<=**: **Greater than or Equal to**, and **Less than or Equal to** are valid with Integer, Decimal, Date and Time Response types

### Basic Logical Operators

* **and**: To combine a set of comparisons for evaluation as one entity

* **or**: To evaluate a set of comparisons as separate entities

* **in**: Checks if a given set of unique key(s) is found in the list to which it is compared. Valid Response types are Choice and Multi-choice

* **not in**: Checks if a given set of unique key(s) are found in the list to which it is compared. Valid Response types are Choice and Multi-choice

### Advanced Logical Operators

* **is answered**: Checks if a given request has a response.  Useful in cases where visibility of a particular question is based on whether a previous question has been answered on the filling side.

* **is valid**: A special comparison that checks if all Required and Validation conditions are passed for a given, answered request. `is valid ` can be used in a situation, for example, to define that a particular page, group, or question will not be displayed until all Required and Validation errors have been addressed and will only be displayed **while** the validation and required conditions **are being met.**  

**How are `is valid` and `is answered` different?** The behaviour of these two operators can be seen in how questions are displayed on the filling side. 

* `is answered` can be used in situations where a request field is to be displayed **only when a response to a previous question is entered, regardless of whether it passes validation rules**, i.e.: _it does not matter if the previous response's validation rule has been met._  The question field will remain visible as long as there is some data entered in the previous response field.
  * Example: `vatNumber is answered and europeanCountries = "germany"` will cause a response field to appear as soon as there is some data entered into VAT number field and "Germany" has been selected from a list.  If VAT number field is deleted by the form filler or "Germany" is deselected from the list, the response field will also disappear until data is entered again in VAT field and "Germany" is selected.

* `is valid` can be used in situations where a request field will **only** be displayed **while a previous response is currently entered _and_ that response _is currently passing_ all validation rules.** If the response is edited and no longer matches validation rules **or** that response is deleted, the response field with `is valid` in its validation/visibility will disappear. It will only appear again once validation / required rules have been met.
  * `vatNumber is valid and list1 = "estonia"` will cause a response field to appear **only as long as** an entered VAT number is passing validation **and** "Estonia" is currently selected from a list. If either condition is altered, the field in which this validation/visibility rule is written will disappear until the conditions are met again.

---

#### Using keywords in writing the validation and visibility rules for responses

To validate the response of given a request, the user can create validation logic similar to that which is written to control Visibility or Required behavior for a dialog.  The above keywords can be used in both validation and visibility logic.

NOTE that a validation has its own, special variable, reserved for only its usage, which holds the value of Response. The Answer type is same as the Request type.
