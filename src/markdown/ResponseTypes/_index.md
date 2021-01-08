---
title: "Response Types, Output Types, and Grouping Structures"
draft: false
weight: 1800
---

### Response types

Dialob supports a variety of response types out of the box. The following default input types have the these response types:

* **Survey item**: Return type will be a key

* **Text**: Return type will be a string

* **Text box**: Return type will be a long string

* **Decimal**: Return type will be a decimal number

* **Number**: Return type will be an Integer number (whole number, positive, negative, or zero, no decimals)

* **Boolean**: Return type will be a Boolean value (true / false)

* **Date**: Return type will be a date in the format of "yyyy-mm-dd". See more [ISO Date](https://en.wikipedia.org/wiki/ISO_8601).

* **Time**: Return type will be a time in the format of "hh:mm:ss"

* **Choice**: Return type will be an ID of selected row in the list

* **Multi-Choice**: Return type will be a set of an ID of selected rows from the list

### Output types

* **Note**: There is no return value to note type. Note is used to provide additional / general information about a question on the filling side to assist users in answering questions.

### Question grouping structures

Creating dialogs (forms) in Dialog requires first creating a page. A page can be thought of as a container for sets of questions.  Inside a page, a group structure is created in which to hold sub-groups of inputs. Dialob currently supports several grouping schemes as detailed below:

* **Page**: General container for holding the _Group_ structure.  All groups of questions are located in pages.

  * **Group**: General container for holding questions. Groups have several input types, depending on the desired inputs on the filling side:

    * **Survey Group**: Used for survey input types. Creates a row of horizontal survey buttons whose inputs are derived from the contents of a Global or Local list.

    * **Survey Group (vertical)**: Used for survey input types. Creates a row of vertical survey buttons whose inputs are derived from the contents of a Global or Local list.

    * **Multi-row**: Creates multiple inline input fields.
