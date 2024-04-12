
namespace StudentDetails;

using {managed} from '@sap/cds/common';


entity Student : managed {
    key student_id    : Integer;
        firstName     : String;
        lastName      : String;
        dateOfBirth   : Date;
        dateOfJoining : Date;
        email         : String;
        phoneNumber   : String;
        school        : Association to School;    // One student will belong to one school
}

entity School : managed {
    key school_id      : Integer;
        SchoolName     : String;
        Principal      : String;
        SchoolStrength : Integer;
        Curriculum     : String;
        rating         : String;
        students       : Association to many Student
                             on students.school = $self;   // one school can have multiple students
}


