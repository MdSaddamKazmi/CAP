clone the repo and switch to branch : draft_enabled


Below steps have been taken ==>
* Annotation was added to make the entities draft enabled //  odata.dearft.enabled


What you need to do ==>
* use "cd Project_Student_Details" to go inside the folder
* use command "cds watch" to check UI on port 4004
* check annotation file app/project1/annotations.cds
* use command "cds deploy --to sqlite:student.db" to deploy changes to sqlite db
* Once you do this , use cds watch command and open the UI to check if "Create" button got enabled 
* Click on "create" button and fill the values but do not save it. Go back to the main page of UI and you will see that the draft record is getting displayed in the list.
* Once you have tested the UI ,use CTRL+C in Terminal to stop the local server

