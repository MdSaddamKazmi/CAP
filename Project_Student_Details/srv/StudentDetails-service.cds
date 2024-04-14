using {StudentDetails} from '../db/schema';

@path : 'StudentDetails'
service EmployeeService {
    entity Students as select from StudentDetails.Student;
    entity Schools as select from StudentDetails.School;
}
