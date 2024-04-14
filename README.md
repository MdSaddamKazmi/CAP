clone the repo and switch to branch : custom_handler




Below steps have been taken ==>
* A file has been created inside srv folder with naming convention as namespace-service.js  // here the file name is StudentDetails-service.js 

* Added the code to update email as firstname + last name + @gmail.com if email field is left blank while creating student record

* Added the code to increase the strength of school by 1 once the student record is added for that school


What you need to do ==>
* use "cd Project_Student_Details" to go inside the folder.
** If you are directly checking this branch ,first deploy to sqlite by using command  "cds deploy --to sqlite:student.db"
* use command "cds watch".Check the schoolstrength of a school record.
* create a record of student and then check the record of school . It should have increased by 1


*** you can get more knowledge of services via the link : https://cap.cloud.sap/docs/node.js/core-services

