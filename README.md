clone the repo and switch to branch : add_ui


Below steps have been executed ==>
open application generator with CTRL+SHIFT+P and added a template

* select "list report page" template. clicked on next
* selected "choose a Local CAP project" as data soure , chose the project as Project_Student_Details and service as EmployeeService (Node.js)
* Chose main entity as Students and checked radio button as yes for "Automatically add table columns to the list page and a section to the object page if none already exists?"
* on the final page of attributes , left everything as it is ( default values) .click on Finish
* Once above steps are done , checked the folder "app"

What you need to do ==>
* Check the folder app and directory project1
* use "cd Project_Student_Details" to go inside the folder and use command "cds watch" to check the data on port 4004 
* UI will be available under section web applications
