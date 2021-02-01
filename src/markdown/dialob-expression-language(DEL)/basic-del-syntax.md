### Dialob Expression Language for non-programmers

Let's think about DEL in terms of simple grammar. All sentences have a subject and a verb.

A subject is what the sentence is about.  
A verb shows the action in the sentence. 

Let's see an example first:

"A customer's age is at least 21."

In this sentence, _customer_ is the subject, and _is_ is the verb. In Dialob, you will be writing expressions both similar and more complex than this, which will comprise the core of your form logic.  So, let's "translate" this English sentence into DEL to see what it looks like. 

For one of our form questions, we need to validate that a customer is at least 21 years of age, because if he/she is younger than 21, we cannot sell certain products. In DEL, you can write this expression as follows:

`customerAge >= 21`

In this example, `customerAge` is the Request ID (subject), `>=` is the logical operator (verb), and "21" is the value that we are to validate against.  We will revisit these terms shortly.

### Syntax of a DEL expression: Examples

A DEL expression is basically an **If/Then statement**.  The "If" part is written by the user, and the "Then" part represents the result of the expression. The "then" part can evaluate to `true` or `false` based on how the user writes the "If" part.  For example, here we have two questions. The second question should only appear if the user specifies in the previous question that his/her age is greater than 25. 

```javascript
question1:  How old are you?
Answer1: 25

question2: Are you married?
Visibility Rule: question1 > 25 
```

Here, `question1 < 25` is the "if" part of the DEL expression. The "then" part is implied.  **If** the user enters his age as 26, **then** the statement will evaluate to true, and **then** this Question 2 will be displayed. However, **If** the user enters his age as 16, **then** this statement will evaluate to false, and **then** Question 2 will not be displayed.


A DEL expression can have several basic parts:

* [Request ID](https://docs.dialob.io/dialob-expressions/#what-is-request-id) or reference to a request ID (not required to be used in `Required` fields)
* [Logical operator](https://docs.dialob.io/dialob-expressions/basic-del-operators/)
* [Reserved word](https://docs.dialob.io/dialob-expressions/del-functions-reserved-words/)
* [Function](https://docs.dialob.io/dialob-expressions/del-functions-reserved-words/)

In the following expression, we can see three of these elements:

`text1 = "happy"`  

`text1` is the Request ID  
`=` is the logical operator  
`"happy"` is the String value we wish to validate against  

**NOTE: "String" is a programming term which means "text". Text can be any character, including punctuation, letters, and numbers.**

`text1` can be thought of as the subject, `=` is the verb (is / is equal to), and `"happy"` is akin to the condition.

Let's look at some more examples:

`age > 25 and favouriteColour = "green"`  

In this expression, we have two Request IDs: `age` and `favouriteColour`. There are two logical operators: `>` and `and`.  There are also two predicate expressions: 25 and "green".

This sentence can be "translated" into English as the following: "**If** age is greater than 25 and favourite color is green, **then**..."  

### Response types and punctuation

In the examples above, you might have noticed that some elements were surrounded by quotation marks and others were not.  Here is the explanation:

**No quotation marks**: If you are referencing a number, there are no quotation marks around the number.

`numberOfCats >= 35`  

**Quotation marks**: If you are referencing a String (text), the text has to have quotation marks around it.

`catName = "Tiger"`

**Referencing a particular selection from a Choice list**: If you want to reference a particular choice that a user selected from a `Choice` drop down list, the ID of the choice must be surrounded with quotation marks and the requestID of the question to which the choice list is attached must be in the beginning of the expression.

`question1 = "opt1"` **Translation**: The selection from question1 must be opt1.

**Referencing more than one selection from a Choice list**: If you want to specify more than one predicate (answer), you still need quotation marks around the individual answers, but all of the answers must be grouped and surrounded by parenthesis.  

`coloursList = ("green", "orange")` **Translation**: The selection from coloursList must be green OR orange.  

DEL expressions do not end with any punctuation like full stops or semi-colons.

For more examples of writing DEL expressions with different response types like `Survey`, `Multi-choice`, `Choice`, etc., [click here](https://docs.dialob.io/dialob-response-types/working-with-types/)

### Using reserved words

Reserved words function as "verbs" in DEL expressions. They will go after the "subject" of the sentence (Request ID).  

Here are some examples:

`text1 is answered and text1 is valid` **Translation**: If the question whose ID is text1 has been answered **and** the answer to text1 is valid, then...  

`survey4 not in "cat"` **Translation**: If the user does NOT select "cat" from the survey question whose ID is survey4, then...

The next example shows a validation rule for multiple selections from a mult-choice list:

`carsOwned in ("Opel", "Renault", "Audi")` **Translation**: If the question whose ID is carsOwned has been answered by the user, who selected either Opel, Renault, or Audi....  

For a complete list of the current Dialob reserved words, [click here](https://docs.dialob.io/dialob-expressions/del-functions-reserved-words/#reserved-words)

### Using functions

Functions are statements that perform actions. A DEL function is a reserved word followed by parenthesis `( )`.  The word will trigger an action, and this action will be performed on whatever is inside the parenthesis. An example function is as follows:

`wash()`  

**Translation:** The `( )` show that this is a function (action). However, there is nothing inside the parenthesis for our wash function to actually wash. As it is written, this function will simply wash, but becasue we haven't defined what it will wash, it will just wash in a generic sense.  So, let's add something to wash.

`wash(laundry)`  

Now, our function will perform the action of wash on the object of laundry.  Functions in DEL work the same way. Here are some real examples:

`lengthOf(text1)`  **Translation**: This function will check the length of the question whose ID is text1.  

`lengthOf(text1) > 5` **Translation**: This function will check that the length of text1 is greater than 5 characters.

Not all functions need to have anything entered into the parenthesis. For example, the function `now()` will simply fetch the current system time.  

For more information and examples of DEL's functions, [click here](https://docs.dialob.io/dialob-expressions/del-functions-reserved-words/#existing-functions)

### Summary

* DEL expressions resemble traditional grammar and have a subject (Request ID), verb (operator or function), and condition (elements or values to compare against or evaulate against).
* DEL reserved words operate similarly to verbs (is answered, is not answered, is valid, etc.) or connecting words (and, or).
* Functions are actions. Functions are reserved words followed by parenthesis. The thing you want to perform the action on goes into the parenthesis. Not all functions require inputs in the parenthesis. 
* A String type is the same as a "text" type, which includes letters, numbers, and punctuation.
* DEL expressions do not end in any punctuation such as full stops or semi-colons.
* DEL expressions are if/then statements, where the **if** part is written by the user, and the **then** part is handled and evaluated by Dialob Manager

