### Introduction

**DEL** comes with a set of inbuilt functions that help in the creation of dialog logic. These functions are built via Java and Groovy and are automatically loaded into the dialog context when creating a new dialog.

**DEL** function library is continuously being improved, and it is possible to extend it.

### Existing DEL functions: {#existing-functions}

* **`today()`**: Gets the system date (where **Dialob Manager** is deployed) in ISO format "yyyy-mm-dd". Return type is *Date*.  

* **`now()`**  Gets the system time (where **Dialob Manager** is deployed) in ISO format "hh:mm:ss.sss". Return type is *Time*.

* **`lengthOf(*Text*)`**: Provides the length of *Text* type. White spaces before and after the response are counted. Return type is *Number*.

* **`isLyt(*Text*)`**: Checks if a given input is a valid FI company ID. Format is nnnnnnnn-n (for example, 12345678-3). Return type is *Boolean*.

* **`isHetu(*Text*)`**: Validates if given FIN personal ID (Hetu) is valid. The format of ID is ddmmyy-nnnl. Return type is *Boolean*.

* **`birthDateFromHetu()`**: Calculates a birthday from FIN personal ID (Hetu). Return type is *Date*.

* **`count(*Multi-choice type*)`**: Provides the number of selected items of **Multi-choice** type of request. Return type is *Number*.

**NOTE**: Although the list of inbuilt functions can be extended via Java or Groovy, users should consider using service requests instead as an alternative to functions. This especially true in cases where the scope of functions is growing larger and more complex.  

**REMINDER**: _Rules for visibility and requirement are read-only within the question itself. They can be edited by clicking inside a question to make it active and then editing them in the field editor window located at the bottom of the screen. For more information, see_ [Basic Logic Building: Where to write rules](https://docs.dialob.io/dialob-expressions/logic-building/#where)

### DEL reserved words summary table

There are three basic categories of reserved words used when writing logic expressions in DEL: **Logic-building**, **time and date**, and **language specification**.

Language specification follows ISO-639-1 two-character abbreviations. [See list here](https://www.wikimass.com/html/language-code)

| Logic-building    |      Time and Date  |  Language       |
|-------------------|---------------------|-----------------|
|  `and`            |  `day`              | `language = ''` |
| `answer`          |  `days`             |                 |
| `answered`        |  `hour`             |                 |
|  `false`          |  `hours`            |                 |
| `in`              |  `minute`           |                 |
| `is`              |  `minutes`          |                 |
| `lengthOf`        |  `now()`            |                 |
| `matches`         |  `second`           |                 |
| `not`             |  `seconds`          |                 |
| `or`              |  `today()`          |                 |
| `true`            |  `week`             |                 |
| `valid`           |  `weeks`            |                 |
|                   |  `year`             |                 |
|                   |  `years`            |                 |
