using {StudentDetails} from '../db/schema';

@path : 'StudentDetails'
service StudentService {
    entity Students as select from StudentDetails.Student;
    entity Schools as select from StudentDetails.School;
}
