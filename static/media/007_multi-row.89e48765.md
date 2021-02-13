# Multi-row type

## Quick Summary

* Multi-row creates an inline row of any number of input fields
* Multi-row response type: TODO
* The number of rows in a multi-row element directly corresponds to the number of input fields created.
* A visibility-logic example can be seen at the bottom of this page


---

## Overview

Multi-row creates an inline row of any number of input fields. The number of input fields created will determine how many rows the multi-row input will consist of.  

Below is an example of a multi-row input with three input fields.

**Composer side**

![Multi-row composer side](types/multi-row-composer-example.png)

**Filling side**

Note the "Add new" button. This will add as many identical rows as needed.

![Multi-row filling side](types/multi-row-filling-example.png)

**Filling side after selecting "Add new" row multiple times.**

![Multi-row filling side](types/multi-row-filling-example2.png)


---

### Creating a multi-row response 


**To create a multi-row group:**

1. Create a multi-row group to contain your response: Select "Add item" --> "Structure" --> "Multi-row group"
2. Create the label(name) for the multi-row group, which will serve as the prompt for the user on the filling side.
3. Create the input fields: The input fields created here will be the visible fields on the filling side.

![Multi-row](types/multirow1.png)

---


![Multi-row filling side](types/multirow2.png)

---

## Visibility-logic example

### Showing an additional field within a multi-row type depending on a previous answer 

In this example, we want to show a particular field within a multi-row item only if the user selects a particular boolean value.

* We create a multi-row group with three input fields (two text fields and one boolean). 
* We write a visibility rule to trigger the visibility of a fourth field (`list1`, a choice menu), if the user answers "Yes" to `boolean1`. 

Our items are as follows: 

`text2`: First Name  
`text4`: Last Name  
`boolean1`: Do you wish to be added to our mailing list?  

...if the user answers "yes".... then show

`list1`: Please select the topic you are most interested in.  
Visibility rule: `boolean1 = true`  

**Example screenshots**

Composer side

![Rowgroup visibility](types/rowgroup-visibility1.png)

Filling side

![Rowgroup visibility](types/rowgroup-visibility2.png)










