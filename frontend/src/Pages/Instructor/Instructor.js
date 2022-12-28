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

function Instructor(){
    
    return(
        <>
        <div className='Instructor-body'>
        <InstructorNavBar/>
        <Search Type='instructor'/>        
        <br/><br/>
        <Link to ="/instructor/myInfo">
        <button> edit my info</button>
        </Link>
        
        
        <Search Type='instructor'/>
       
        {/* <Courses Link="/instructor/courseDetails"/> */}
        
        <Link to ="/AllCourses">
        <button >View AllCourses </button>
        </Link>
        <br></br>
        <Link to ="/mostViewd">
        <button >View our most popular Courses </button>
        </Link>

        {/* <Courses/> */}

        {/* <Link to ="/instructor/promotion">
        <button className='promotion'> define a promotion</button>
        </Link> */}
        <ViewRating/>

        <Link to ="/instructor/MyCourses">
            <button>
                View My Courses</button>
            </Link>
            <br></br>
            <Link to ="/instructor/MyReviews">
            <button>
                My Reviews</button>
            </Link>
            <Link to ="/instructor/myReports">
            <button >View My Reports </button>
            </Link>

        {/* <SelectCountry/> */}

        </div>
        </>
    )
}
export default Instructor;