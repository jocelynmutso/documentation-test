# Choice type

## Quick Summary

* Choice type functions with an attached list
* A Choice return type will be an ID of selected row in the list
* It allows users to choose only one option from the list
* Creating a Choice and a Multi-choice type follows the same process
* Typical validation examples can be seen at the bottom of this page


---

## Overview

Choice type utilises a global or local list to populate a single-choice selection menu.

---

### Creating a new choice response 


**To create a Choice type, follow the steps of creating a multi-choice input type:**

1. Create a group to contain your choice response: Select "Add item" --> "Structure" --> "Group"
2. Create the choice input item: Select "Add item" --> "Inputs" --> "Choice"
3. Create or apply global or local list which will form the individual choice items: Select the hamburger icon in the top right corner of the question window and select "Options". You will then be given the option to apply a global list or create a local list.

Below is an example of a choice type on the filling side. The choice list has four items, and their associated IDs are `opt1`, `opt2`, `opt3`, `opt4`.

![](types/choice1.png)

---

## Typical validation example

`question1 = "opt1"`  
Evaluates true when the return value of question1 is opt1.

`question1 in ("opt1, "opt3", "opt4")`  
Evaluates true when the return value of question1 is one of the following: opt1, opt3 or opt4 possible *Choice* key values.

`question1 not in ("opt1", "opt3", "opt4")`
Evaluates true when the return value of question1 is NOT one of the following opt1, opt3 or opt4 possible *Choice* key values.

To write rules to evaluate choice responses, write the ID of the choice question you wish to evaluate against, followed by the `=` operator, ending with the ID of the response in `" "`.  

Example: `question = "id1"`

To evaluate against multiple different choice responses, write the ID of the choice question followed by the `in` keyword and the IDs to evaluate against, in parenthesis and surrounded by quotation marks:  

Example: `question in ("id1" , "id2").`
