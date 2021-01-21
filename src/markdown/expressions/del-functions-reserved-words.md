##### What's on this page?  

[Existing DEL functions](#existing-functions)  
[DEL reserved words and example use cases](#reserved-words)  
[General logic-building keywords in action](#general-logic)  
[Time and Date keywords](#time-date)  
[Date keywords](#date)  
[Time keywords](#time)  
[Language keywords](#language)  

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

### DEL reserved words and example use cases {#reserved-words}

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

For the following use cases, the reserved words have been separated into three categories: **General logic-building keywords**, **Time and date keywords**, and **Language keywords**. They have been grouped together here in ways which demonstrate how they work together in their typical use cases.

### General logic-building keywords in action {#general-logic}

`answer`, `answered`, `and`, `is`, `valid`, `not`, `or`, `in`, `true`, `false`, `matches`

`answer`: Refers to the answer of the current question. `answer` can not be used to reference the answer from a different question. 

![](/images/answer.png)

---

`answered`: Refers to the answer of a previous question.  

`and`: Used when joining two statements together. Both statements must evaulate to either `true` or `false`

`is`: Used in boolean logic calculations involving `answered` and `valid`

![](/images/isAnswered.png)  

---

`valid`: Used when showing/hiding/requiring/validating a field is dependent on a previous input being valid (passes validation rules). Used in combination with `is` and `not`

`not`: Used to negate an expression / part of an expression

![](/images/is-valid.png)

`or`: Used when specifying one given statement in an expression and excluding the other(s). One of the statements must evaluate differently than the others. 

**Example 1**: This visibility rule is written to be visible only if one of the two statements, separated by `or` returns `true`.

`Who is your current car insurance provider?`

`age > 18 or age is not answered`

**Example 2**

![](/images/or.png)

---
`in`: Used in combination with `Choice` or `Multi-Choice` type questions.  Evaluates to `true` if the answer(s) it refers to is/are selected from a list.

![](/images/in.png)

---
`true`, `false`: Used in evaluating boolean logic statements. Preceeded by `=` or `!=` operator.

**Example 1: Visibility rule**

A following question will be displayed if the answer to isHappy is yes (true)

_Question 1_: `Are you happy? Select 'yes' or 'no.'`  
_Answer evaluation_: `isHappy = true`

_Question 2_: `You are happy. You may continue with the survey.`  
`Please explain what makes you happy.`

**Example 2: Validation rule**

A question will not pass validation if the answer is false  

_Question 1_: `You must be 25 or older to participate. Are you 25 or older?`  
_Answer evaluation_: `answer != true`  

_Question 2_: `How did you hear about this competition?`

---
`matches`: Used when matching an input against a formula to see whether they are the same. Used in Regular Expression validations/visibility rules.

The following example shows a Java regex which validates that an input matches a date format (YYYY-MM-DD) and that if the month is April, June, September, or November, the input should match for between 1 and 30 days:

![](/images/matches.png)

**NOTE**: Why is the validation written as `answer not matches` if we are trying to use a regex to match a pattern?  

When using validations, the logic works opposite to visibility and required logic.  Validations can be thought of as "Answer CANNOT be" whereas visibility and requirement can be thought of as "Answer MUST be".

---

#### Time and date keywords and functions {#time-date}

| Time in Years, Months, Weeks, Days    |  Time in Hours, Minutes, Seconds  |
|---------------------------------------|-----------------------------------|
| `day`                                 |  `hour`                           |
| `days`                                |  `hours`                          |
| `week`                                |  `minute`                         |
| `weeks`                               |  `minutes`                        |
| `year`                                |  `second`                         |
| `years`                               |  `seconds`                        |
| `today()`                             |  `now()`                          |

**Time and date keywords** can be used to write logic connected to the following:

* **Date periods** (time in months, days, years)
* **Time durations** (time in hours, minutes, seconds)

**Time and date functions** can be used to return the system time and date to write logic in connection with the current time and date.

The `today()` function returns the system date in MM/DD/YY format.  
The `now()` function returns the system time in 12-hour format (hh:mm AM/PM): For example 8:58 AM.

<!--For example use cases, see [Working With Response Types and Structures](/content/response-types/working-with-types.md)-->

#### _Date_ type reserved words {#date}

Date type reserved keywords can be used for the following functionalities:

* Calculating and returning a duration of a time period between dates in years, months, and/or days

* Building logic to perform mathematical operations on dates such as adding time in months or subtracting time in days

* Building logic to validate that one date is earlier or later than another date

Date type words are frequently used in combination with the `today()` function.

##### Calculating date periods

**Basic operations**:  

* [Date] **-** or **+** [Date] => [Period]. The period format is "P**y**Y**m**M**d**D" where:

  * **P** marks that this type is a period of time
  * **y** is the difference in years  
  * **m** is the difference in months
  * **d** is the difference in days

* [Date] **-** or **+** [Period] => [Date]. Outcome is in the format "yyyy-mm-dd".

For example, the following will return the difference between two dates, `date1` and `date2`, in Years, Months, and Days in the P**y**Y**m**M**d**D format:

**Expression variable ID**: `{timeDifference}`  
**Expression variable value**: `date2 - date1`  
**Dates used for comparison**: `date1 = 05/11/2005` and `date2 = 10/24/2020`  
**Note output text**: `The time difference between date1 and date2 is {timeDifference}`  
**Return**: `The time difference between date1 and date2 is P15Y5M13D`

*In other words, this return value says that the time difference between these two dates is a **Period** of 15 **Y**ears, 5 **M**onths, and 13 **D**ays.*

##### Building logic to add or subtract years, months, or days

**Date period** can also be used to build logic with the following notation:  
 `1 years + 3 months + 14 days`

##### Validating that one date has occured before or after another date

`question1 > "2005-01-01" `  
Is true if question1 is later than the 1st of January, 2005.

`question1 + 4 years < "2005-01-01" `  
Is true if *question1 + 4 years* is earlier than the 1st of January, 2005.  

For example, if the answer to `question1` is "2000-01-01", then this would evaluate to true, as `question1 + 4 years`  would evaluate to "2004-01-01", which is earlier than "2005-01-01".

`question1  - "2005-01-01" > 1 year + 2 months + 10 days`  
Is true if *question1* is later than "2006-03-12".

`question1  in ("2005-01-01",  "2006-01-01", 2007-01-01")`  
Is true if *question1* is one of following dates: "2005-01-01", "2006-01-01" or "2007-01-01".

**Example 1**: Validating that, as of today's date, a client's age is at least 18 years old.

1. Add a new date input to capture client's birthdate.
2. Create expression variable for output: `today() > date3 + 18 years`. This will trigger the validation message if the client's date of birth is 18 years earlier than today's date.
3. Add an output `note` and insert the expression variable along with some contextual information:

```markdown
Customer birthdate is {date3}

Customer must be at least 18 years old to purchase this product.

Possibility to sell product to this customer is {isOver18}.
```

4. Preview behviour on filling side

![date expression variable](/images/date-expression-variable2.png)

![date expression variable](/images/date-expression-variable1.png)

**Example 2**: Validating that an entered date is both in the past and one day ago (checking for yesterday's date)

1. Create two inputs of type `Date`. date1 is for today's date, date2 is for yesterday's date.
2. Write your validation rule and validation message in date2.

**Validation message**: "Yesterday's date must be in the past, and it can only be one day ago!"  
**Validation rule**: `date2 <= date1 or date2 - date1 != 1 day`  

3. Preview and test.

![Date validation](/images/date-validation.png)

Form preview
![Date validation](/images/date-validation2.png)

---

#### _Time_ type reserved words {#time}

Time type reserved keywords work in the same way as Date type reserved words; accordingly, they can be used for the following functionalities:

* Calculating and returning a duration of a time period between times in hours, minutes, and seconds

* Building logic to perform mathematical operations on time such as adding time in hours or subtracting time in minutes

* Building logic to validate that one time is earlier or later than another time

Date type words are frequently used in combination with the `now()` function.

**Basic operations**:  

* [Time] **-** or **+** [Time] => [Duration]. Outcome is in the format "PT**hh**H**mm**M**ss**S" , "PT12H34M55S" where:
  * **P** marks that this is a period of time
  * **T** marks that the type of period is time
  * **hh** is the difference in hours
  * **mm** is the difference in minutes
  * **ss** is the difference in seconds

* [Time] **-** or **+** [Duration] => [time]. The outcome of time format is "hh:mm:ss"

For example, the following will return the difference between two times, `time1` and `time2`, in Hours, Minutes, and Seconds in the PT**hh**H**mm**M**ss**S format:

**Expression variable ID**: `{durationOfWorkday}`  
**Expression variable value**: `time2 - time1`  
**Times used for comparison**: `time1 = 08:00` and `time2 = 17:15`  
**Note output text**: `Your workday is {durationOfWorkday} long.`  
**Return**: `Your workday is PT9H15M long.`

*In other words, this return value says that the time difference between time1 and time2 is a **Period** of **Time** of 9 **H**ours, 15 **M**inutes.*

**Time duration** can be used also to build logic with the following notation:  
`8 hours + 30 minutes + 22 seconds`

Using **Time** type examples:

`question1 > "05:00"`  
Is true if *question1* is later than "05:00" (5 am).

`question1 + 2 hours + 30 minutes > "18:30"`  
Is true if *question1* is no earlier than "17:00".

**Example 3**: Checking one time against another time, validating that one is later than the other by a certain number of hours and minutes.

---

#### Language keywords {#language}

Using the ISO 639-1 standard, two-character language codes can be specified, which store the language that the current Dialob session is using. The `language` keyword can be used to write logic rules based on language. A list of two-character language codes [can be found here](https://www.wikimass.com/html/language-code).

In DEL, a language is designated with the keyword `language` followed by **equal to** `=` operator  or **not equal to** `!=` operator and completed with the two-character abbreviation.

`language = 'xx'`

Language specification is written into the visibility or required fields as an expression seen below:

`language = 'fi'` (Language is Finnish)  
`language != 'en'` (Language is not English)

**Example**

A form has two languages for the filling side: Finnish and English, depending on the client/user needs. Depending on the currently-displayed language of the form, note outputs will appear in Finnish or English.

![](/images/language-fi.png)

On the filling side, the note specified to appear if the form language is set to Finnish is displayed.

![](/images/languages-visibility.png)