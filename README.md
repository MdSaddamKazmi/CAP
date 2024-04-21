clone the repo and switch to branch : add_annotations
(No need to clone the repo again if you have already cloned it once. you can just switch to above mentioned branch)

Below steps have been taken ==>
* Annotations have been added in file app/project1/annotations.cds
* On UI , You can see that below mentioned issues have already been fixed: 
  a) there is no selection field apart from default "search" selection
  b) the column's label is fieldname but not some meaningful labels
  c) few columns are not getting displayed by default and can only be displayed by clicking on settings button on UI
  d) there is only 1 facet (General information) on detail page

What you need to do ==>
* use "cd Project_Student_Details" to go inside the folder and use command "cds watch" to check the app on port 4004 
* Open the file annotations.cds in the path app/project1 and check the added annotations.
* In case you want to add any other annotation , you can refer https://cap.cloud.sap/docs/advanced/fiori
* once you have checked changes on annotations on UI , use CTRL+C in Terminal to stop the local server

**Previous Branch : https://github.com/MdSaddamKazmi/CAP/tree/add_ui

**Next Branch : https://github.com/MdSaddamKazmi/CAP/tree/add_local_db_and_test_locally
