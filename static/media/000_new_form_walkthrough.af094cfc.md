# New form walkthrough 

Welcome to Dialob! In this guide, you will use Dialob Composer and learn how to create a simple dialog using structures, inputs, and response types. You will create a basic input validation, learn how to show/hide fields, and write a requirement rule for a question, all using Composer's built-in features and Dialob Expression Language, **DEL**.

After completing this new user guide, you will be familiar with Dialob's basic features and have a better idea how to organise your workflows while using the platform. Note that this basic guide does not include advanced features such as custom variables and complex validations, visibility, or requirement rules.

Let's get started in making our first dialog.  Below is a screenshot of the end-result we are going to build: A simple questionnaire to collect user personal data on foods and restaurant opinions.

![Complete form](/reference/complete-form.png)

To make this example, we will follow these steps:

1. [Create a new form](#new-form)

2. [Create a new page](#new-page)

3. [Create a new group](#new-group)

4. [Create a response (form question)](#response)

5. [Create list and apply it to a group / question](#list)

6. [Create a survey input](#survey)

7. [Write simple validation, visibility, and requirement rules](#rules)

8. [Preview your form](#preview)

---

### Step 1: Create a new form {#new-form}

All dialogs (forms) are built using Dialob Composer, the user interface that you see on the front-end side, and these dialogs are processed by Dialob Manager, which is the engine running in the background, processing all of your changes in near real-time. There is no need for a "save" button anywhere, as each change you make is automatically processed by Manager.

Let's begin our work with Composer by creating a new form.

![Create new form](/reference/create-new-form.png)

---

### Step 2: Create a new page {#new-page}

Pages form the base containers for all inputs in Dialob. Pages contains groups. Groups contain questions. To get started, click the `add` icon to create your first page.

![Create page](/reference/new-form-empty.png)

---

### Step 3: Create a group {#new-group}

Now that you have a page, you can create a group inside of it. Click the `Add item` button to add a "standard" group. The other forms of group -- _Survey group, Survey Group (Vertical), Multirow group_ -- will be discussed later.

![Create group](/reference/page-add-group.png)

---

### Step 4: Create a response (form question) {#response}

Now that you have a group, you can give the group a _label_. The label is the name or title of the group which will appear on the filling side above all the questions contained within that group. The group label can be left empty if you don't want to have any visible text as a group label. In our case, we want this group to have a visible label, called "Personal Data", since that is the nature of the question we will be asking the user.  

Next, let's create our first response (question). Click the `Add item` button in the bottom left corner of the Group window. Add a question of type Text.

![Create response](/reference/create-new-response.png)

You can see below that the tree view on the left side of the screen is automatically updated with groups and questions as you go. Our group label (title) has been updated with the name we have given it. `text1` is the default ID of the question we have just created and will be updated if we choose to rename this ID later on.  

![Create response](/reference/create-new-text-input.png)

Now, let's create our first question. Since this group is intended to collect personal data, it is logical that our first question should be a Text input to collect a user's full legal name.  In the `Text field label`, write your question: "Please enter your full legal name".

![Create response full legal name](/reference/full-legal-name.png)

For now, do not worry about filling in `Visibility`, `Required`, `Default Value`, or `Validation Rules`--they can be left empty.  

Let's preview this on the filling side. Click the `Preview` button in the top right of the Composer screen.  Note how the Group Label (title) is displayed above the question.

![Full legal name filling side](/reference/full-legal-name-filling-side.png)

Now, we have a text response field to collect someone's full legal name, but it would make more sense to collect each name individually, so as to create a clear differentiation between a first, middle, and last name. We will create a `Multi-Row` response type to collect these names individually.  

`Multi-Row` response types need to be created in a separate, `Multi-Row` group, which we will create now.

![Multi-row group](/reference/multi-row-group.png)

`Multi-Row` creates inline fields, and the number of inputs you add to the group will determine the number of input fields. For this demonstration, we will create three text fields for the collection of a user's first, middle, and last name.

Be sure to add a group label here, as the group label will serve as the question prompt to tell the user what to do.  In this case, our group label will be the following: "Please enter your full legal name".

![Multi-row group](/reference/multi-row-group-add-text.png)

Now, you should have something that looks like this:

![Multi-row group](/reference/multi-row-group-three-inputs.png)

On the filling side, the user will see this:

![Multi-row group](/reference/multi-row-group-three-inputs-filling.png)

Since we now have a `Multi-Row` group to collect a user's legal name, we do not need our first text input anymore, so it can be deleted. To delete, click on the hamburger icon in the top right corner of the desired question. In the picture below, we are deleting the entire group, since it holds only the one question that we don't want anyway. Groups and questions can be deleted from the hamburger icon. However, **keep in mind that there is no undo button!  Once a group or question has been deleted, the only way to get it back is to recreate it!**

![Delete question](/reference/delete-question.png)

Our dialog now has one question. Next, we will add our second, third, and fourth questions: A single-choice dropdown, a multiple-choice dropdown, and a survey question, respectively.

---

### Step 5: Create a list and apply it to a group / question {#list}

A single `Choice` input gives the user the option of selecting only **one** option from a list, whereas the `Multi-choice` input allows the user to select **one or more than one** input. 

_Note: For more advanced use cases, if you want to specify that the user must select a certain number of inputs from a `Multi-choice` question, this can be determined by writing a validation rule which includes your specification._

`Choice` and `Multi-choice` can be created within a "standard" group.

Let's create a group to house our two new questions:  `Add-item` --> `Structure` --> `Group`

Be sure to select the `Add-item` button which is **outside** of any existing group. If you select the `Add-item` button within a group, you will create a nested group within that group, which, in this case, is not needed.

![Add new group](/reference/add-new-group.png)

Give the group a label of "Favourite Foods".

![Add new choice type](/reference/new-group-choice.png)

Notice that, within the group, the `Choice` input type will produce a `List` ID. This is telling us that, to create the drop-down menu for the user to select from, we need to create a list.

To create a list, go to the upper menu bar and select `Lists`.

![Add new choice type](/reference/choice-make-list.png)

Select "Add new list".

![Add new global list](/reference/new-global-list.png)

In this example, we are creating a Global List. Global Lists can be applied to any number of questions across the dialog.  Any changes made to a global list will be reflected across all questions which use that list.  This is a good thing to use if you wish to reuse the same list over and over.

![Anatomy of a list](/reference/anatomy-of-list.png)

To add a new list item, click the `add` button (plus sign) and enter a key and text.  **NOTE**: When creating lists, the key (ID) is not auto-generated, and it must be set manually by the form creator. Any changes to the ID will be auto-updated globally, however.

Let's fill in the name and options in our list of Favourite Foods. You should see something similar to the following:

![Anatomy of a list](/reference/anatomy-of-list2.png)

Now that we have a list, we need to apply it to our `Choice` question and give our `Choice` question some text to prompt the user on the filling side.  Click the hamburger icon in the top right corner of the question and select `Options`.

![Add a list to choice](/reference/choice-attach-list.png)

Now, select the global list you just created.  If you had wanted to create a one-time list which is bound to this question in specific, you could create a local list here.

![Add a list to choice](/reference/select-global-list.png)

Let's preview this on the filling side:

![Choice list filling side](/reference/choice-list-filling.png)

Now that we have seen how to create a global list, next, we will create a `Multi-choice` input type and connect it with a local list, which follows basically the same process.

![Add multi-choice](/reference/add-multi-choice.png)

Create a local list. For this case, we will create a "Food Preferences" list.

![Add multi-choice2](/reference/add-multi-choice2.png)

Create the local list of food preferences. Remember that this list is bound to this specific question only and cannot be reused in a different question.

Your food preferences list should look something like this:

![Local list of food preferences](/reference/food-preferences-local-list.png)

Let's preview the filling side now.

![Local list of food preferences](/reference/preview-filling-2lists.png)

---

### Step 6: Create a Survey input {#survey}

Like `Multi-Row` input types, questions involving survey buttons require being placed in their own specific group: `Survey Group` or `Survey Group Vertical`.  In this section, we will create our fourth question: An opinion survey on restaurants.

The first thing you need to do is create a `Survey Group`.  

`Add item` --> `Structure` --> `Survey Group`. This will create a single group with as many survey options as needed. The Group Label will be the singular prompt for the user, unifying all of the survey options under one question text.

![Create survey group](/reference/create-survey-group.png)

Next, add the categories for the survey options by selecting `Survey item`.

![Create survey group](/reference/create-survey-group2.png)

Note that the number of inputs directly corresponds to the number of survey categories the user will be able to choose from.

![Create survey group inputs](/reference/create-survey-group3.png)

Now that we have the categories, it is time to add the survey buttons themselves. This is done by creating a list. For this question, we will create a local list.  Select the hamburger icon in the top right corner of the group, then select `Options` and `Create local list`.

![Create survey group inputs](/reference/survey-group-list.png)

This is what we see on the filling side preview:

![Survey group on filling side](/reference/survey-group-filling-side.png)

---

### Step 7: Write simple validation, visibility, and requirement rules {#rules}

To create a more dynamic and appropriate user experience, the dialog should be crafted in such a way that it responds to user inputs efficiently and logically. For example, it would not make sense to ask a user about a favourite restaurant if he/she had previously specified that he/she doesn't eat at restaurants. Likewise, if a question asks the user for an email address, and the email address is to be used in the future for sending follow-up emails, it would be reasonable to expect that this field is required to be filled and that the input conforms to valid email address specifications. Validation, visibility, and requirement rules allow you to accomplish these things with ease.  These rules are written in Dialob Expression Language (DEL), a "programming" language so simple that even those who have never touched programming can use it.  It resembles a combination of algebra and the most basic of English grammatical structures.

Before we begin writing rules, however, it is important to understand that there is are two ways/places to write rules: In the "Rule Editor" and  in the "In-line editor".

**_Visibility_ and _Requirement_ rules are read-only within the question. These are edited with the Rule Editor at the bottom of the screen.  You cannot edit them simply by moving your mouse curser to their empty fields and starting to type. To edit them, first you need to click the question itself to make it active, and then look at the bottom part of your screen: You will see the Visibility and Requirement rule editor there and it will be populated with the empty visibility and requirement fields.  After writing your rules, you can look up to see that they have appeared in the question's read-only fields.**

**Validation messages, validation rules, and Default Value are editable directly within the question. To edit these, simply click the question and put your curser inside the field. Then, you can type your rules directly into the question.  These rules will not show up in the rule editor at the bottom of the screen.**

Below is an example of the rule editor when empty. Nothing appears.

![Inactive rule editor](/reference/inactive-rule-editor.png)

Below is an example of the rule editor when a question is active. You can tell that a question is active if it has a blue highlight above the question text field.  When the question is active, the rule editor appears with the visibility and requirement fields ready for editing.

![Active rule editor](/reference/active-rule-editor.png)

**Now that we know where to write and edit rules, from this point forward, please remember that rules demonstrated in the screenshots are created in the manner specified above.**

Let's begin by adding a simple requirement rule to our first `Multi-Row` input. 

This is achieved simply by writing `true` in the `Required` field, which you find in the question editor at the bottom of the screen.  If a question has `Required` set to `true`, the dialog session cannot be completed until the question is answered (Complete button will be greyed out).

Note that all questions default to `false`, which means that, unless otherwise specified, there is no requirement that questions be answered before completion of the dialog is permitted.

![Adding requirement rule](/reference/adding-requirement-rule.png)


Next, after collecting the user's name, it might be nice to collect additional information if the user selects "other" from the favourite food `Choice` drop-down list. However, we did not add the option to select "other" before when we created the original global list. We will edit the global list to add that option, and then we will make a text box response field and set it to be visible if the user selects "other".

First, go up to the top menu bar and select `Lists`. Then, select your global list, `Favourite Foods`.  Adding another option is as simple as clicking the `Add` icon and setting your key-value pair.

![Edit Global List](/reference/edit-global-list.png)

Return to `group1`: Favourite Foods. Click the `Add item` button within the group to add a new input. Select the `Text Box` input type.  The text box question editor will appear at the bottom of the group. If you wish to reorder it and place it after the first `Choice` question, drag it into place from the tree view on the left.

![Adding a text box](/reference/add-move-text-box.png)

At this point, we will begin writing a visibility rule. We want to show `textBox1` **only if** a user selects "other" from the drop-down list in the preceeding question.  Using DEL, we will write the following into the `Visibility Rule` field:

`list1 = "other"`

Breaking it down, this rule is saying that, if the value "other" from the global list is selected in the question whose ID is `list1`, the expression will be `true`, and if this expression is `true`, `textBox1` is shown.  We can also make this a `Required` field.

![Text Box Visibility](/reference/text-box-visibility.png)

On the filling side, we see this:

![Text Box Visibility filling side](/reference/text-box-visibility-filling.png)

It would be nice if our `textBox1` required the user to submit an input of a certain length so as to ensure a more detailed response. We can write a validation rule to specify the minimum / maximum length of a response.  We will also want to write a validation message, which will appear on the filling side if the user enters data that we don't want to accept, which is specified by our validation rule. The validation message will alert the user that the input is not valid and prompt him/her to re-enter it correctly.

Validations work in this way: Dialob will evaluate the user's inputs against the rules you write, and if your validation rule evaluates to `true`, the validation message will be displayed. The message will continue to be displayed until the rule evaluates to `false`. Please keep this in mind when writing validation rules.

**Remember that validation rules and messages are edited in-line, in the question itself.**

Using the `lengthOf( )` function, we tell Dialob to check that the input of the item in parenthesis (in this case, `textBox1`) is less than 25 characters. If the user provides an input of fewer than 25 characters, the validation will evaluate to `true` and the validation message will be shown, prompting the user to continue entering characters, until the user enters more than 25 characters. At that time, the validation will evaluate to `false` and the message will stop being displayed. The form will also be completable, as a form cannot be completed with any outstanding invalid inputs.

![Text Box validation writing](/reference/text-box-validation-writing.png)

On the filling side:

![Text Box with validation on filling side](/reference/text-box-filling-side.png)

---

### Step 8: Preview your Dialog {#preview}

Congratulations! You have now gone through the basic steps in creating a dialog using Dialob Composer. Preview your form to see your end product!

This guide has been a simple beginning to help you become aware of Dialob's features and how the platform works in the dialog creation process. Of course, there are many more functionalities to explore and advanced options available to leverage the power of Dialob in the creation of highly complex, flexible dialogs. Please see the other sections of the documentation for an additional, more in-depth look.
