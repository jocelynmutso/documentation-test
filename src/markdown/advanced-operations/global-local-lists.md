##### What's on this page:

[Use cases of lists](#use-cases)  
[Creating a Global list](#creating-global-list)  
[Creating a Local list](#creating-local-list)  
[Setting list visibility rules](#list-visibility)  
[Using a List in a Choice or Multi-Choice Response Field](#using-list-choice-multichoice)  
[Using a List in a Survey Group or Survey Group (Vertical) Response Field](#using-list-survey-group)  

### Use cases of lists {#use-cases}

* Populate a drop-down menu
* Create survey button options

A **global list** exists independently from specific response fields, which means that it is not tied to any specific question and can easily be reused. Any changes made to a global list will automatically be updated in all of the questions which use that list. Use a global list for drop-downs if the intent is to reuse the same list many times in different questions. For example, if a form requires the repeated reuse of a drop-down menu comprised of the same generic sports cars, a global list is the best choice.

A **local list** is bound to the response in which it is created. Changes to local lists will be reflected only within the question where they were created. Use a local list if the goal is to simply create a one-time drop-down which is bound to a particular response field and will only apply to that particular question. For example, if a form requires one specific list of Italian sports cars and only one question will ask the user about these cars, a local list is the best choice.

### Creating a global list {#creating-global-list}

1. Select "Lists" option from the top menu of the Composer screen.
2. Create a new list by selecting "Add new list".
3. Give the list a name
4. Give the list items their keys and texts

* **Name** is the name of the list itself and is used by the form creator on the Composer side to identify the list.
* **Key** is the request ID and must be manually created by the form creator (at this time, list keys are not auto-generated). Keys must follow the [Request ID rules](https://docs.dialob.io/dialob-expressions/#request-id-rules) for creation of IDs.
* **Text** is the actual words / sentences / numbers that the form filler will see when selecting an item from the list.

### Setting visibility rules for list items {#list-visibility}

* To write a visibilty rule, click the "eye" icon to the left of the item's key. A gray eye indicates that no rule exists, whereas a black eye indicates that a rule does exist.
* The rule is edited at the bottom of the list modal.
* Visibility rules can refer to ANY response ID in the Dialog except for attributes inside of a multi-row element.

For more information on writing visibility rules, see [Basic Logic Building and Rule Writing](https://docs.dialob.io/dialob-expressions/logic-building/)

![List](/images/list-visibility1.png)

**NOTE:** Next to the list name, you can utilise the `Users` option as a quick way to see how many responses are using this list and to identify unused lists.

### Creating a local list {#creating-local-list}

Local lists are created **at the response level** or **at the group level**.

* `Choice` and `Multi-choice` local lists are created at the response level.

* `Survey Group` and  `Survey Group (Vertical)` local lists are created at the group level.

Click the hamburger icon in the top-right corner of the response editor. Then select "Options". Select "Create new local list".  The process of creating a local list creation is identical to that of a global list.  The new local list will automatically be inserted into the question once "OK" is selected.

---

### Using a list in a Choice or Multi-Choice response field {#using-list-choice-multichoice}

Lists used in combination with `Choice`or `Multi-choice` types must be inserted **at the response level**.  
Lists used in combination with `Survey Group`or `Vertical Survey Group` must be inserted **at the group level**.

1. To use a list in a `Choice` or `Multi-choice` response, insert the list **at the response level**. Create a group, then create a response of type `Choice` or `Multi-choice` within that group.
2. Click the hamburger icon in the top-right corner of the response editor. Then select Options. Select the desired list.
3. Preview the filling side.

![List 4](/images/list4.png)

![List 5](/images/list5.png)

![List 6](/images/list6.png)

![List 7](/images/list7.png)

**NOTE**: There is currently no external or visual indication that a response has a list attached to it. To check whether a response has a list bound to it, click the hamburger icon, then "Options".

---

### Using a list in a Survey Group or Survey Group (Vertical) response field {#using-list-survey-group}

Creating a survey question is done at the **group level** through the creation of a `Survey Group` or `Survey Group (Vertical)`.  

A complete survey question is comprised of three basic parts:

* A survey group (general container for the survey question)
* `Survey item` input type to provide the survey questions within the survey group
* A **global or local list** to provide the survey responses from which users can select

In the following example, a survey about user opinions on car brands is created.  

1. Create a survey group by selecting "Add item/Structure/Survey Group".
2. Inside the survey group, create Survey Items. For this example, the Survey Items are the car brands we will ask opinions on.
3. Create the list to populate the Survey Responses. The list will comprise the range of opinion choices for the user to select.
4. Insert the list into the Survey Group by selecting the hamburger icon at the top-right of the **group**.
5. Preview the filling side.

![Survey](/images/survey3.png)

![Survey](/images/survey5.png)

![Survey](/images/survey2.png)

![Survey](/images/survey7.png)

![Survey](/images/survey6.png)
