# Survey type

## Quick Summary

* A complete Survey response type is comprised of three parts: Survey group, survey options, and survey inputs
* Survey buttons can be horizontally or vertically arranged
* Follow the (visual) guide below to create a Survey response type.
* Several typical validations associated with Survey types can be found at the bottom of this page

---

## Overview  

Survey type uses radio buttons to collect input from users. Below is an example:

![Survey List Creation](types/survey-filling-side.png)


Survey types function a bit differently than other types.  For example, where a **Text** response type is located within a group which can contain any number of various response types, a **Survey** response type is the group itself. 

**A complete Survey response type is comprised of three parts:**

1. The **survey group**, which can be thought of the "question" itself.
2. The **survey options** which are created with a global or a local list. 
3. The **survey inputs**, which are text fields. 

In summary, one survey group is the equivalent of one survey "whole" encompassing these three elements. This example below illustrates the three cohesive elements of a Survey response type as they appear on the filling side.

![Survey List Creation](types/survey-filling-side-b.png)

---

## Creating a survey group

A Survey response type is created as a Survey Group or Survey Group (Vertical). 

To create a survey:

* Click "Add item"
* Select "Structure"
* Select "Survey Group" or "Survey Group (Vertical"
* Give your survey question a name by writing in the Survey Group label field
* Create a global/local list and attach it to the Survey group via the Survey Group-level hamburger icon + "Options" hamburger.
* Create survey inputs by clicking "Add item" in the bottom left of the Survey Group, and select "Survey Item". Write your text accordingly.

Follow the guide below for screenshots of this process.

---

## Visual guide to creating a survey group
 
**Click the "Add item" button and select "Structure", then "Survey Group".**

![Survey Group](types/survey-group.png)

**Next, survey values are needed to populate the Survey group. Create a list (Global or local) which will comprise your inputs.**

![Survey List Creation](types/survey-input-list.png)

**Next, apply your list of survey values to a survey group**  

Click the hamburger icon in the top-right corner of the survey group. Then, select the list you wish to apply.

![Survey List Selection](types/select-survey-input-list.png)

**After that, create survey inputs by creating a survey input within the survey group**.

![Survey List Creation](types/create-survey-input.png)

**Several typical validations you will use**:

`question1 = "opt1"`  
Evaluates true when the return value of question1 is opt1.

`question1 in ("opt1", "opt3", "opt4")`  
Evaluates true when the return value of question1 is one of the following: opt1, opt3 or opt5 possible *Survey* key values.

`question1 not in ("opt1", "opt3", "opt4")`  
Evaluates true when the return value of question1 is NOT one of the following: opt1, opt3 or opt4 possible *Survey* key values.