import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Courses from '../../components/Courses/Courses';
import editmyInfo from '../../components/EditmyInfo/EditmyInfo';
//import app from '../../../../backend/App.js';

import Search from '../../components/Search/Search';
import MyCourses from '../../components/MyCourses/MyCourses';
import InstructorNavBar from './InstructorNavBar/InstructorNavBar';
function Instructor(){

    const clickhandler1 = ()=>{
       
       }

    
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
        

        <Link to ="/instructor/myInfo">
        <button> edit my info</button>
        </Link>
        
        
        <Search Type='instructor'/>
       
        <Courses Link="/instructor/courseDetails"/>
        

        {/* <Courses/> */}
        </div>
        </>
    )
}
export default Instructor;