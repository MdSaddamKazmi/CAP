using {StudentDetails} from '../db/schema';

@path : 'Employee'
service EmployeeService {
    entity Students as select from StudentDetails.Student;
    entity Schools as select from StudentDetails.School;
}
