clone the repo and switch to branch : composition
(No need to clone the repo again if you have already cloned it once. you can just switch to above mentioned branch)




Below steps have been taken ==>
* Changed "association to" to "Composition of" in file db/schema.cds

* In file app/project1/annotations.cds, commented the draft enablement of student entity because if you use composition , the master entity owns all other entities and no separate life-cycle exists. the life cycle of main entity ( in our case school) will be main.


* Added a facet to have the student entity on the object page of school entity

 // Students information
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'Students',
            Target: 'students/@UI.LineItem',
            Label : 'Students Data'
        }

* In the terminal , moved to folder Project_Student_Details and ran the command 
cds deploy --to sqlite:student.db

* clicked on extension SQLTools ( if you dont see it in your vscode then check extension and install SQLTools SQLite) and then click on "Add new connection".
clicked on SQLite icon and then passed values as ( any suitable name for connection name . clicked on "select file" and searched for the db file (student.db in current scenario) that you created by using cds deploy and then clicked on save connection ) and clicked on "connect now".

* Deleted the records from csv files of folder db/csv
  
* Changed the code in handler file ( srv/StudentDetails-service.js )

* Ran the command cds deploy --to sqlite:student.db in ur terminal 


* Opened application generator by using "SHIFT+CTRL+P" and created an ui with school as main entity and student as sub entity (navigation entity). Named the UI module as "schooldata"


What you need to do ==>
* use "cd Project_Student_Details" to go inside the folder.
** If you are directly checking this branch ,first deploy to sqlite by using command  "cds deploy --to sqlite:student.db"
* use command "cds watch".Check the schoolstrength of a school record.
* create a record of student and then check the record of school . It should have increased by 1
* use CTRL+C in Terminal to stop the local server

*** you can get more knowledge of services via the link : https://cap.cloud.sap/docs/node.js/core-services


**Previous Branch : https://github.com/MdSaddamKazmi/CAP/tree/custom_handler



