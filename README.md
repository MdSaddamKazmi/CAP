clone the repo and switch to branch : add_local_db_and_test_locally



* use "cd Project_Student_Details" to go inside the folder
* open package.json and check for the dependencies
* use command "npm install sqlite3 @sap/cds-sqlite" to install local db

* add below code in package.json 

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

* use command "cds deploy --to sqlite:student.db" // db name can be anything based on your choice : "your choice".db 

* add a test.http file "( filename can be anyname with http extension ) under ur root folder to test the CRUD operation locally   
