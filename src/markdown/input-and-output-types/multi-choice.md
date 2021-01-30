# Multi-choice type

## Quick Summary

* Multi-choice type functions with an attached list
* A multi-choice return type will be a set of an ID of selected rows from the list
* It allows users to choose one or more items from the list
* Creating a Choice and a Multi-choice type follows the same process
* Several typical validations associated with multi-choice types can be found at the bottom of this page

---

## Overview  

Multi-choice type utilises a global or local list to populate a multiple-choice selection menu.

Below is an example of a multi-choice type on the filling side: 


![Multi-choice respone example](types/multi-choice-example.png)

---

## Creating a multi-choice response


**To create a multi-choice response, follow the steps of creating a choice response:**

1. Create a group to contain your multi-choice response: Select "Add item" --> "Structure" --> "Group"
2. Create the multi-choice input item: Select "Add item" --> "Inputs" --> "Multi-choice"
3. Create or apply global or local list which will form the individual multi-choice items: Select the hamburger icon in the top right corner of the question window and select "Options". You will then be given the option to apply a global list or create a local list.

---

## Visual guide to creating a multi-choice type

* **Create a group to hold your response.**
* **Create a multi-choice input.**
* **Write your group label and multi-choice label.**

![Multi-choice](types/multi-choice1.png)

**After creating a group and a multi-choice input, click the hamburger icon in the top right corner of the question window and select `Options`. You will then be given the option to apply a global list or create a local list.**

![Multi-choice](types/multi-choice2.png)

**Create a list of input items. Add visibility rules if desired.**

![Multi-choice](types/multi-choice3.png)

**The filling side preview**

![Multi-choice](types/multi-choice-after.png)

---

## Several typical validations you will use

To write rules to evaluate multi-choice responses, use the ID of the question you wish to evaluate against, followed by the `in` keyword, and then the ID of the multichoice question.

Example: `"id1" in multichoice1`

`"opt1" in multichoice2 `  

Evaluates true when opt1 has been selected in multichoice2. In this case, Porsche corresponds with opt1.

`"opt1" not in question1 `  

Evaluates true when opt1 has NOT been selected in multichoice2.

`"opt1" not in question1 and "opt3" in multichoice2`  

Evaluates true when "opt1" has not been selected and "opt3" is selected in multichoice2. Note the value of "opt2" can be either one as it is NOT evaluated in this case.

![Multi-choice](types/multi-choice4.png)

To validate/specify the number of choices within a given multi-choice request, use the `count( )` function and create validation logic to fit your needs.  The rule below will require the user to select no more than two options from the list.

![Multi-choice](types/multi-choice-validation.png)
