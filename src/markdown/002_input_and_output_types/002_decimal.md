# Decimal type TODO

## Quick Summary

* Decimal responses may be entered as whole numbers and as decimal values
* Decimal return type is a decimal number 
* Typical validation example can be seen at the bottom of this page TODO

---

## Overview

Decimal responses are used in cases where more precision is needed than whole numbers can provide:

See example:

![Decimal Example](types/decimal-example.png)

---

## Creating a new decimal response

Creating a new Number response works in the same way as other types:

1. Select "Add item" --> "Structure" --> "Group"
2. Select "Add item" --> "Inputs" --> "Decimal"

---

## Typical validation example TODO

### Ensuring a number falls within a specified range

In this example, we create a response where the user is required to enter a number between 1 and 10. If a response is not within that range, our validation message will appear. This example shows a situation where the input does not match the validation requirements.

Validation expression: `answer < 1 or answer > 10`

Validation message: "Number must be between 1 and 10, and your number doesn't fall in this range!"

Expected result: The user is going to enter a response of 15. This will fall outside of the acceptable range and cause the validation message to appear. 

**Example screenshots**

Composer side

![Number Validation](types/number-validation1.png)


Filling side

![Number Validation](types/number-validation2.png)

