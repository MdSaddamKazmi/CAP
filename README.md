clone this repo and switch to branch : test_ui_with_csv_file_entries
by using command "git switch test_ui_with_csv_file_entries"


* Add folder csv inside folder db and add files per entity with naming convention as :
namespace-entityname.csv    ( you can check the name of namespace in schema.cds file in db folder )

* Here in this example namespace is StudentDetails and Entities are Student and School
  
* Add fieldnames and few records per entity in the csv file.

* use command "cd Project_Student_Details" in terminal to go inside the folder and use command "cds watch" to check the data  on port 4004 
