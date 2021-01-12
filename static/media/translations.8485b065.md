##### What's on this page

[Overview](#overview)  
[Activating a new language and selecting creation modes: Copy from Active, Create Empty](#activating)  
[Translating items](#translating-items)  
[Testing](#testing)  

---

### Overview of Translation feature {#overview}

The ability to create multi-language forms is critical, and Dialob supports this via a simple Translation feature.  There are three main items within the Translation window:

1. **Languages Tab**: All activated languages, including the currently active language of the filling side. Within this tab, you can also set the active language for your filling session. The active language is indicated with the language name inside of a blue highlighted box.

2. **Fields Tab**: All form fields, including Page, Group, and Question-level labels

3. **Lists Tab**: All list items

![Translations](/images/translation1.png)

---

### Activating a new language

When you activate a supported new language, any translations you have written for fields and items will appear in that language on the filling side as long as they have been defined.  Filling side buttons will automatically be translated into the active language.

From the screenshots above and below, you can see that English is the only supported language on our form. Also, the blue highlighted box indicates that English is the currently active language. 

To activate a new language, select it from the "Add new language" dropdown. Currently, English, Swedish, Finnish, and Estonian come built-in. Support for additional languages can be added per client request.

![Translations](/images/translation2.png)

Take note of the two creation method options: **Copy from Active** and **Create Empty**.  

#### Copy from Active

This feature will create the new language and populate its values with a copy of the values in the currently active language. In practice, this means that if your currently active language is English, and you create a new language with the "Copy from Active" option, you will see your existing values copied to the new language in English. The values will need to be deleted and translated accordingly.

This is the result when selecting "Copy from Active":

![Copy from Active](/images/copy-from-active.png)

NOTE: When creating new translations via "Copy from Active", you can be assured that there will never be any blank fields or items on the filling side. If you forget to translate certain items into the active language of the filling side, they will appear in the language from which they were copied, thus ensuring that every field has at least some text in it.

#### Create Empty

This feature will activate the new language without copying the values from the currently active language, essentially leaving you with a "blank slate" with which to start writing your translations, no deleting needed.  

This is the result when selecting "Create Empty":

![Create Empty](/images/create-empty.png)

NOTE: If you forget to translate some fields and then start a filling session with incomplete translations, the untranslated items will not appear, causing empty fields on the flling side.  You can easily see if there are any remaining untranslated items by checking the "problems" box. If the "problems" box indicates a number other than zero, simply click on the box and you will be taken to the untranslated item.

---

### Translating items {#translating-items}

Upon activating a new language, you can begin to translate your items. In this example below, we activated the Estonian language and selected the "Create empty" option. We then navigated to the "Fields" tab.

There are two things to be aware of here.

* **Blue "Problems" message**: This will display how many untranslated items there are. Once all items have been translated, the "problems" will change to zero.
* **"Show language" dropdown**: Click here to select the language into which you want to translate your items. In our case, we will select Estonian language. Note that you cannot proceed with translations until you have chosen the language to show in the Translation window.

**NOTE**: To make additional languages appear in this dropdown into which you can translate, you need to activate them in the Languages tab first.  

![New Language List Tab](/images/translation3.png)

Once you have clicked your desired language inthe "Show language" dropdown, the translation text box will appear on the right.

To start additing translations, click the row/value you wish to translate, and write your translations in the Translation box.

![Writing translation](/images/translation4.png)

Now, we have written all the translations. Note that the "problems" message is now zero.

![Translations complete](/images/translation6.png)

---

### Testing {#testing}

You can test that your translations appear correctly on the filling side first by changing the active language either via the Translation window OR via the language dropdown in the Composer upper menu.

![Testing languages](/images/activate-language.png)

In this example, we select "Estonian" from the dropdown and then select "Preview", and on the filling side, everything is correct:

![Testing languages](/images/est-translation.png)

