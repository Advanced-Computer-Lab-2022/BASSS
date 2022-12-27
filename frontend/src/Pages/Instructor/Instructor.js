import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Courses from '../../components/Courses/Courses';
import editmyInfo from '../../components/EditmyInfo/EditmyInfo';
//import app from '../../../../backend/App.js';
import Forgetpass from '../../components/Forgetpass/Forgetpass';
import Search from '../../components/Search/Search';
import MyCourses from '../../components/MyCourses/MyCourses';
import InstructorNavBar from './InstructorNavBar/InstructorNavBar';
import ViewRating from '../../components/ViewRating/ViewRating';

function Instructor(){

    const clickhandler1 = ()=>{
       
       }

    
    return(
        <>
        {/* <InstructorNavBar/> */}
        <div className='Instructor-body'>
        {/* <InstructorNavBar/> */}
        <Link to ="/instructor/SelectCountry">
        <button className='instructor_selectcountrybtn'> Select your Country</button>
        </Link>
        {/* <Forgetpass Type="instructor"/> */}
        <Link to ="/instructor/CreateCourse">
        <button className='instructor_CreateCoursebtn'> Create a new Course</button>
        </Link>
        

        <Link to ="/instructor/myInfo">
        <button> edit my info</button>
        </Link>
        
        
        <Search Type='instructor'/>
       
        <Courses Link="/instructor/courseDetails"/>
        

        {/* <Courses/> */}

        <Link to ="/instructor/promotion">
        <button className='promotion'> define a promotion</button>
        </Link>
        <ViewRating/>

        <Link to ="/instructor/MyCourses">
            <button>
                View My Courses</button>
            </Link>

            <Link to ="/instructor/MyReviews">
            <button>
                My Reviews</button>
            </Link>

        {/* <SelectCountry/> */}

        </div>
        </>
    )
}
export default Instructor;