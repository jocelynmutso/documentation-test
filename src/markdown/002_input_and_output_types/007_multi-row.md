# Multi-row type

## Quick Summary

* Multi-row creates an inline row of any number of input fields
* The number of rows in a multi-row element directly corresponds to the number of input fields created.
* [Multi-row-specific operations](#multi-row-operations): `sum of`, `min of`, `max of`, `any of`, `all of`
  * [Boolean operations](#boolean)
  * [Mathematical operations](#math)
* [Visibility-logic example: Showing an additional field within a multi-row type depending on a previous answer](#validating-multirow)

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

## Multi-row-specific operations {#multi-row-operations}

There are a number of DEL keywords that are specific to multi-row and perform various functions on multi-row elements:

Mathematical operations: Applicable only to `number` and `decimal` types

* `sum of`: Returns the sum of multi-row fields 
* `max of`: Returns the highest value of multi-row fields
* `min of`: Returns the lowest value of multi-row fields


Boolean operations: Applicable only to `boolean` types

* `any of`: Returns `true` if any boolean value in multi-row elements is selected `true`
* `all of`: Returns `true` only when **all** boolean values in multi-row elements are selected `true`

---

## Using multi-row-specific operations


### Boolean operations {#boolean}

This example demonstrates `any of` and `all of` in action.  To create this example, we need to do several things:

1. Create a multirow group
2. Create two multirow elements of type `Boolean`. The input IDs are `boolean1` and `boolean2`. 
3. Create two Expression Variables which will contain our `any of` and `all of` operations
4. Create two Note type outputs to provide additional information on the filling side

#### Steps 1 and 2: Create a multi-row group with two boolean inputs: boolean1 and boolean2

* id: `boolean1` field label text: Boolean1: I return true if any of my rows are true
* id: `boolean2` field label text: Boolean2: I return true only when ALL of my rows are true

![Multi-row booleans](types/multirow-bool1.png)


#### Step 3: Create Expression Variables

* id: `bool1` expression: `any of boolean1`
* id: `bool2` expression: `all of boolean2`

![Multi-row booleans](types/multirow-bool-variables.png)


#### Step 4: Create Note outputs within which to call Expression Variables

Create two different note outputs

id: `note1` text: Boolean1: Are any of my rows true? {bool1}
id: `note2` text: Boolean2: Are all of my rows true? {bool2}

![Multi-row booleans](types/multirow-notes.png)


#### Test

After adding three rows, we select true/false and view our note output. 

![Multi-row booleans](types/multirow-bool-filling.png)


### Mathematical operations {#math}

We can use `sum of`, `min of`, and `max of` with `number` and `decimal` types in the same way as we just did with Boolean types.

The screenshots below were produced following the same steps as we took to produce the Boolean multirow screenshots. 

Creating variables

![Multi-row math](types/multirow-math-variables.png)

Creating inputs

![Multi-row math](types/multirow-math-variables2.png)

Creating notes

![Multi-row math](types/multirow-math-notes.png)

Filling side test

![Multi-row math filling side](types/multirow-math-filling.png)


---

## Visibility-logic example {#validating-multirow}

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











