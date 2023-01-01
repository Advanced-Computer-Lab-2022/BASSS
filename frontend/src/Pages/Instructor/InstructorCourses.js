import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Courses from '../../components/Courses/Courses';
import editmyInfo from '../../components/EditmyInfo/EditmyInfo';
import Forgetpass from '../../components/Forgetpass/Forgetpass';
import Search from '../../components/Search/Search';
import MyCourses from '../../components/MyCourses/MyCourses';
import InstructorNavBar from './InstructorNavBar/InstructorNavBar';
import ViewRating from '../../components/ViewRating/ViewRating';

function InstructorCourses (){
    return(
        <div className='Instructor-body'>
            <InstructorNavBar/>
            <MyCourses/>
            <Link to ="/instructor/promotion">
                <button className='promotion'> define a promotion</button>
            </Link>

            <button class='instructor_CreateCoursebtn' onClick={()=> window.location.href='/instructor/CreateCourse' } > CreateCourse</button>
        </div>

    )
}

export default InstructorCourses