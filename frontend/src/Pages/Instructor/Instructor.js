import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Search from '../../components/Search/Search';
import Courses from '../../components/Courses/Courses';
import MyCourses from '../../components/MyCourses/MyCourses';
import InstructorNavBar from './InstructorNavBar/InstructorNavBar';
function Instructor(){
    return(
        <>
        <div className='Instructor-body'>
            <InstructorNavBar/>
        <Link to ="/instructor/SelectCountry">
        <button className='instructor_selectcountrybtn'> Select your Country</button>
        </Link>

        <Link to ="/instructor/CreateCourse">
        <button className='instructor_CreateCoursebtn'> Create a new Course</button>
        </Link>
        {/* <SelectCountry/> */}
        <Search Type='instructor'/>

        <Courses/>
        </div>
        </>
    )
}
export default Instructor;