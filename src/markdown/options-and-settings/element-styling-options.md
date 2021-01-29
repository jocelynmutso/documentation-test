# Element Styling Options

## Quick Summary

* Note outputs and description fields (group description / question level help text) can be styled with Markdown
* Use the eye icon to toggle between the editor and preview when editing with Markdown
* The description field can be used at the group level or at the question level
* **Only CSS classes that have already been specified and predefined by your organisation are available for use.**

[Styling with Markdown](#markdown)  
[Description](#description)  
[Style classes](#style-classes)  
[Properties](#properties)  

---

## Overview

Dialob is set up to give you a range of out-of-the-box customisation options for specifying the look and feel of the filling side; for example, creating custom layouts, customising colors, fonts, input buttons, and much more.  These features are accessed via the `Options` menu on the element level. 

Access `Options` via the hamburger icon at the top right of the element.  

![Accessing Element Options Modal](optionsandsettings/options-menu1.png)

The `Options` window contains three basic items: **Description, Style Classes,** and **Properties.**

---

### Styling with Markdown {#markdown}

The following outputs can be styled using simple Markdown: 

* Note output
* Description field
  * Group description
  * Question level additional information/help text

[See Markdown reference](https://www.markdownguide.org/)

While editing Markdown, you can

* Toggle between the editor and the preview by clicking on the eye and code icon.
* View Markdown syntax guide by clicking on the question mark icon.

![Markdown window](optionsandsettings/markdown.png)

Some examples of the differences between unstyled and styled fields are below.

**This is an unstyled Group Description and question-level additional information.**

![Markdown before](optionsandsettings/markdown-before.png)

**This is the same Group Description and question-level additional information styled with Markdown.**

![Markdown after](optionsandsettingss/markdown-after.png)


---

### Description {#description}

The Description field can be used on the Group level or on the Question level.

* **Group level**:
  * **Create a group description**: Give additional information about a group which will appear under the Group Label on the filling side. To access the Description on the Group Level to apply a Group Description, click on the Group's Hamburger icon.
* **Question level**:
  * **Create question-level "help text"**: Give additional information to assist users on the filling side or communicate extra information about specific questions. To access the Description on the Question Level to apply a Question-level additional information text, click on the question's Hamburger icon.

Like `Note` output type, both Group Description and Additional Information can be styled with [Markdown](https://www.markdownguide.org/). 

![Accessing Element Options Modal](optionsandsettings/options-menu2.png)

The form below has a Group Level Description and Question-level additional information text/styling applied.

![Styling headings and descriptions](optionsandsettings/properties1.png)

**NOTE**: Keep in mind that the Group Label is written directly into the Group Label field itself, not via the Options modal.

---

### Style classes {#style-classes}

This feature allows you to _apply_ existing CSS classes to elements.

![Styling classes tab](optionsandsettings/style-classes-tab.png)

**Only CSS classes that have already been specified and predefined by your organisation are available via this modal.**

To apply preexisting styles, refer to your organisation's documentation to enter a defined CSS class name, and if it already exists in the system, it will be applied. However, if it hasn't already been defined, no changes will appear on the filling side.

**NOTE**: New CSS classes cannot be created with this feature.

---

### Properties {#properties}

This feature makes it possible to communicate specific data to the fill API.  Client-specific configurations can strictly define properties, including which elements can have which properties. For example, a Group element may have a `columns` property with a value that defaults to 1.  

![Properties Column](optionsandsettings/properties-column1.png)

Another example is a `display` property with the value of Dropdown and a `notscored` property with the value of a switch.

![Properties Dropdown](optionsandsettings/properties-dd.png)

The Properties feature works in combination with your specific configuration to allow customisation in a controlled manner.
