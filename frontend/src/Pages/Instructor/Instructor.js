import '../../App.css'
//import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import InstructorNavBar from './InstructorNavBar/InstructorNavBar'
import Courses from '../../components/Courses/Courses';

function Instructor(){
    return(
        <>
        <InstructorNavBar/>
        <div className='Instructor-body'>
        <Link to ="/instructor/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>

        <Link to ="/instructor/CreateCourse">
        <button className='CreateCoursebtn'> Create a new Course</button>
        </Link>

        <Link to ="/instructor/promotion">
        <button className='promotion'> define a promotion</button>
        </Link>
        <Link to ="/instructor/MyCourses">
            <button>
                View My Courses</button>
            </Link>
        {/* <SelectCountry/> */}



        <Courses Link = "/instructor/CourseDetails" />
        </div>
        </>
    )
}
export default Instructor;
