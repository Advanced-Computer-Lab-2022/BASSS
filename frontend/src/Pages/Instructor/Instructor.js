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
        {/* <Link to ="/instructor/myInfo">
        <button> edit my info</button>
        </Link> */}

        <Courses Link="/instructor/courseDetails"/>
        

        {/* <Courses/> */}

        <Link to ="/instructor/promotion">
        <button className='promotion'> define a promotion</button>
        </Link>
        <ViewRating/>


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