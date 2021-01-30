# Date type

## Quick Summary

* Date type creates a date picker on the filling side
* Date type returns a date in the format of “yyyy-mm-dd”. See more ISO Date.(LINK)
* Typical validation example can be seen at the bottom of this page

---

## Overview

Date type creates a date picker in the form of a calendar on the filling side:

![date picker](types/date-picker.png)

---

## Creating a new date response 


Creating a new Date response works in the same way as other types:

1. Select "Add item" --> "Structure" --> "Group"
2. Select "Add item" --> "Inputs" --> "Date"

---

## Typical validation example


A typical use case for Date type is verification that a user-selected date is **not** in the past. This operation can be accomplished with the `today()` function and the following DEL notation entered into the date response type validation field:

`responseId < today()`

In the following case, our response id is `date1`, and the expression is validating whether `date1` is **earlier** than today's date:

`date1 < today()`

![date validation one](types/date-in-past1.png)

This validation expression will trigger our validation message when a user selects a date in 1995:

![date validation two](types/date-in-past2.png)

