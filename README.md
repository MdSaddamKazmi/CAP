clone this repo and switch to branch : check_service_and_preview_with_csv_file_entries by using command "git switch check_service_and_preview_with_csv_file_entries"

Below steps have been taken ==>
* Added csv folder inside db folder and added files per entity with naming convention as :
namespace-entityname.csv ( you can check the name of namespace in schema.cds file in db folder )
* Here in this example namespace is StudentDetails and Entities are Student and School
* Added fieldnames and few records per entity in the csv file.

What you need to do ==>
* Check files in path db/csv.
* Add any number of records in csv files as per your choice
* use command "cd Project_Student_Details" in terminal to go inside the folder and use command "cds watch" to check the data  on port 4004
* Once you have checked the data , use CTRL+C in Terminal to stop the local server
