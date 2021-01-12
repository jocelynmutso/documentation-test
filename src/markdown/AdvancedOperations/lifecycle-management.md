##### What's on this page:

[Introduction to version tagging with Dialob: Linear and Branching](#introduction)  
[How to create a version tag](#create-tag)  
[What happens if multiple users access the same dialog session at the same time](#multiple-users)  

### Introduction {#introduction}

Managing the Dialob Lifecycle is simple with versioning. Creating a "version" can be thought of as assigning a name to represent the state of a dialog at a certain point in time. This "version tag" can then be referred back to at any time, and previously-created dialogs can be recalled and used whenever needed. Dialogs can be continually refined and managed through versioning, with the Version history providing a list of each version and the date when it was created.  

When making a new version, Dialob Manager will save the dialog in its current state and create a "latest" version, which is an exact copy of the newly-tagged version. In this way, new versions can be built on top of old versions, using the older versions as a "starting off point" for the latest versions.  

Dialob currently supports two forms of versioning: **Linear** and **Branching**. These two versioning methods can be easily explained with the example of a teacher who needs to give yearly exams to his students.  This teacher has a core set of 10 questions that he asks on an exam every year. However, he needs to add 10 additional, different questions each year to supplement the core with questions relevant only to that year's class: His goal is a test containing a maximum of 20 questions: 10 core and 10 new.

**Linear tagging**: The teacher creates Version 1.0 (v1.0) with his 10 core questions. He then creates v2018, which is based on v1.0 (comprised of the core set of questions) plus he adds the additional 10 questions for his 2018 class.  He now has two versions: v1.0 (original) and v2018 (original + 10 new questions = 20 questions).  Then, next year, he creates version 2019, which is an exact copy of v2018: the core set of questions from v1.0 **plus** the additional questions, for a total of 20 questions. He has essentially created an evolving form, continually changing each year as he adds to it. If the teacher wants to reuse the same test from 2018 without much additional work aside from deleting or tweaking a few questions, this is a good approach. However, if he wants to create a totally new v2019 which includes only the core 10 questions and the unique 10 additional questions for his 2019 class, he should use **branching**.

**Branching**: If the teacher wants to create different versions of the same form which share the same core questions, he can create "branches". Branching creates different copies of the same form, which can be edited independently from one another and whose changes have no effect on the core (original version) or each other.  The teacher can easily create a v1.0 core set and a v1.0.2017, v1.0.2018, and v1.0.2019 to suit his needs. If he uses branching, he will not need to edit a previous tag's 10 unique questions: He can start fresh with the 10 core questions and simply add his 10 new questions.

In summary, creating version tags via the `Version` menu creates dialogs that are versioned in a straight line as a continuous process, which means, in practice, that the newer version is based on the version that came immediately before it.

Branching, on the other hand, produces "lateral" versions based on the same original copy. It works simply by copying the original version and creating a duplicate.  The branching functionality is not currently available in the `Version` menu, and branched versions will not appear in Version history.

### How to create a version tag {#create-tag}

1. Navigate to the `Version` menu. To the right of `Version`, the current dialog's version tag in will be displayed. If the active dialog is the latest version, "Latest Version" will be displayed. If the active dialog of is a previous version, that version's tag will be displayed.

2. To create a new version, nagivate to `Version` / `Create version tag` and enter desired version tag.

3. When navigating back to `Version` / `Manage versions`, a list of all version tags and the dates at which they were created is displayed. Select `Activate` for a previous version.

![](/images/version1.png)

### Multiple users accessing the same dialog session at the same time {#multiple-users}

In the Dialob lifecycle, it is possible for multiple versions of the same dialog to co-exist at the same time.  For example, a situation may occur when one user is working with an older version on the filling side, while, at the same time, another user decides to create a new version.  Because session IDs are associated with the user's login, the user with the older version will proceed with the older version while the user with the newer version will proceed with the newer version.  Dialob's default behaviour is to allow this, but it can be modified if needed.  

Also, when in the production environment, one user can be editing a dialog on the Composer side while another user can see the changes as they happen on the filling side.  However, multiple users editing the same dialog session at the same time is not supported and will cause unpredictable Dialob behaviour.
