
namespace StudentDetails;

using {managed} from '@sap/cds/common';


entity Student : managed {
    key student_id    : Integer @mandatory;
        firstName     : String @mandatory;
        lastName      : String;
        dateOfBirth   : Date;
        dateOfJoining : Date;
        email         : String;
        phoneNumber   : String @mandatory;
        school        : Association to School @readonly;    // One student will belong to one school
}

entity School : managed {
    key school_id      : Integer @mandatory;
        SchoolName     : String @mandatory;
        Principal      : String @mandatory;
        SchoolStrength : Integer @readonly;
        Curriculum     : String @mandatory;
        rating         : String;
        students       : Composition of // Association to 
                         many Student on students.school = $self;   // one school can have multiple students
}


