clone the repo and switch to branch : add_local_db_and_test_locally
(No need to clone the repo again if you have already cloned it once. you can just switch to above mentioned branch)


Below steps have been taken ==>
* used command "npm install sqlite3 @sap/cds-sqlite" to install local db
* below code was added in package.json 

  "cds": {
    "requires": {
      "db": {
        "kind": "sqlite",
        "credentials": {
          "database": "student.db"  // "your choice".db
        }
      }
    }
  }

What you need to do ==>
* use "cd Project_Student_Details" to go inside the folder
* open package.json and check for the dependencies
* use command "cds deploy --to sqlite:student.db" // db name can be anything based on your choice : "your choice".db 
* "test.http" file has been added "( filename can be anyname with http extension ) under your root folder to test the CRUD operation locally.
* use command "cd Project_Student_Details" command in terminal to go inside the folder and use command "cds watch" and then click on "send request" in test.http file for CRUD operation
* Once tested , use CTRL+C in Terminal to stop the local server

**Previous Branch : https://github.com/MdSaddamKazmi/CAP/tree/add_local_db_and_test_locally

**Next Branch : https://github.com/MdSaddamKazmi/CAP/tree/custom_handler
